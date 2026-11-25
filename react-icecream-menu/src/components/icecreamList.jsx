import IceCreamCard from "./icecreamCard";

function IceCreamList() {
  return (
    <div className="icecream-list">

      <IceCreamCard
        emoji="🍓"
        name="Strawberry"
        description="Fresh and fruity flavour"
        price={80}
      />

      <IceCreamCard
        emoji="🍫"
        name="Chocolate"
        description="Rich chocolate delight"
        price={100}
      />

      <IceCreamCard
        emoji="🍦"
        name="Vanilla"
        description="Classic creamy flavour"
        price={70}
      />

    </div>
  );
}

export default IceCreamList;