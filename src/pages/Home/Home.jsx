import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sections } from "../../components/Section/Sections/Sections";
import UploadImages from "../../components/UploadImages/UploadImages";

export const Home = () => {
  return (
    <div>
      <UploadImages />
      <Sections />
    </div>
  );
};
