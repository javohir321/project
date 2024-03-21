import React from "react";
import {FavorImg} from "../../../assets/icons/favor"
import { add } from "../../../redux/reducers/cart";
import { useDispatch } from "react-redux";
import {ShopIcon} from "../../../assets/icons/shop-Icon.jsx"




export const ProductCard = ({ img, title, price, id, sum = "Сум"  }) => {
  const dispatch = useDispatch()
  const addStore = () => {
    dispatch(add({ img, id, title, price }));
  };
  return (
    <div className="h-[350px]">
      <div className="flex justify-between  mx-auto  " >
        <img className="h-[250px] w-[250px] " src={img} alt="img" />
    <div className="mt-[15px] h-[250px]">
        <FavorImg />
    </div>
      </div>
      <div className="w-[250px]  mx-auto">
        <h2 className="text-lg font-sm text-[#333333] ">{title.length > 30  ? title.slice(0,30) + "..." : title  }</h2>
        <div className="flex ml-auto w-[250px] h-[60px] ">
          <div className="mt-[30px] flex text-[18px] font-lg">
        <p>{price}</p>
        <p>{sum}</p>
          </div>
       
          <button className="px-[10px] py-[2px] ml-[30px] mt-[8px] bg-lightYellow h-[50px] text-[#333333]" onClick={addStore}><ShopIcon /></button>
        
        </div>
        
      </div>
    </div>
  );
};
