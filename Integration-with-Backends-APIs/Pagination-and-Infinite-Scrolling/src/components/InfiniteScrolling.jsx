import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function InfiniteScrolling() {
  const [data, setData] = useState([]);
  const counts = 100;
  const scroll = () => {
    const page_limit = 10;
    var page = Math.ceil(data.length / page_limit) + 1;
    var apiPath = "https://62934f6e089f87a57abdea28.mockapi.io/products";
    let quary = "?page=" + page + "&limit=" + page_limit;
    axios.get(apiPath + quary).then((res) => {
      const apiResponse = res.data;
      const mearge = [...data, ...apiResponse];
      setData(mearge);
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  const fetchMoreData = () => {
    if (data.length < counts) {
      scroll();
    }
  };

  return (
    <div className="container">
      <h1>InfiniteScrolling</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length < counts}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>The End</h4>}
      >
        <div
          className="row gx-2 gy-2"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <div
                  className="card"
                  style={{
                    width: "14rem",
                    height: "13rem",
                    border: "1px solid black",
                    background: "black",
                    color: "white",
                  }}
                  key={item.id}
                >
                  <div className="image-block">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      style={{ marginTop: "4px" }}
                    />
                  </div>
                  <div className="content-block">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrolling;
