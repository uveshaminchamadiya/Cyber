"use client"
import styles from "../../styles/AddRecord.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddRecord = () => {

  const router = useRouter();

  const [file, setFile] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.set('file', file);
    data.set('desc', desc);
    data.set('price', price);
    const result = await fetch('http://localhost:3000/api', {
        method: "POST",
        body: data
    });
    if (result.ok) {
        console.log("done")
        router.push("/Admin");
    }
    console.log("result : ", result)
}
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          Add New Product
        </div>
        <div className={styles.contactForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Product Image:</div>
              <div className={styles.input}>
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} required/>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Product Desc:</div>
              <div className={styles.input}>
                <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)} placeholder="Product Desc" required/>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Product Price:</div>
              <div className={styles.input}>
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Product Price ($)" required/>
              </div>
            </div>
            <div className={styles.btn}>
              <button type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRecord
