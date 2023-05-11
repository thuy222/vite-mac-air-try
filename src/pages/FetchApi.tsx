import React, { useEffect, useState } from "react";
import { DebounceTextSearch } from "../utils/debounce";

interface IPosts {
  body: string;
  id: number;
  title: string;
  userId: number;
}
[];

const FetchApi = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [error, setError] = useState(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [textSearch, setTextSearch] = useState<string>("");
  console.log(
    "🚀 ~ file: FetchApi.tsx:18 ~ FetchApi ~ textSearch:",
    textSearch
  );
  const maxPage = Math.floor(posts.length / pageSize);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (error) {
      setError(true);
    }
  }, []);

  const handlePrevious = () => {
    pageNum > 0 && setPageNum((pre) => pre - 1);
  };
  const handleNext = () => {
    pageNum < maxPage - 1 && setPageNum((prev) => prev + 1);
  };
  const handleTextSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTextSearch(e.target.value);
    DebounceTextSearch(setTextSearch(e.target.value), 3000);
  };

  return (
    <div>
      <h1>Fetch Api</h1>
      <input type="text" value={textSearch} onChange={handleTextSearch} />
      {/* {posts.length > 0 &&
        !error &&
        posts
          .slice(pageNum * pageSize, pageNum * pageSize + pageSize)
          .map((post, index) => {
            return <div key={index}>{post.title as any}</div>;
          })} */}
      {posts.length > 0 &&
        !error &&
        posts.map((post, index) => {
          return <div key={index}>{post.title as any}</div>;
        })}
      ------------------------------------------
      <div>
        <button onClick={handlePrevious}>previous</button>
        <div>{pageNum}</div>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};

export default FetchApi;
