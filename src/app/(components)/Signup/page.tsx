"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Signup.module.css';
import { useRouter } from 'next/navigation'
import { newUser } from "../../contoller/registration.contoller"

const Signup = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await newUser(formData)
        if (res.ok) {
            router.push("/Login");
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contactForm}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.heading}>Sign Up</div>
                            <div className={styles.inputGroup}>
                                <div className={styles.lbl}>Name:</div>
                                <div className={styles.input}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.lbl}>Email:</div>
                                <div className={styles.input}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.lbl}>Password:</div>
                                <div className={styles.input}>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.lbl}>Address:</div>
                                <div className={styles.input}>
                                    <textarea
                                        name="address"
                                        cols="30"
                                        rows="5"
                                        placeholder="Your Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <small>
                                Already have an Account?{' '}
                                <span>
                                    <Link href="/Login">Login</Link>
                                </span>
                            </small>
                            <div className={styles.btn}>
                                <button type="submit"> Sign Up </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
