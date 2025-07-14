import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../Redux/CounterSlice';
import swal from 'sweetalert';
import ViewCart from './Screens/ViewCart';
import Cart from './Cart';

export default function Navbar(props) {
  const [loggedIn, setloggedIn] = useState(true);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Navigation = useNavigate();

  const Email_ID = localStorage.getItem("Email_Id");

  const logg = async () => {
    swal({
      title: `You have successfully Logged Out`,
      text: 'Go Green',
      icon: 'success',
      button: "OK",
    }).then(() => {
      Navigation("/LogIn");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success fst-italic">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">Gofood</Link>

          <Link className="nav-link active" to="/">Home</Link>

          <Link className="nav-link active" to="/LogIn">LogIn</Link>

          <Link className="nav-link active" to="/Cart">
            <ShoppingCartIcon /> {count}
          </Link>

          {loggedIn && (
            <Link
              className="nav-link active"
              to="/LogOut"
              onClick={logg}
            >
              LogOut
            </Link>
          )}

          <Link className="nav-link active" to="/signup">Signup</Link>

          <span className="nav-link text-white">{Email_ID}</span>
        </div>
      </nav>
    </>
  );
}
