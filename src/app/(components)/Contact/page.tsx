import Layout from "../../Layout/page"
import styles from "../../styles/Contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contianer}>
        <div className={styles.content}>
          <div className={styles.heading}>
            Contact Us
          </div>
          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.lbl}>Name:</div>
                <div className={styles.input}>
                  <input type="text" placeholder="Your Name" required/>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.lbl}>Phone:</div>
                <div className={styles.input}>
                  <input type="text" placeholder="Your Phone No." required/>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.lbl}>Email:</div>
                <div className={styles.input}>
                  <input type="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className={styles.btn}>
                <button type="submit"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
