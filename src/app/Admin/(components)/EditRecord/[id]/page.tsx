"use client"
import styles from "../../../styles/EditRecord.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditRecord = ({ params }) => {

  const id = params.id;

  const [data, setData] = useState([]);

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
      setData(jsonData)

    } catch (error) {
      console.log("Error while loading data: ", error);
      return [];
    }
  };

  useEffect(() => {
    getDataById(id);
  }, []);


  const router = useRouter();

  const [file, setFile] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')

  let imageUpdate = false;
  let d = data.desc;
  let p = data.desc;

  const formData = new FormData();
  if (file !== '') {
    formData.set('file', file)
    imageUpdate = true
  }

  if (desc !== '') {
    formData.set('desc', desc)
    d = desc
  } else {
    formData.set('desc', data.desc)
  }

  if (price !== '') {
    formData.set('price', price)
    p = price
  } else {
    formData.set('price', data.price)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/${id}?imageUpdate=${imageUpdate}&image=${data.image}&desc=${d}&price=${p}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to update data");
      }

      if (res.ok) {
        router.push("/Admin");
      }

    } catch (error) {
      console.log("Error while updating data: ", error);
      return [];
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          Edit Product
        </div>
        <div className={styles.contactForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Current Image:</div>
              <div className={styles.input}>
                <img src={`http://localhost:3000/img/${data.image}`} alt={`${data.image}`} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Change Image:</div>
              <div className={styles.input}>
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Product Desc:</div>
              <div className={styles.input}>
                <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)} placeholder="Product Desc" defaultValue={data.desc} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.lbl}>Product Price:</div>
              <div className={styles.input}>
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Product Price ($)" defaultValue={data.price} />
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

export default EditRecord
