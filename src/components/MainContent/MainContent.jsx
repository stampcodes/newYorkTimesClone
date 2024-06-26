import SectionLeft from "./SectionLeft/SectionLeft"
import SectionRight from "./SectionRight/SectionRight"
import styles from "../../components/MainContent/MainContent.module.css"

const MainContent = ({ articles }) => {
  return (
    <>
    <main className={styles.sections}>
    <SectionLeft articles={articles.slice(0, 4)} /> 
    <SectionRight articles={articles.slice(4, 8)} /> 
    </main>
    </>
  )
}

export default MainContent