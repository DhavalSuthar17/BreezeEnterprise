import React from "react";
import productData from "../asset/data";

const Products = () => {
  //   console.log(productData[0].image1);

  return (
    <div id="products" className=" grid-cols-3  font-josefin justify-center items-center">
      <div className=" text-center text-3xl lg:text-5xl mt-6  md:mt-4 mb-12 capitalize text-[#46BBCD] font-semibold">
        <h1>our range of Products</h1>
      </div>

      {productData.length === 0 ? (
        <div> No data found </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-16">
          {productData.map((product) => (
            <div
              className="border rounded-lg p-4 shadow-lg flex flex-col justify-between"
              key={product.id}
            >
              <img
                className="w-full  h-max object-fill mb-4 rounded-md"
                src={product.image}
                alt="productImages"
              />
              <div>
                <h2 className="text-xl font-semibold  capitalize">
                  {product.productName}
                </h2>
                <p className="text-gray-600 capitalize text-lg">
                  {product.productBrand}
                </p>
              </div>
              {/* 
                                           <div className="flex-col items-center justify-center border p-6">
                                           <img height={100} width={100} src={product.image}/>
                                           
                                           <p>{product.productName}</p>
                                           <p>{product.productBrand}</p>
                   
                                           </div>
                                           <div className="flex-col items-center justify-center border p-6">
                                           <img height={100} width={100} src={product.image}/>
                                           
                                           <p>{product.productName}</p>
                                           <p>{product.productBrand}</p>
                   
                                           </div> 
                                      */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
