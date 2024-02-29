// UserCard - reusable  | Name | Places No.
//Take a json for now.
import React from "react";
import UserCard from "./UserCard";

const data = [
  {
    Name: "John Max",
    places: 3,
    img: "#",
  },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-4 gap-y-4 my-4 mt-8 place-items-center">
        {data.map((userItem) => {
          return <UserCard userItem={userItem} />;
        })}
      </div>
    </>
  );
};

export default Home;
