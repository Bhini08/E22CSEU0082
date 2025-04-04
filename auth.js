const axios = require("axios");

const data = {
  name: "bhini sharma",
  email: "e22cseu0082@bennett.edu.in",
  rollNo: "e22cseu0082",
  accessCode: "rtCHZJ",
  clientID: "481df810-23ea-415e-bf44-809b77bba131",
  clientSecret: "ycbmQTpnUSBxKpUF",
  companyName: "Affordmed"
};

axios
  .post("http://20.244.56.144/evaluation-service/auth", data)
  .then((response) => {
    console.log("✅ Access Token:");
    console.log(response.data.access_token);
  })
  .catch((error) => {
    console.error("❌ Error generating token:", error.response?.data || error.message);
  });
