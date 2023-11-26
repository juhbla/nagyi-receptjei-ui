import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import AddRecipeCard from "../components/AddRecipeCard";
import Header from "../components/common/Header";
import Modal from "../components/common/Modal";

import { getRecipes } from "../services/recipeService";

export function Home({ pageName }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const populateRecipes = async () => {
      try {
        const { data } = await getRecipes();
        const { value } = data;
        setRecipes(value);
      } catch (e) {
        console.log("Hiba történt az API hívása során...");
      }
    };

    populateRecipes();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <article key="0" className="col-sm-12 mt-5  col-md-12 col-lg-4">
            <AddRecipeCard openModal={openModal} />
          </article>
          {recipes.map((recipe) => (
            <article key={recipe.id} className="col-sm-12 col-md-12 col-lg-4">
              <RecipeCard recipe={recipe} />
            </article>
          ))}
        </section>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
