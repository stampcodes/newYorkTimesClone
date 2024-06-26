import { FaSearch } from "react-icons/fa";
import styles from "../../components/Navbar/Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CurrentDate from "../CurrentDate/CurrentDate";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <nav>
        <div className={styles.searchAndDate}>
          {location.pathname === "/" && (
            <button onClick={handleSearchClick} className={styles.searchButton}>
              <FaSearch />
            </button>
          )}
          {location.pathname === "/search" && (
            <button onClick={handleBackClick} className={styles.searchButton}>
              <IoIosArrowBack />
            </button>
          )}
          <CurrentDate />
        </div>

        <div className={styles.navbar}>
          <img
            className={styles.logoImg}
            src={logo}
            sizes="300x300"
            alt="Logo New York Times"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
