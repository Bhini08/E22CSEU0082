const axios = require('axios');

const getToken = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/auth', {
      email: "e22cseu0082@bennett.edu.in",
      name: "bhini sharma",
      rollNo: "e22cseu0082",
      accessCode: "rtCHZJ",
      clientID: "481df810-23ea-415e-bf44-809b77bba131",
      clientSecret: "ycbmQTpnUSbXKpUF"
    });

    return response.data.access_token;
  } catch (error) {
    console.error("❌ Token fetch error:", error.response?.data || error.message);
    return null;
  }
};

const getUsers = async () => {
  const token = await getToken();
  if (!token) return;

  try {
    const response = await axios.get('http://20.244.56.144/evaluation-service/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("✅ Users data fetched:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching users:", error.response?.data || error.message);
  }
};

getUsers();
