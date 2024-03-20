import React from "react";

const BodyBanner = () => {
  return (
    <>
      <h1
        className="font-bold text-center pt-10 text-4xl"
        style={{ color: "#212529", fontSize: "3rem" }}
      >
        A warm welcome
      </h1>
      <p
        className="text-center py-10 "
        style={{ fontSize: "1.5rem", color: "#212529" }}
      >
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been removed from the framework. Why create custom CSS
        when you can use utilities.
      </p>
      <div className="flex justify-center py-10">
        <button className="rounded bg-blue-700 text-white p-3">
          Call to action
        </button>
      </div>
    </>
  );
};

export default BodyBanner;
