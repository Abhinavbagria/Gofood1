import { useState, useEffect } from "react";
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, Cartt } from '../Redux/CounterSlice';

export default function Cards(props) {
  const [a, seta] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [buy, setBuy] = useState();

  const full = () => {
    seta(100);
  };

  useEffect(() => {
    dispatch(Cartt());
  }, [dispatch]);

  const imageUrls = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e7qwxlmhvlxj96hiaqv5",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1631515243347-6cb1f040fd10?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {imageUrls.map((url, index) => (
        <div
          className="card fst-italic"
          key={index}
          style={{ width: "16rem", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        >
          <img
            src={url}
            alt="Food Item"
            className="card-img-top"
            style={{
              height: "160px",
              objectFit: "cover",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title || "Food Item"}</h5>
            <p className="card-text">Price: ₹100</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success text-white">
                {Array.from({ length: 6 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select className="m-2 h-100 bg-success text-white">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success"
                  onClick={full}
                >
                  {buy || "Buy"}
                </button>
              </div>
              <div className="mt-2">Total price: ₹{a}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
