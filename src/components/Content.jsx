import PromotionLeft from "./PromotionLeft";
import PromotionRight from "./PromotionRight";
import Product from "./Product";

function Content() {
  const options = [
    { imgSrc: "images/iteration-2-images/icons/1.svg", label: "Ramen" },
    { imgSrc: "images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { imgSrc: "images/iteration-2-images/icons/3.svg", label: "Burger" },
    { imgSrc: "images/iteration-2-images/icons/4.svg", label: "French fries" },
    { imgSrc: "images/iteration-2-images/icons/5.svg", label: "Fast food" },
    { imgSrc: "images/iteration-2-images/icons/6.svg", label: "Soft drinks" },
  ];

  const optionItems = options.map((option, index) => (
    <li
      key={index}
      className={`flex flex-row gap-[10px] items-center rounded-[50px] py-[12px] px-[20px] cursor-pointer transition-colors duration-200 max-lg:!w-fit ${
        index === 1 ? "bg-koyu-gri text-white" : "bg-white text-koyu-gri hover:bg-koyu-gri hover:text-white"
      }`}
    >
      <img src={option.imgSrc} alt="" className="w-[42px] h-[42px]" />
      <span className="font-barlow font-medium text-lg leading-[32px] text-center">
        {option.label}
      </span>
    </li>
  ));

  const products = [
    {
      imageSrc: "images/iteration-2-images/pictures/food-1.png",
      title: "Terminal Pizza",
      price: "60₺",
      rating: "4.9",
      commentCount: "200",
    },
    {
      imageSrc: "images/iteration-2-images/pictures/food-2.png",
      title: "Position Absolute Pizza",
      price: "60₺",
      rating: "4.9",
      commentCount: "200",
    },
    {
      imageSrc: "images/iteration-2-images/pictures/food-3.png",
      title: "useEffect Tavuklu Burger",
      price: "60₺",
      rating: "4.9",
      commentCount: "200",
    },
  ];

  return (
    <section className="flex flex-col pb-16 max-lg:w-[422px]">
      <div className="flex flex-col lg:flex-row mx-auto my-[68px] w-full max-w-[422px] lg:max-w-[1072px] h-auto lg:h-[449px] gap-[16px] lg:gap-[11px]">
        <div className="w-full lg:w-1/2">
          <PromotionLeft />
        </div>
        <PromotionRight />
      </div>

      <div className="flex flex-col items-center mx-auto mt-0 lg:mt-[55px] gap-[15px] lg:gap-2 w-[395px] lg:w-auto h-[229px] lg:h-auto text-center">
        <span className="font-satisfy font-normal text-[32px] leading-[44px] text-kirmizi">
          en çok paketlenen menüler
        </span>
        <h2 className="font-barlow font-semibold text-[42px] leading-[56px] text-koyu-gri m-0">
          Acıktıran Kodlara <br className="lg:hidden" />
          Doyuran Lezzetler
        </h2>
      </div>

      <div className="flex justify-center w-full lg:max-w-[1068px] mx-auto mt-[53px] lg:mt-0">
        <ul className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-start gap-[15px] lg:gap-[22px] p-0 list-none w-[378px] lg:w-full">
          {optionItems}
        </ul>
      </div>

      <div className="mx-auto max-w-[420px] lg:max-w-[1068px] mt-[25px] flex flex-wrap lg:flex-nowrap flex-row justify-center gap-6 lg:gap-8">
        {products.map((product, index) => (
          <Product
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            rating={product.rating}
            commentCount={product.commentCount}
          />
        ))}
      </div>
    </section>
  );
}

export default Content;