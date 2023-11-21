import ReceiptCard from "../components/ReceiptCard";
import AddReceiptCard from "../components/AddReceiptCard";
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
  ];

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>{pageName}</h1>
        </div>
      </div>
      <section className="row">
        <article key="0" className="col-sm-12 mt-5  col-md-12 col-lg-4">
          <AddReceiptCard />
        </article>
        {receipts.map((receipt) => (
          <article key={receipt.id} className="col-sm-12 col-md-12 col-lg-4">
            <ReceiptCard receipt={receipt} />
          </article>
        ))}
        <Modal
          title="Új recept felvitele"
          buttonText="OK"
          routingButtonText="Mégse"
        />
      </section>
    </>
  );
}
