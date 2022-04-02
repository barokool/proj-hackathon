import React from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import productData from "../../functions/products";
import { ApartmentView } from "./Apartment/ApartmentView";

export const Apartment = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const apartment = productData.getProductBySlug(path);
  console.log(apartment);
  return (
    <>
      <div>Apartment {path}</div>;
      <ApartmentView apartment={apartment} />
    </>
  );
};
