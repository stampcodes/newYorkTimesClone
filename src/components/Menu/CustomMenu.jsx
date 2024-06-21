import { useState } from "react"
import styles from "../../styles/CustomMenu.module.css"
import { IoIosArrowDown } from "react-icons/io";

const CustomMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dropDownMenu = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
    <button onClick={dropDownMenu} className={styles.dropDownMenu}>
      button <IoIosArrowDown />
    </button>
    {isOpen && (
      <ul>
        <li>Ciaone</li>
        <li>Ciaone</li>
        <li>Ciaone</li>
        <li>Ciaone</li>
        <li>Ciaone</li>
      </ul>
    )}
    </>
  )
}

export default CustomMenu
