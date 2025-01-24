import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const Users = () => {
  // Set the setdata
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://jsonplaceholder.typicode.com/users";

  const filterData = () => {
    let filteredData = data.filter((item) => item.id > 5);
    setData(filteredData);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <button onClick={filterData}>Filter Data</button>
      <ul>
        {data.map((item) => (
          <User data={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default Users;
