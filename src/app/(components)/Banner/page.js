import styles from "../../styles/Banner.module.css"

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    Big Summer <span>Sale</span>
                </div>
                <div className={styles.desc}>
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </div>
                {/* <div className={styles.btn}>
                    <span>Shop Now</span>
                </div> */}
            </div>
        </div>
    )
}

export default Banner
