import { Link } from "react-router-dom"


export const CategoryCard = ({img , text , name }) => {
    
    return ( <Link to={`/category/${name}`}>
    <div className="bg-extraGrey mr-[20px] flex rounded-2xl items-center h-[200px]">
            <div className="w-[50%]">
                <img src={img} alt="" />
            </div>
            <p>{text}</p>
        </div>
    </Link>
        
    )
} 