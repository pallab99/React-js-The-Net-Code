const Home = () => {
  const handleClick = () => {
    console.log("Hello World");
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("Pallab");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
