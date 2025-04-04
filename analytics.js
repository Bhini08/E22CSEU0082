const axios = require('axios');

// Yeh tumhara valid token hai — isko update mat karna jab tak expire na ho
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ2ODIwLCJpYXQiOjE3NDM3NDY1MjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ4MWRmODEwLTIzZWEtNDE1ZS1iZjQ0LTgwOWI3N2JiYTEzMSIsInN1YiI6ImUyMmNzZXUwMDgyQGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTAwODJAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoiYmhpbmkgc2hhcm1hIiwicm9sbE5vIjoiZTIyY3NldTAwODIiLCJhY2Nlc3NDb2RlIjoicnRDSFpKIiwiY2xpZW50SUQiOiI0ODFkZjgxMC0yM2VhLTQxNWUtYmY0NC04MDliNzdiYmExMzEiLCJjbGllbnRTZWNyZXQiOiJ5Y2JtUVRwblVTYlhLcFVGIn0.any_x_qGqk3KGzjLO1i7fCs5hZkNPuv7-ZtOXAjofWo";

// Token ko header mein pass karne ke liye yeh object bana liya
const headers = {
  Authorization: `Bearer ${token}`
};

// Sab users ki list yeh hai
const users = {
  '1': 'John Doe',
  '2': 'Jane Doe',
  '3': 'Alice Smith',
  '4': 'Bob Johnson',
  '5': 'Charlie Brown',
  '6': 'Diana White',
  '7': 'Edward Davis',
  '8': 'Fiona Miller',
  '9': 'George Wilson',
  '10': 'Helen Moore',
  '11': 'Ivy Taylor',
  '12': 'Jack Anderson',
  '13': 'Kathy Thomas',
  '14': 'Liam Jackson',
  '15': 'Mona Harris',
  '16': 'Nathan Clark',
  '17': 'Olivia Lewis',
  '18': 'Paul Walker',
  '19': 'Quinn Scott',
  '20': 'Rachel Young'
};

// Yeh async function sab users ke liye post aur comments fetch karega
async function fetchAnalytics() {
  for (const userId in users) {
    const userName = users[userId];

    try {
      // Pehle user ke posts nikaalo
      const postRes = await axios.get(`http://20.244.56.144/evaluation-service/users/${userId}/posts`, { headers });
      const posts = postRes.data.posts;

      console.log(`\n📌 User: ${userName} (${userId})`);

      for (const post of posts) {
        console.log(`📝 Post: ${post.content}`);

        // Ab har post ke comments fetch karo
        const commentRes = await axios.get(`http://20.244.56.144/evaluation-service/posts/${post.id}/comments`, { headers });
        const comments = commentRes.data.comments;

        console.log(`💬 Comments: ${comments.length}`);
      }

    } catch (err) {
      console.error(`❌ Error for user ${userName} (${userId}):`, err.response ? err.response.data : err.message);
    }
  }
}

fetchAnalytics();
