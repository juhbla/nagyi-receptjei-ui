import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import AddRecipeCard from "../components/AddRecipeCard";
import Header from "../components/common/Header";
import AddRecipeModalForm from "../components/AddRecipeModalForm";

import { getRecipes } from "../services/recipeService";

import "./HomeStyle.css";

const Home = ({ pageName }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const populateRecipes = async () => {
      try {
        const { data } = await getRecipes();
        const { value } = data;
        setRecipes(value);
      } catch (exception) {
        alert(exception.message);
      }
    };

    populateRecipes();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{pageName}</h1>
          </div>
        </div>
        <section className="row">
          {user && user.username === "nagyi" && (
            <article key="0" className="col-sm-12 mt-5  col-md-12 col-lg-4">
              <AddRecipeCard openModal={openModal} />
            </article>
          )}
          {recipes.map((recipe) => (
            <article key={recipe.id} className="col-sm-12 col-md-12 col-lg-4">
              <RecipeCard
                recipe={recipe}
                shouldShowFileInput={!!(user && user.username === "nagyi")}
              />
            </article>
          ))}
        </section>
      </div>
      {isModalOpen && <AddRecipeModalForm />}
    </>
  );
};

export default Home;
