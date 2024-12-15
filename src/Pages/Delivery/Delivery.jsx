import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DeliveryPage from "../components/DeliveryPage";

const Delivery = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  
  const product = useSelector((state) =>
    state.products.find((item) => item.id === parseInt(productId))
  );

  const handleConfirmDelivery = () => {
    alert("Delivery Confirmed!");
    navigate("/products"); 
  };

  return <DeliveryPage product={product} onConfirmDelivery={handleConfirmDelivery} />;
};

export default Delivery;
