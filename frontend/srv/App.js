import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://backend-service:5000")
      .then(res => res.json())
      .then(data => setMsg(data[0].message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DevOps 3-Tier App 🚀</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
