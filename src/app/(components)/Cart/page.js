'use client'
import Layout from "@/app/Layout/page"
import styles from "../../styles/Cart.module.css"
import { getRecord, deleteProduct } from "../../contoller/cart.contoller"
import { useEffect, useState } from "react"
import Link from "next/link"

const Cart = () => {
    const [data, setData] = useState([]);
    console.log("Data : ", data)
    const [quantities, setQuantities] = useState([]);
    console.log("Qty : ", quantities)
    const [orderDetails, setOrderDetails] = useState({ data: [], quantities: [] });
    console.log("orderDetails : ", orderDetails)

    const UserDetails = localStorage.getItem('UserDetails');
    const parsedUserDetails = JSON.parse(UserDetails);
    const id = parsedUserDetails._id;

    const qty = localStorage.getItem(id);
    const parsedQty = JSON.parse(qty);

    let subTotal = 0;
    let total = 0;
    let productPrice;

    const getData = async () => {
        const res = await getRecord();
        setData(res);

        if (!qty || res.length > parsedQty.length) {
            const defaultQuantities = [...parsedQty];
            for (let i = parsedQty.length; i < res.length; i++) {
                defaultQuantities.push(1);
            }
            setQuantities(defaultQuantities);
        } else {
            setQuantities(parsedQty);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(quantities));
    }, [quantities]);

    const qtyDes = (index) => {
        if (quantities[index] > 1) {
            setQuantities(prevQuantities => {
                const updatedQuantities = [...prevQuantities];
                updatedQuantities[index] -= 1;
                return updatedQuantities;
            });
        }
    }

    const qtyInc = (index) => {
        setQuantities(prevQuantities => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] += 1;
            return updatedQuantities;
        });
    }

    const handleDelete = async (id, index) => {
        try {
            const res = await deleteProduct(id);
            if (res.ok) {
                const updatedData = data.filter((item) => item._id !== id);
                const updatedQuantities = [...quantities];
                updatedQuantities.splice(index, 1);
                setData(updatedData);
                setQuantities(updatedQuantities);
            }
        } catch (error) {
            console.log("Error while deleting data: ", error);
        }
    }

    const handleCheckout = () => {
        setOrderDetails({ data: data, quantities: quantities });
        localStorage.setItem(`OD${id}`, JSON.stringify(orderDetails));
    }

    const records = data.length;

    if (records <= 0) {
        return (
            <Layout>
                <div className={styles.noRecord}>
                    Your cart is empty!
                </div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            Shopping Cart
                        </div>
                        <div className={styles.details}>
                            <div className={styles.productDetails}>
                                <div className={styles.cards}>
                                    {
                                        data.map((item, index) => {
                                            productPrice = parseInt(item.price) * quantities[index];
                                            subTotal = subTotal + productPrice;
                                            total = subTotal;
                                            return (
                                                <div className={styles.card} key={index}>
                                                    <div className={styles.image}>
                                                        <img src={`http://localhost:3000/img/${item.image}`} alt={item.image} />
                                                    </div>
                                                    <div className={styles.desc}>
                                                        {item.desc}
                                                    </div>
                                                    <div className={styles.quantity}>
                                                        <div><button type="button" onClick={() => qtyDes(index)}>-</button></div>
                                                        <div><span>{quantities[index]}</span></div>
                                                        <div><button type="button" onClick={() => qtyInc(index)}>+</button></div>
                                                    </div>
                                                    <div className={styles.price}>
                                                        ${item.price}
                                                    </div>
                                                    <div className={styles.delete}>
                                                        <button type="button" className={styles.button} onClick={() => handleDelete(item._id, index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.orderSummary}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        Order Summary
                                    </div>
                                    <div className={styles.total}>
                                        <div className={styles.title}>
                                            Product
                                        </div>
                                        <div className={styles.title}>
                                            Price
                                        </div>
                                        <div className={styles.title}>
                                            Qty
                                        </div>
                                        <div className={styles.title}>
                                            Subtotal
                                        </div>
                                    </div>
                                    {
                                        data.map((item, index) => {
                                            productPrice = parseInt(item.price) * quantities[index];
                                            return (
                                                <div className={styles.total} key={index}>
                                                    <div className={styles.img}>
                                                        <img src={`http://localhost:3000/img/${item.image}`} alt={item.image} />
                                                    </div>
                                                    <div className={styles.desc}>
                                                        ${item.price}
                                                    </div>
                                                    <div className={styles.desc}>
                                                        {quantities[index]}
                                                    </div>
                                                    <div className={styles.title}>
                                                        ${productPrice}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <hr />
                                    <div className={styles.total}>
                                        <div className={styles.title}>
                                            Total
                                        </div>
                                        <div className={styles.title}>
                                            ${total}
                                        </div>
                                    </div>
                                    <div className={styles.button}>
                                        {/* <Link href="/Checkout"> */}
                                        <button type="button" onClick={handleCheckout}>
                                            Checkout
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Cart;
