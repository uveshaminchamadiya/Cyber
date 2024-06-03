"use client"
import Layout from "../../../Layout/page"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"
import styles from "../../../styles/ProductDetails.module.css"
import Link from "next/link"
import { addRecord } from "../../../contoller/cart.contoller"

const ProductDetails = ({ params }) => {

    const router = useRouter();

    const UserDetails = localStorage.getItem('UserDetails');
    const paresedUserDetails = JSON.parse(UserDetails);
    const userName = paresedUserDetails.name;

    if (UserDetails == null) {
        router.push("/Login");
    } else {
        localStorage.removeItem('RedirectUrl');

        const id = params.id;

        const [data, setData] = useState({data : [], username: '' });

        const getDataById = async (id) => {
            try {
                const res = await fetch(`http://localhost:3000/api/${id}`, {
                    method: "GET",
                    cache: "no-store"
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const jsonData = await res.json();
                setData({ data: jsonData, username: userName })

            } catch (error) {
                console.log("Error while loading data: ", error);
                return [];
            }
        };

        useEffect(() => {
            getDataById(id);
        }, []);

        const addToCart = async () => {
            const res = await addRecord(data)
            if (res.ok) {
                router.push("/Cart")
            }
        }


        return (
            <Layout>
                <>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.details}>
                                <div className={styles.left}>
                                    <div className={styles.img}>
                                        <img src={`http://localhost:3000/img/${data.data.image}`} alt={data.data.image} />
                                    </div>
                                    <div className={styles.desc}>
                                        <b>Desc: </b>{data.data.desc}
                                    </div>
                                    <div className={styles.price}>
                                        <b>Price: </b>${data.data.price}
                                    </div>
                                </div>
                                <div className={styles.divider}>
                                    <hr />
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.item}>
                                        <div><b>Warrenty</b></div>
                                        <div>2 Year</div>
                                    </div>
                                    <div className={styles.item}>
                                        <div><b>Delivery Charge</b></div>
                                        <div>Free</div>
                                    </div>
                                    <div className={styles.item}>
                                        <div><b>Delivery Time</b></div>
                                        <div>3-4 working days</div>
                                    </div>
                                </div>
                                <div className={styles.divider}>
                                    <hr />
                                </div>
                                <div className={styles.button}>
                                    <Link href="/Cart">
                                        <span><button type="button" className={styles.btn} onClick={addToCart}>Add To Cart</button></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>

        )
    }

}

export default ProductDetails