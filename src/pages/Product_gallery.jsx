import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const Gallery_data = [
  {
    id: 1,
    name: "Motor",
    img_01: "/image/p_gallery/01.jpeg",
    img_02: "/image/p_gallery/01.jpeg",
  },
  {
    id: 2,
    name: "Light",
    img_01: "/image/p_gallery/01.jpeg",
    img_02: "/image/p_gallery/01.jpeg",
  },
  {
    id: 3,
    name: "Connectivity Section",
    img_01: "/image/p_gallery/01.jpeg",
    img_02: "/image/p_gallery/01.jpeg",
  },
];

const Product_gallery = () => {
  return (
    <div className="">
      <div id="head" className="h-[18%] w-[100%] fixed">
        <Header />
      </div>
      <div className="space-y-[2%] pt-[10%]"> 
        {Gallery_data.map((item) => (
          <div className="">
            <div className="h-auto max-w-6xl ml-[8%] border rounded-[5px]">
              <h1 className="text-[30px] ml-[10px]">{item.name}</h1>
              <div className="ml-[10px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum facere suscipit nulla sapiente doloremque delectus, itaque aliquid ullam dolorum magni praesentium rem quia magnam doloribus fugit vel minima tempora.</div>
              <div className="flex space-x-[1.5%] ml-[1%] mb-[1%]">
                <div id="image section ">
                  <img className="h-[30vh] w-[50vh]" src={item.img_01} />
                </div>
                <div id="image section ">
                  <img className="h-[30vh] w-[50vh]" src={item.img_02} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product_gallery;
