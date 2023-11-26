import plusSign from "../images/plus.png";

const AddReceiptCard = ({ openModal }) => {
  return (
    <div className="card mt-3 mb-3">
      <img
        src={plusSign}
        style={{
          width: "250px",
          height: "250px",
          display: "block",
          margin: "0 auto",
          objectFit: "contain",
        }}
        alt=""
      />
      <button className="btn btn-danger" onClick={openModal}>
        Új recept hozzáadása
      </button>
    </div>
  );
};

export default AddReceiptCard;
