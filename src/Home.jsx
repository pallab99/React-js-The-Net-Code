import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [ispending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const getData = () => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("Couldn't connect to the server");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         setIsPending(false);
  //         setError(err.message);
  //       });
  //   }, 1000);
  // };

  const getData = () => {
    setTimeout(() => {
      axios({
        url: "http://localhost:8000/blogs",
      })
        .then((response) => {
          setBlogs(response.data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {ispending && <div className="loading">Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
