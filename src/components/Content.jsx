import PromotionLeft from "./PromotionLeft";
import PromotionRight from "./PromotionRight";
import Product from "./Product";
function Content() {
  const options = [
    { imgSrc: "images\\iteration-2-images\\icons\\1.svg", label: "Ramen" },
    { imgSrc: "images\\iteration-2-images\\icons\\2.svg", label: "Pizza" },
    { imgSrc: "images\\iteration-2-images\\icons\\3.svg", label: "Burger" },
    {
      imgSrc: "images\\iteration-2-images\\icons\\4.svg",
      label: "French fries",
    },
    { imgSrc: "images\\iteration-2-images\\icons\\5.svg", label: "Fast food" },
    {
      imgSrc: "images\\iteration-2-images\\icons\\6.svg",
      label: "Soft drinks",
    },
  ];

  const optionItems = options.map((option, index) => (
    <li key={index}>
      <img src={option.imgSrc} alt="" />
      <span>{option.label}</span>
    </li>
  ));

  const products = [
    {
      imageSrc: "images\\iteration-2-images\\pictures\\food-1.png",
      title: "Terminal Pizza",
      price: "60₺",
      rating: "4.9",
      commentCount: "(200)",
    },
    {
      imageSrc: "images\\iteration-2-images\\pictures\\food-2.png",
      title: "Terminal Pizza",
      price: "60₺",
      rating: "4.9",
      commentCount: "(200)",
    },
    {
      imageSrc: "images\\iteration-2-images\\pictures\\food-3.png",
      title: "Terminal Pizza",
      price: "60₺",
      rating: "4.9",
      commentCount: "(200)",
    },
  ];

  const productItems = products.map((product, index) => (
    <Product
      key={index}
      imageSrc={product.imageSrc}
      title={product.title}
      price={product.price}
      rating={product.rating}
      commentCount={product.commentCount}
    />
  ));

  return (
    <>
      <section class="content-section">
        <div class="promotion-area">
          <PromotionLeft />
          <PromotionRight />
        </div>
        <div class="content-text-area">
          <span>en çopk paketlenen menüler</span>
          <h2>
            Acıktıran
            <br />
            Kodlara Doyuran <br />
            Lezzetler
          </h2>
        </div>
        <div class="content-options-area">
          <ul>{optionItems}</ul>
        </div>
        <div class="product-area">{productItems}</div>
      </section>
    </>
  );
}

export default Content;
