import IMG1 from "../assets/images/phong1.jpg";
import IMG2 from "../assets/images/phong3.jpg";
import IMG3 from "../assets/images/phong2.jpg";

const products = [
  {
    id: 1,
    title: "tro 2",
    price: "189000",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    image01: IMG2,
    image02: IMG1,
    width: "132m",
  },
  {
    id: 2,
    title: "tro 2",
    price: "189000",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    image01: IMG2,
    image02: IMG1,
    width: "132m",
  },
  {
    id: 3,
    title: "tro 3",
    price: "189000",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    image01: IMG2,
    image02: IMG1,
    width: "132m",
  },
  {
    id: 4,
    title: "tro 4",
    price: "189000",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    image01: IMG2,
    image02: IMG1,
    width: "132m",
  },
];
const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getAllProducts = () => products;

const productData = {
  getProducts,
  getAllProducts,
};

export default productData;
