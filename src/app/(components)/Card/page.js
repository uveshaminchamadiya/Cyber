'use client'
import { getData } from "../../contoller/contoller"
import { useState, useEffect } from "react";
import styles from "../../styles/Card.module.css"

const Card = () => {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const jsonData = await getData();
            setData(jsonData);
        } catch (error) {
            console.log("Error while loading data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        // <div className={styles.card}>
        //     <img src="img/Iphone 14 pro 1.png" alt="Phone Image" />
        //     <div className={styles.title}>
        //         Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
        //     </div>
        //     <div className={styles.price}>$900</div>
        //     <div className={styles.btn}>
        //         <span>Buy Now</span>
        //     </div>
        // </div>
        data.map((item, index) => {
            return (
                <div className={styles.card}>
                    <img src="img/Iphone 14 pro 1.png" alt="Phone Image" />
                    <div className={styles.title}>
                        Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                    </div>
                    <div className={styles.price}>$900</div>
                    <div className={styles.btn}>
                        <span>Buy Now</span>
                    </div>
                </div>
            )
        })
    )
}

export default Card
