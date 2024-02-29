// UserCard - reusable  | Name | Places No.
//Take a json for now.
import React from "react";
import ViewCard from "./ViewCard";

const data = [
  {
    Name: "John Max",
    Title: "Lorem Ipsum Title here",
    img: "#",
    Description: "ksakdksa khkdjsaidwi jdkjihsiujdkaj djaksd",
  },
];

const ViewPlaces = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-4 gap-y-4 my-4 mt-8 place-items-center">
        {data.map((placeItem) => {
          return <ViewCard placeItem={placeItem} />;
        })}
      </div>
    </>
  );
};

export default ViewPlaces;
