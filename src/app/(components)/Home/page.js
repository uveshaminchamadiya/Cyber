import Layout from "../../Layout/page"
import styles from "../../styles/Home.module.css"
import ProductSection from "../ProductSection/page"
import Banner from "../Banner/page"

const Home = () => {
    return (
        <Layout>
            {/* Hero Section  */}
            <section>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            <div className={styles.tag}>
                                Pro.Beyond.
                            </div>
                            <div className={styles.title}>
                                Iphone 14 <span>Pro</span>
                            </div>
                            <div className={styles.desc}>
                                Created to change everything for the better. For everyone
                            </div>
                            {/* <div className={styles.btn}>
                                <span>
                                    Shop Now
                                </span>
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="img/Iphone image.png" alt="phoneImage" />
                    </div>
                </div>
            </section>
            {/* Banner Section  */}
            <section>
                <div className={styles.section2Container}>
                    <div className={styles.left}>
                        <div className={styles.image}>
                            <img className={styles.img} src="img/PlayStation.png" alt="playStation" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                Playstation 5
                            </div>
                            <div className={styles.desc}>
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>
                            Macbook <span>Air</span>
                        </div>
                        <div className={styles.desc}>
                            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                        </div>
                        {/* <div className={styles.btn}>
                            <span>
                                Shop Now
                            </span>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Product Section  */}
            <section>
                <ProductSection />
            </section>
            {/* sale banner  */}
                <Banner />
        </Layout>
    )
}

export default Home