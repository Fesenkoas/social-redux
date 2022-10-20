import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count } from "../constant/const";
import {getUsersFetch} from "../future/action/getUsersFetch";
import { User } from "../component/User";

export const ListUsers = () => {
  const [array, setArray] = useState(count);
  const { users, totalCount } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(totalCount / 18);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const changePage = (num) => {
    setPage(num);
    dispatch(getUsersFetch(num));
    if (num - 2 > 0 && num + 2 < pages.length)
      setArray(pages.slice(num - 3, num + 2));
    if (num === pagesCount) setArray(pages.slice(num - 5));
    if (num === 1) setArray(pages.slice(num - 1, num + 4));
  };

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-row justify-center">
        <span
          onClick={(e) => changePage(1)}
          className="flex cursor-pointer items-center bg-white bg-opacity-30  h-1 ml-5 my-5 p-5 rounded-lg"
        >
          1...
        </span>
        {array.map((num, idx) => (
          <span
            key={idx}
            onClick={(e) => changePage(num)}
            className="flex cursor-pointer items-center bg-white bg-opacity-30  h-1 ml-5 my-5 p-5 rounded-lg"
          >
            {num}
          </span>
        ))}
        <span
          onClick={(e) => changePage(pagesCount)}
          className="flex cursor-pointer items-center bg-white bg-opacity-30  h-1 ml-5 my-5 p-5 rounded-lg"
        >
          ...{pagesCount}
        </span>
      </div>
      <div className="flex flex-wrap justify-between bg-white bg-opacity-30 h-auto  p-5 mx-5  rounded-lg">
        {users.map((user, idx) => (<User key={idx} user={user} page={page} changePage={changePage}/>))}
      </div>
    </>
  );
};
