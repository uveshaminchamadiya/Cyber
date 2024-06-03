import styles from "../../styles/ProductSection.module.css"
import HomeCard from "../HomeCard/page"

const ProductSection = () => {
  return (
    <div className={styles.container}>
       <div className={styles.content}>
            <div className={styles.heading}>Our Products</div>
            {/* Product Cards  */}
            <HomeCard />
       </div>
    </div>
  )
}

export default ProductSection
