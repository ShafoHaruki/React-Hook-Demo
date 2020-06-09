import React, { useState, useEffect } from "react";
import axios from "axios";

//DEMO SHOWS HOW TO FETCH DATA WITH USEEFFECT

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(URL)
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
