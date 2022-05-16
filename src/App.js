import { useEffect, useState } from "react";
import navigation from "./navigation/navigation.component";


function App() {

  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) 
  .then(data => setUsers(data));



})
  return (
    <div className="App">
      {
        users.map(user => <div>{user.phone}</div>)
      }
    </div>
  )
}

export default App;

