'use client'
import { getData } from "../../contoller/contoller"
import { useState, useEffect } from "react";
import styles from "../../styles/Cards.module.css"
import Link from "next/link";

const Cards = () => {

  // Define the state without TypeScript types
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

  const userDetails = localStorage.getItem('UserDetails');

  const redirectUrl = (myUrl) => {
    if (!userDetails) {
        localStorage.setItem('RedirectUrl', JSON.stringify(myUrl));
    }
  }

  return (
    <div className={styles.cards}>
      {data.map((item, index) => {
        return (
          <div className={styles.card} key={index}>
            <img src={`img/${item.image}`} alt={`${item.image}`} />
            <div className={styles.title}>
              {item.desc}
            </div>
            <div className={styles.price}>${item.price}</div>       
            <div className={styles.btn}>
              {/* <span onClick={() => redirectUrl(`${item._id}`)}><Link href={`/ProductDetails/${item._id}`}>Buy Now</Link></span> */}
              <Link href={`/ProductDetails/${item._id}`}><span onClick={() => redirectUrl(`${item._id}`)}>Buy Now</span></Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
