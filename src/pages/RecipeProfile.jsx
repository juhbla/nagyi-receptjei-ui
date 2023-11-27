import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRecipe } from "../services/recipeService";

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

  const format = (createdDateTime) => {
    const date = new Date(createdDateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

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
          <div className="comment">
            <h4>Hozzászólások</h4>
            <ul className="commentList">
              {comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  <span className="username">{comment.user.username}</span>{" "}
                  <br />
                  <span className="content">{comment.content}</span>
                  <span className="createdDateTime">
                    {format(comment.createdDateTime)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
