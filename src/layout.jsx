import React from "react";

const Card = (props) => {
  return (
    <div class="box">
      <div class="content">
        <div className="mprice">
          <h2>${props.price}</h2>
        </div>
        <h3>{props.title}</h3>

        <p>{props.list1}</p>
        <p>{props.list2}</p>
        <p>{props.list3}</p>
        <p>{props.list4}</p>
        <p>{props.list5}</p>
        <p>{props.list6}</p>
        <p>{props.list7}</p>
        <p>{props.list8}</p>
        <p>{props.list9}</p>
        <div className="btn">
          <button>
            <p>Get</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
