import React from "react";
import Data from "./datas";
import Card from "./layout";

const Homee = () => {
  return (
    <>
      <section className="header">
        <div className="heading">
          <h2> Pricing and Tags</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      <section className="tags-cards">
        <div className="price-card">
          <div class="contain">
            {Data.map((val, ind) => {
              return (
                <Card
                  title={val.Title}
                  price={val.price}
                  list1={val.list1}
                  list2={val.list2}
                  list3={val.list3}
                  list4={val.list4}
                  list5={val.list5}
                  list6={val.list6}
                  list7={val.list7}
                  list8={val.list8}
                  list9={val.list9}
                  //add your new list here and be sure to call value in layout file
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homee;
