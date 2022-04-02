import React from "react";
import { Link, useParams } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";
import "./product-card.scss";
const ProductCard = (props) => {
  const { id } = useParams();
  return (
    <div className="product-card">
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
          </span>
        </div>
      </Link>
      {/* </Link> */}
      <div className="product-card__btn">
        {/* <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          // onClick={() => dispatch(set(props.slug))}
        >
          chọn mua
        </Button> */}
        <button className="btn">Xem</button>
      </div>
    </div>
  );
};

export default ProductCard;
