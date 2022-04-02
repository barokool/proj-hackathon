import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./style.scss";
export default function UploadImages() {
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);
  const handleSearch = () => {
    alert("say yes");
  };
  useEffect(() => {
    const newImagesURL = [];
    images.forEach((image) => newImagesURL.push(URL.createObjectURL(image)));
    setImagesURLs(newImagesURL);
  }, [images]);
  return (
    <div className="container-uploaded">
      <h2>Tìm trọ và chọn ảnh trọ để ra kết quả tương quan cho bạn </h2>
      <div className="container-uploaded-input">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" onClick={() => handleSearch()} />
        </div>
        <label>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              setImages([...e.target.files]);
              if (e.target.files.length > 1) {
                alert("Please select <= 3 images");
                setImages([]);
              }
            }}
          />
          <AddAPhotoIcon className="icon" />
        </label>
      </div>

      <div className="container-uploaded-renderImages">
        {imagesURLs.map((imageSrc) => (
          <img src={imageSrc} alt="picutre" />
        ))}
      </div>
    </div>
  );
}
