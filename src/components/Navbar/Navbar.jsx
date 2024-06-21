import styles from "../../styles/Navbar.module.css"
import { FaSearch } from "react-icons/fa";
import CustomMenu from "../Menu/CustomMenu";



const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <div>Thursday, June 20, 2024</div>
        <div> <img className={styles.logoImg} src="/logo.png" sizes="300x300" alt="Logo New York Times" /></div>
        <div> <FaSearch /> </div>
    </nav>

      <CustomMenu />
    
    </>
  )
}

export default Navbar