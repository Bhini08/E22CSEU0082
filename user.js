const axios = require('axios');


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // <-- paste full token here

const getUsers = async () => {
  try {
    const response = await axios.get('http://20.244.56.144/evaluation-service/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("✅ Users Data:", response.data);
  } catch (error) {
    console.error("❌ Error fetching users:", error.response?.data || error.message);
  }
};

getUsers();
