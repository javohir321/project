import React from "react";
import { Banner } from "./components/banner/banner";
 import { useGetnewProducts } from "./service/query/useGetnewProducts";
 import { ProductBanner } from "../../components/sliders/produt-banner/product-banner";
 import { ProductCard } from "../../components/card/product-card/product-card";


export const Home = () => {
  const { data, isLoading } = useGetnewProducts("phones");
  const { data: data2, isLoading: isLoading2 } = useGetnewProducts("notebook");
return  <>
  <div>
    <Banner />
  </div>
  <div className="container mt-[100px]">
    <div className="mt-[30px]">
    <h2 className="mb-[15px] font-lg text-4xl">Phones</h2>
       <ProductBanner>

        {data?.map((item) => ( 
          <ProductCard key={item.id} {...item} />
         ))}

       </ProductBanner>
    </div>
     <div className="mt-[50px]">
     <h2 className="mb-[15px] font-lg text-4xl">Notebook</h2>
       <ProductBanner>

        {data2?.map((item) => ( 
          <ProductCard key={item.id} {...item} />
        
         ))}

         
       </ProductBanner>
     </div>
      
     </div>
</>
}