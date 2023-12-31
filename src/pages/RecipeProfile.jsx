import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";
import NumberAddOnInput from "../components/common/NumberAddOnInput";

import { getRecipe } from "../services/recipeService";
import { createComment, deleteComment } from "../services/commentService";
import { formatDate } from "../util/dateUtil";
import { calculateIngredientAmountsForOnePortion } from "../util/recipeUtil";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

import "./RecipeProfileStyle.css";

const RecipeProfile = ({ pageName }) => {
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

  const user = JSON.parse(localStorage.getItem("user"));

  const [comment, setComment] = useState({
    recipeId: parseInt(idRouteParameter),
    content: "",
    userId: user ? user.id : 0,
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
      } catch (exception) {
        alert(exception.message);
      }
    };

    populateRecipe();
  }, [idRouteParameter]);

  const { title, content, prepTime, portion, photoFileName, ingredients } =
    recipe;

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
      alert(exception.message);
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
    const amountsForOnePortion = calculateIngredientAmountsForOnePortion(
      ingredients,
      portion,
    );

    if (direction === "up") {
      updatedRecipe["portion"] = actualValue;
    } else {
      updatedRecipe["portion"] = actualValue - 1;
    }
    for (let i = 0; i < amountsForOnePortion.length; i++) {
      ingredients[i].amount = amountsForOnePortion[i] * actualValue;
    }
    for (let i = 0; i < updatedRecipe.ingredients.length; i++) {
      updatedRecipe.ingredients[i]["amount"] = ingredients[i].amount;
    }
    setRecipe(updatedRecipe);
  };

  const { API_ROOT, PHOTOS } = endpoints;
  let imageSource;

  if (photoFileName) {
    imageSource = `${API_ROOT}${PHOTOS}/${photoFileName}`;
  } else {
    imageSource = noImage;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="cardBox">
          <section className="row">
            <article className="col-sm-12 col-md-12 col-lg-6">
              <h1>{title}</h1>
            </article>
          </section>
          <section className="row">
            <article className="col-sm-12 col-md-12 col-lg-6">
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
            </article>
            <article className="col-sm-12 col-md-12 col-lg-6">
              <NumberAddOnInput
                name="portion"
                value={portion}
                minValue={1}
                addOnText="adag"
                onChange={handlePortionChanged}
              />
              <h4>Hozzávalók</h4>
              <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    <p>
                      <span style={{ color: "#dc3545", fontWeight: "bold" }}>
                        {ingredient.amount.toString().slice(0, 4)}
                      </span>
                      {` ${ingredient.unit} ${ingredient.name}`}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </section>
          <section className="row">
            <article className="col-sm-12 col-md-12 col-lg-12">
              <h3> Elkészítési idő: {prepTime} perc</h3>
              <p style={{ textAlign: "justify" }}>{content}</p>
            </article>
          </section>
        </div>
        <section className="row">
          <article className="col-sm-12 col-md-12 col-lg-12">
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
                      {user && user.username === "nagyi" && (
                        <Button
                          text="Komment törlése"
                          className="btn btn-danger"
                          id={comment.id.toString()}
                          onClick={handleActualCommentIdSetting}
                        />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </form>
            {user && (
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
            )}
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default RecipeProfile;
