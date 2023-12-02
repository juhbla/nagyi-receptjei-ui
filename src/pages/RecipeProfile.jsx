import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextInput from "../components/common/TextInput";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";
import NumberAddOnInput from "../components/common/NumberAddOnInput";

import { getRecipe } from "../services/recipeService";
import { createComment, deleteComment } from "../services/commentService";
import { formatDate } from "../util/dateUtil";
import { roundToOneDecimal } from "../util/mathUtil";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

import "../../src/components/common/RecipeProfileStyle.css";

export function RecipeProfile({ pageName }) {
  const { id: idRouteParameter } = useParams();

  const [recipe, setRecipe] = useState({
    id: idRouteParameter,
    title: "",
    content: "",
    prepTime: 0,
    portion: 0,
    photoFileName: "",
    ingredients: [{ id: 0, name: "", amount: 0, unit: "" }],
    comments: [{ id: 0, user: { id: 0, username: "" }, content: "" }],
    createdDateTime: "",
  });

  const [comment, setComment] = useState({
    recipeId: parseInt(idRouteParameter),
    content: "",
    userId: 1, // TODO: később a belépett user id-ja legyen ide tárolva.
  });

  const [actualCommentId, setActualCommentId] = useState(0);

  useEffect(() => {
    const populateRecipe = async () => {
      try {
        const { data } = await getRecipe(idRouteParameter);
        const { statusCode } = data;
        if (statusCode === 400) {
          window.location.href = "/";
        }
        const { value } = data;
        setRecipe(value);
      } catch (e) {
        console.log("Hiba az API hívása során...");
      }
    };

    populateRecipe();
  }, [idRouteParameter]);

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedComment = { ...comment };
    updatedComment[input.name] = input.value;
    setComment(updatedComment);
  };

  const handleSubmitNewComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createComment(comment);
      const { value } = data;
      const updatedComment = { ...comment };
      updatedComment.content = "";
      setComment(updatedComment);
      const updatedRecipe = { ...recipe };
      updatedRecipe.comments.push(value);
      setRecipe(updatedRecipe);
    } catch (exception) {
      console.log("Hiba történt:" + exception);
    }
  };

  const handleSubmitDeleteComment = async (e) => {
    e.preventDefault();

    await deleteComment(actualCommentId);
    const updatedRecipe = { ...recipe };
    const index = updatedRecipe.comments.findIndex(
      (comment) => comment.id === actualCommentId,
    );
    updatedRecipe.comments.splice(index, 1);
    setRecipe(updatedRecipe);
  };

  const handleActualCommentIdSetting = ({ currentTarget: input }) => {
    setActualCommentId(parseInt(input.id));
  };

  const handlePortionChanged = (e) => {
    let actualValue = parseInt(e.target.value);
    const previousValue = actualValue - 1;

    const direction = actualValue > previousValue ? "up" : "down";

    const updatedRecipe = {
      ...recipe,
    };
    const ingredients = [...updatedRecipe.ingredients];

    if (direction === "up") {
      updatedRecipe["portion"] = actualValue++;
      for (let i = 0; i < ingredients.length; i++) {
        const amount = ingredients[i].amount;
        const amountOfOnePortion = amount / previousValue;
        const result = amountOfOnePortion * actualValue;
        ingredients[i] = roundToOneDecimal(result);
      }
    } else {
      updatedRecipe["portion"] = actualValue--;
      // TODO: csökkentés.
    }

    for (let i = 0; i < updatedRecipe.ingredients.length; i++) {
      updatedRecipe.ingredients[i]["amount"] = ingredients[i];
    }
    console.log(updatedRecipe);
    setRecipe(updatedRecipe);
  };

  const { title, content, prepTime, portion, photoFileName, ingredients } =
    recipe;

  const { API_ROOT, PHOTOS } = endpoints;
  let imageSource;

  if (photoFileName) {
    imageSource = `${API_ROOT}${PHOTOS}/${photoFileName}`;
  } else {
    imageSource = noImage;
  }

  return (
    <div className="container">
      <section className="row">
        <article className="col-sm-12 col-md-12 col-lg-12">
          <div className="cardBox">
            <h1>{title}</h1>
            <img
              src={imageSource}
              className="card-img-top"
              style={{
                width: "500px",
                height: "300px",
                display: "block",
                margin: "20px 0",
                objectFit: "contain",
              }}
              alt={title}
            />
            <div className="units">
              <h3> Elkészítési idő: {prepTime} perc</h3>
              <h4>
                <NumberAddOnInput
                  name="portion"
                  value={portion}
                  minValue={1}
                  addOnText="adag"
                  onChange={handlePortionChanged}
                />
              </h4>
            </div>
            <h4>Hozzávalók</h4>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <div className="row">
                    <div className="col-6">
                      <TextInput
                        type="text"
                        placeholder={ingredient.amount.toString()}
                        disabled={true}
                      />
                    </div>
                    <div className="col-6">
                      <p>{`${ingredient.unit} ${ingredient.name}`}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h4>Elkészítés:</h4>
            <p>{content}</p>
          </div>
          <form onSubmit={handleSubmitDeleteComment} noValidate>
            <div className="comment">
              <h4>Hozzászólások</h4>
              <ul className="commentList">
                {recipe.comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <span className="username">{comment.user.username}</span>
                    <p className="content">{comment.content}</p>
                    <span className="createdDateTime">
                      {formatDate(comment.createdDateTime)}
                    </span>
                    <Button
                      text="Komment törlése"
                      className="btn btn-danger"
                      id={comment.id.toString()}
                      onClick={handleActualCommentIdSetting}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </form>
          <form onSubmit={handleSubmitNewComment} noValidate>
            <div className="new-comment">
              <TextArea
                name="content"
                maxLength={250}
                onChange={handleTextChange}
                value={comment.content}
              />
              <Button text="Küldés" className="btn btn-primary" />
            </div>
          </form>
        </article>
      </section>
    </div>
  );
}
