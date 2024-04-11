const url = "http://localhost:3000"

export const getData = async () => {
  try {
    const res = await fetch(`${url}/api`, {
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

export const getDataHome = async () => {
  try {
    const res = await fetch(`${url}/api/Home`, {
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