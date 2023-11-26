import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import AddRecipeCard from "../components/AddRecipeCard";
import Header from "../components/common/Header";
import Modal from "../components/common/Modal";

export function Home({ pageName }) {
  const receipts = [
    {
      id: 1,
      name: `Hamburger`,
      description: "Ízletes hamburger nagyi konyhájából!",
    },
    {
      id: 2,
      name: `Hot Dog`,
      description: "Ízletes hot-dog nagyi konyhájából!",
    },
    {
      id: 3,
      name: `Pizza`,
      description: "Ízletes pizza nagyi konyhájából!",
    },
    {
      id: 4,
      name: `Somlói galuska`,
      description: "Ízletes somlói galuska nagyi konyhájából!",
    },
    {
      id: 5,
      name: `Kenyérlángos`,
      description: "Ízletes Kenyérlángos nagyi konyhájából!",
    },
  ];
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
