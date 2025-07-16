import { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

function Card() {
  const [buys, setBuys] = useState([false, false, false]);

  const cards = [
    { img: img1, price: 299, rating: "⭐⭐⭐⭐" },
    { img: img2, price: 399, rating: "⭐⭐⭐⭐⭐" },
    { img: img3, price: 499, rating: "⭐⭐⭐" },
    { img: img2, price: 299, rating: "⭐⭐⭐⭐" },
    { img: img3, price: 399, rating: "⭐⭐⭐⭐⭐" },
    { img: img1, price: 499, rating: "⭐⭐⭐⭐" },
  ];

  function buy(index) {
    const updatedBuys = [...buys];
    updatedBuys[index] = true;
    setBuys(updatedBuys);
  }

  useEffect(()=>{
    console.log("Purchased")
  },[buy])

  return (
    <div className="container">
      <div className="row mt-5">
        {cards.map((card, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                className="img-fluid"
                src={card.img}
                style={{ width: "100%", height: "300px" }}
                alt="product"
              />
              <p className="card-body">Price: {card.price}</p>
              <p>Rating: {card.rating}</p>
              <button onClick={() => buy(index)}>Add</button>
              <p>{buys[index] ? "✅Already purchased" : "⌚ Get it now"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
