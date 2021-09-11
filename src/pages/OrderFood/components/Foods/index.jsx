// libs
import React from "react";
import { dataFood } from "@/dataMocks";
// hooks
import { useRouter } from "@/hooks";
// components
import ButtonCard from "../../../Home/components/ButtonCard";
// others
import "./style.scss";

/**
 * Foods
 */
const Foods = () => {
  const router = useRouter();
  const foods = dataFood.filter(food => food.idFood === router.location.state.id);
  return foods
    ? foods?.map(data => (
        <div className="foods-wrapper">
          <div className="image-food">
            <img src={data.image} alt="" />
          </div>
          <div className="title-food">{data.name}</div>
          <div className="price-food">
            <p>{`$${data.price}`}</p>
            <ButtonCard food={data} />
          </div>
        </div>
      ))
    : null;
};

export default Foods;
