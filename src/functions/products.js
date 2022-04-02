import IMG1 from "../assets/images/phong1.jpg";
import IMG2 from "../assets/images/phong3.jpg";
import IMG3 from "../assets/images/phong2.jpg";

const products = [
  {
    id: 1,
    title: "CHO THUE PHÒNG ĐƯỜNG TRẦN KHẮC CHÂN, P TÂN ĐỊNH. QUẬN 1",
    price: "3500000",
    description:
      "Mình cần cho thuê phòng trong nhà cao tầng. Mỗi lầu 1 phòng, toilet riêng, hành lang, 2 cửa sổ ,máy lạnh, có nước nóng, giup việc dọn vệ sinh hàng tuần , rộng rãi , sạch sẽ, thoang mát, Giá : 3.500.000/thang, nước 150.000, điện 4.400/kw, chỗ để xe, wifi, rác miễn phí, có máy giặc",
    image01: IMG2,
    image02: IMG1,
    width: "132m",
    address: "Đường Trần Khắc Chân, Quận 1, Hồ Chí Minh",
    phone: 928188198,
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
const getProductBySlug = (id) => {
  console.log(products);
  return products.filter((e) => e.id == id)[0];
};
const productData = {
  getProducts,
  getAllProducts,
  getProductBySlug,
};

export default productData;
