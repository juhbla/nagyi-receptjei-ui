import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

import { getRecipe } from "../services/recipeService";
import { createComment } from "../services/commentService";
import { formatDate } from "../util/dateUtil";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

import "../../src/components/common/RecipeProfileStyle.css";
import { CommentSection } from "../components/common/CommentSection";

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

  useEffect(() => {
    const populateRecipe = async () => {
      try {
        const { data } = await getRecipe(idRouteParameter);
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

  const handleSubmit = async (e) => {
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

  const {
    title,
    content,
    prepTime,
    portion,
    photoFileName,
    ingredients,
    comments,
  } = recipe;

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
              <h4> Elkészítési idő: {prepTime} perc</h4>
              <h4>{portion} adag</h4>
            </div>
            <h4>Hozzávalók</h4>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                </li>
              ))}
            </ul>
            <h4>Elkészítés:</h4>
            <p>{content}</p>
          </div>
          <CommentSection comments={recipe.comments} />
          <form onSubmit={handleSubmit} noValidate>
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
