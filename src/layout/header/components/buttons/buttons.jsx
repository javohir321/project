import React from "react";
import {ProfileImg} from "../../../../assets/icons/profile"
import { FavorImg } from "../../../../assets/icons/favor";
import {ShopIcon} from "../../../../assets/icons/shop-Icon"


export const Buttons = () => {
  return <ul className="flex w-[300px] gap-[50px]">
    <li >
        <div className="mx-auto w-[30px]">
          <ProfileImg />
        </div>
        <p>Войти</p>
    </li>
    <li>
      <div className="mx-auto w-[30px]"><FavorImg /></div>
      <p>Избранное</p>
    </li>
    <li>
      <div className="mx-auto w-[30px]">
        <ShopIcon />
      </div>
    <p>Корзина</p>
    </li>
  </ul>;
};
