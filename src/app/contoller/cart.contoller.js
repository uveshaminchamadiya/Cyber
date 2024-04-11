const url = "http://localhost:3000"

export const addRecord = async (data) => {
  const res = await fetch(`${url}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
}

export const getRecord = async () => {
  try {
    const res = await fetch(`${url}/api/cart`, {
      method: "GET",
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.log("Error while loading data: ", error);
    return [];
  }
};


export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${url}/api/cart?id=${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete data");
    }

    return res
  } catch (error) {
    console.log("Error while deleting data: ", error);
    return [];
  }
};