function IceCreamCard(props) {
  return (
    <div className="icecream-card">
      <h2>{props.emoji} {props.name}</h2>
      <p>{props.description}</p>
      <h3>₹{props.price}</h3>
    </div>
  );
}

export default IceCreamCard;