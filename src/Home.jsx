import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Pallab");
  const [age,setAge]=useState(20);
  
  const handleClick = () => {
    setName("Pallab Majumdar");
    setAge(23);
  };

  return (
    <div className="Home">
      <h1>Home Page</h1>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
