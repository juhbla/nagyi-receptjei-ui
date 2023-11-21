import ReceiptCard from "../components/ReceiptCard";

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
        {receipts.map((receipt) => (
          <article key={receipt.id} className="col-sm-12 col-md-12 col-lg-4">
            <ReceiptCard receipt={receipt} />
          </article>
        ))}
      </section>
    </>
  );
}
