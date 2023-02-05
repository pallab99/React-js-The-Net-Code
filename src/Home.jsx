import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // const [name, setName] = useState("mario");
  const [ispending, setIsPending] = useState(true);

  const getData = () => {
    
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })

        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Home">
      {ispending && <div className="loading">Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* <button
        onClick={() => {
          setName("pallab");
        }}
      >
        Change Name
      </button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
