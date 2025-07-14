import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../Redux/CounterSlice';

export default function Cards3() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State: track buy text for each card
  const [buyTexts, setBuyTexts] = useState(
    Array(5).fill("Click to Buy")
  );

  const handleBuy = (index) => {
    dispatch(increment());
    const updated = [...buyTexts];
    updated[index] = `${count + 1} Item Added`;
    setBuyTexts(updated);
  };

  const handleCart = () => {
    navigate("/Cart");
  };

 const cardsData = [
  {
    title: "Da Pizza Inn",
    rating: "4.2",
    price: "₹200 for two",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e7qwxlmhvlxj96hiaqv5",
  },
  {
    title: "Tandoori Junction",
    rating: "4.5",
    price: "₹250 for two",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a1b5d8102b7ef5f4e4a55347818f3d27",
  },
  {
    title: "Burger Blast",
    rating: "4.0",
    price: "₹180 for two",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d13c72eb54db0f0e558b3272c2a6d96f",
  },
  {
    title: "Ice Cream House",
    rating: "4.8",
    price: "₹150 for two",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dc5b2a3ef8c370d0f29d8d2824bcf0e1",
  },
  {
    title: "Biryani Corner",
    rating: "4.1",
    price: "₹220 for two",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqwpuhgnsaf18te7zvtv",
  },
];


  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
      {cardsData.map((card, index) => (
        <div
          className="card"
          key={index}
          style={{ width: "16rem", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        >
          <img
            src={card.image}
            className="card-img-top"
            alt={card.title}
            style={{ height: "160px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.rating} • {card.price}</p>
            <button
              className="btn btn-primary w-100 mb-2"
              onClick={() => handleBuy(index)}
            >
              {buyTexts[index]}
            </button>
            <span
              className="btn btn-outline-secondary w-100"
              onClick={handleCart}
              style={{ cursor: "pointer" }}
            >
              View Cart
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
