import axios from "axios";
import React, { useEffect, useState } from "react";

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const DataFetchAPI: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await axios.get<Data[]>(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(resp.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <h1>Data fetching completed</h1>
      {data.map((item) => (
        <ul>
          <li key={item.id}>{`Id:- ${item.id}`}</li>
          <li>{`UserId:- ${item.userId}`}</li>
          <li>{`Title:- ${item.title}`}</li>
          <li>{`Completed:- ${item.completed}`}</li>
        </ul>
      ))}
    </>
  );
};

export default DataFetchAPI;
