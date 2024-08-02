import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectItem } from "../state/itemSlice";
import { food } from "../pages/product_data";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {
  const [product_data, setProduct_data] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get("/api/food/")
    //   .then((response) => {
    //     setProduct_data(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setProduct_data(food);
  });

  const handleProductPage = (productId) => {
    dispatch(selectItem(productId));
  };

  return (
    <>
      <div className=" ">
        <div id="head" className="h-[18%] w-[100%] fixed">
          <Header />
        </div>
        <div id="product-list" className={`flex flex-wrap justify-center aligne-item word-wrap space-x-[2.5%] pt-[17vh]`}>
          {product_data.map((product) => (
            <Link onClick={() => handleProductPage(product.id)} to={`${product.link}/${product.id}`} id="product_card" className="flex-col h-[60vh] w-[17%] border border-solid border-red-300 rounded-md mb-[2%] bg-white">
              <div id="img_product" className="h-[70%] mb-[13%] w-[100%]">
                <img src={`${product.image}`} className="h-[100%] w-[100%]"></img>
              </div>
              <div className="h-[fit]">
                <div className="flex-col  ml-[14px] items-center justify-center text-[20px]">
                  <h1>{product.name}</h1>
                  <h3 className="text-[18px]">Rs: {product.price}</h3>
                </div>
                
                <div className="mx-3 ">
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
