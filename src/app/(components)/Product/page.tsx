import Layout from "../../Layout/page"
import styles from "../../styles/Product.module.css"
import Cards from "../Cards/page"

const Product = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heading}>Our Products</div>
                    {/* Product Cards  */}
                    <Cards />
                </div>
            </div>
        </Layout>
    )
}

export default Product
