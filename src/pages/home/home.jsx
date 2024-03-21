import React from "react";
import { Banner } from "./components/banner/banner";
 import { useGetnewProducts } from "./service/query/useGetnewProducts";
 import { ProductBanner } from "../../components/sliders/produt-banner/product-banner.jsx"
import { useGetproducts} from "./service/query/useGetProductBanner.js"
import { CategoryBanner } from "../../components/sliders/category-banner/category-banner.jsx";
 import { ProductCard } from "../../components/card/product-card/product-card";
import { CategoryCard } from "../../components/card/category-card/category-card.jsx";


export const Home = () => {
  const { data, isLoading } = useGetnewProducts("phones");
  const { data: data2, isLoading: isLoading2 } = useGetnewProducts("notebook");
  const {data:data3 } = useGetproducts()
  
return  <>
  <div>
    <Banner />
  </div>
  <div className="mt-[50px]">
    <CategoryBanner >
      {data3?.map((item) => (
        <CategoryCard key={item.id} {...item}/>
      ))}
    </CategoryBanner>
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