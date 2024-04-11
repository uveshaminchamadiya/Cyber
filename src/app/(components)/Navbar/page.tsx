"use client"
import styles from "../../styles/Navbar.module.css"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const userDetails = localStorage.getItem('UserDetails');
    if (userDetails) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); 

  const logout = () => {
    localStorage.removeItem('UserDetails');
    setIsLoggedIn(false);
    router.push("/Login");
  }

  const login = () => {
    router.push("/Login");
  }


  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/Home">Cyber</Link>
      </div>
      <div className={styles.navItems}>
        <ul>
          <Link href="/Home"><li>Home</li></Link>
          <Link href="/Product"><li>Products</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Contact"><li>Contact Us</li></Link>
          {isLoggedIn ? (
            <>
              <Link href="/Cart"><li>Cart</li></Link>
              <button type="button" className={styles.logout} onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button type="button" className={styles.login} onClick={login}>Login</button>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
