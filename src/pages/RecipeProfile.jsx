import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRecipe } from "../services/recipeService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

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
          <img
            src={imageSource}
            className="card-img-top"
            style={{
              width: "500px",
              height: "500px",
              display: "block",
              margin: "0 auto",
              objectFit: "contain",
            }}
            alt={title}
          />
          <h1>{title}</h1>
          <h3>{content}</h3>
          <h3>{prepTime} perc</h3>
          <h3>{portion} adag</h3>
          <h4>Hozzávalók</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <li
                key={ingredient.id}
              >{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</li>
            ))}
          </ul>
          <h4>Hozzászólások</h4>
          <ul>
            {comments.map((comment) => (
              <li
                key={comment.id}
              >{`${comment.user.username} ${comment.content}`}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
