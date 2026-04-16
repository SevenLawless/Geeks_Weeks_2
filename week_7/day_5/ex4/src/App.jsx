function App() {
    const postData = async () => {
      const response = await fetch("PASTE_YOUR_WEBHOOK_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27
        })
      });
  
      const data = await response.json();
      console.log(data);
    };
  
    return (
      <div>
        <button onClick={postData}>Press me to post some data</button>
      </div>
    );
  }
  
  export default App;