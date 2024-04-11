import Layout from "../../Layout/page"
import styles from "../../styles/About.module.css"
import Image from "next/image"

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.companyDetails}>
            <div className={styles.details}>
              <div className={styles.heading}>
                Our Story
              </div>
              <div className={styles.desc}>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
              </div>
            </div>
            <div className={styles.image}>
              <img className={styles.img} src="img/about.png" alt="about" />
            </div>
          </section>
          <section>
            <div className={styles.teamDetails}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src="img/tom.png" alt="Tom Cruise" />
                </div>
                <div className={styles.name}>
                  Tom Cruise
                </div>
                <div className={styles.designation}>
                  Founder & Chairman
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src="img/Emma.png" alt="Emma Watson" />
                </div>
                <div className={styles.name}>
                  Emma Watson
                </div>
                <div className={styles.designation}>
                  Managing Director
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src="img/Will.png" alt="Will Smith" />
                </div>
                <div className={styles.name}>
                  Will Smith
                </div>
                <div className={styles.designation}>
                  Product Designer
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About
