import React, { useState, useEffect } from "react";
import axios from "axios";

//DEMO SHOWS HOW TO FETCH DATA WITH USEEFFECT

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      style={{
        borderStyle: "solid",
        borderRadius: "3px",
        backgroundColor: "#ffacb7",
      }}
    >
      <input
        placeholder="input a number to start fetching some API!"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div>{post.title}</div>
    </div>
  );
};

export default DataFetching;
