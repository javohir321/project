import React from "react";
import { Search } from "./components/search/search";
import { Buttons } from "./components/buttons/buttons";
import logo from "../../assets/imgs/logo.svg";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import { MenuIcon } from "../../assets/icons/menu-Icon";

export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  
  return (
    <div className="container mb-[20px]">
      <div className="flex gap-[24px] py-2 justify-end">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <p>+998 90 253 77 53</p>
      </div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex gap-5">
          <Modal close={close} isOpen={isOpen}>
            <Link className="text-red-600" to="/category/123">
              Category
            </Link>
            {isLoading ? (
              <Skeleton count={7} height={50} />
            ) : (
              <div className="grid grid-cols-3 gap-[60px] w-[900px] mx-auto text-center">
                {data?.map((item) => (<div  key={item.id} className="] bg-extraGrey flex item-center justify-between ">
                  <Link to={`/category/${item.name}`} key={item.id}>
                    <img  className="h-[100px] w-[100px]" src={item.img} alt="img" />

                    <p className="text-center ">{item.text}</p>
                  </Link>
                </div>
                  
                ))}
              </div>
            )}
          </Modal>
          <Link to="/">
            <img src={logo} alt="img" />
          </Link>
          <button onClick={open} className="bg-lightYellow px-6 items-center rounded-2xl flex justify-between w-[150px]">
            <div>
              <MenuIcon />
            </div>
            <p className="font-md text-lg ">
            Каталог
            </p>
          </button>
        </div>
        <Search />
        <Buttons />
      </div>
    </div>
  );
};
