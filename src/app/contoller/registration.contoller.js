const url = "http://localhost:3000"

export const newUser = async (data) => {
    const res = await fetch(`${url}/api/registration`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return res;
}

export const findUser = async (email) => {
    try {
      const res = await fetch(`${url}/api/registration/${email}`, {
        method: "GET",
        cache: "no-store"
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
  
      const jsonData = await res.json();
      return jsonData;
  
    } catch (error) {
      console.log("Error while loading data: ", error);
      return [];
    }
  };