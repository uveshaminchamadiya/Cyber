"use client"
import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';
import Link from 'next/link';
import { findUser } from '../../contoller/registration.contoller';
import { useRouter } from 'next/navigation'

const Login = () => {

    const router = useRouter();

    const RedirectUrl = localStorage.getItem('RedirectUrl');
    let id = ""; 
    if(RedirectUrl){
         id = RedirectUrl.replace(/"/g, '');
    }

    const [userNotFound, setUserNotFound] = useState(false);
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await findUser(formData.email)
        if(user !== null){
            validateUser(user)
            setUserNotFound(false);
        }else {
            setUserNotFound(true);
        }
    };

    const validateUser = (user) => {
        if (user.email == formData.email && user.password == formData.password) {
            setInvalidCredentials(false)
            localStorage.setItem('UserDetails', JSON.stringify(user));
            if(!RedirectUrl){
                router.push('/')
            }else{
                router.push(`/ProductDetails/${id}`)
            }
        }else{
            setInvalidCredentials(true)
        }
    }

    return (
        <>
            {userNotFound && (
                <div className={styles.alert}>
                    User not found!
                </div>
            )}
            {invalidCredentials && (
                <div className={styles.alert}>
                    Invalid credentials!
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contactForm}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.heading}>Login</div>
                            <div className={styles.inputGroup}>
                                <div className={styles.lbl}>Email:</div>
                                <div className={styles.input}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <small>
                                Don't have an Account?{' '}
                                <span>
                                    <Link href="/Signup">SignUp</Link>
                                </span>
                            </small>
                            <div className={styles.btn}>
                                <button type="submit"> Login </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
