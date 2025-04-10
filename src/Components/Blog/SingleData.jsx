import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleData.css";

const SingleData = () => {
  const blog = useLoaderData();
  const { title, description, imgUrl, category, name } = blog;
  return (
    <div>
      <div className="Banner">
        <h1>Single Blog </h1>
      </div>
      <div className="SingleData">
        <div className="py-2 px-2  text-white bg-dark text-center CardData">
          <img src={imgUrl} alt="" />
          <h3>{name}</h3>
          <h2>{category}</h2>
          <h5>{title}</h5>
          <p className="px-2">{description}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, amet accusamus delectus animi, corrupti in quaerat eos
            odit doloribus eaque obcaecati. Dolores, quo aperiam placeat quaerat
            sed autem mollitia atque nostrum, esse, odio consequuntur vel
            laborum aliquid dolor? Illo tempore iure exercitationem beatae
            delectus voluptatem odit voluptas recusandae accusamus laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
