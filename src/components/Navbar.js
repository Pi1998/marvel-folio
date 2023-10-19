import { FaCog, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../Assets/marvel.png';
import { updateCurrentPage } from '../Redux/Character/charactersSlice';

const Navbar = () => {
  const currentPage = useSelector((state) => state.characters.currentPage);
  const dispatch = useDispatch();

  return (
    <div className="menuContainer">
      <div className="top-left">
        {currentPage === 'Details' && (
          <Link to="/">
            <FaArrowLeft color="white" onClick={() => dispatch(updateCurrentPage('Home'))} />
          </Link>
        )}
      </div>
      {currentPage === 'Home' && <img src={logo} alt="logo" className="logo" />}
      <div className="title">MarvelFolio</div>
      <FaMicrophone color="white" fontSize="1.2em" />
      <FaCog color="white" fontSize="1.2em" />
    </div>
  );
};

export default Navbar;
