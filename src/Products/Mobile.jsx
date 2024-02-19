// Mobile.jsx

import React, { useContext, useState } from "react";
import { Mycontext } from "../component/context/Context";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
  const { product, cart, setCart } = useContext(Mycontext);
  const smartPhone = product.filter(
    (prod) => prod.category.toLowerCase() === "smartphone"
  );
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showProductDetails = (selectedItem) => {
    setSelectedProduct(selectedItem);
  };

  const addToCart = () => {
    if (cart.some((item) => item.id === selectedProduct.id)) {
      alert("Product already added to the cart");
    } else {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      navigate(`/cart/${selectedProduct.id}`);
      alert("Product added to the cart");
    }
  };

  return (
    <div className="col-12 d-flex m-auto gap-3 p-3">
      <div className=""></div>
      <div className="show_product  border d-flex flex-column align-items-center m-auto  col-3">
        {selectedProduct && (
          <>
            <img src={selectedProduct.src} alt="" className="m-auto" />
            <p className="text primary">{selectedProduct.category}</p>
            <h1>{selectedProduct.name}</h1>
            <p>MRP {selectedProduct.prize}</p>
            <p>Offer Price {selectedProduct.offerPrize}</p>
            <button
              style={{ backgroundColor: "yellow" }}
              className="show_buttoon"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>

      <div className="smartphonecategory d-flex col-7    flex-wrap">
        {smartPhone.map((item) => (
          <div key={item.id} className=" border m-2" style={{ width: "30%" }}>
            <div
              className="HOT rounded text-white w-fit m-3 "
              style={{ backgroundColor: "#44961D" }}
            >
              <h5 className="m-3 ">HOT</h5>
            </div>
            <div className="image align-items-center">
              <img
                className="m-auto mt-2"
                src={item.src}
                alt=""
                style={{ width: "20vh" }}
              />
            </div>
            <button
              className="showProduct"
              onClick={() => showProductDetails(item)}
            >
              +
            </button>
            <p className="text-primary p-1">{item.category}</p>
            <h3>{item.name}</h3>
            <span>
              <p>MRP {item.prize}</p>
              <h2> offerPrize{item.offerPrize}</h2>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
