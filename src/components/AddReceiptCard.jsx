import plusSign from "../images/plus.png";

const AddReceiptCard = () => {
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
    </div>
  );
};

export default AddReceiptCard;
