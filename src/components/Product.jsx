function Product({ imageSrc, title, price, rating, commentCount }) {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-6 h-[526px] w-full lg:h-[419px] lg:w-[330px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full justify-between gap-6 m-8">
        <img src={imageSrc} alt={title} className="w-full max-w-full lg:max-w-[270px] mx-auto" />
        
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-barlow font-semibold text-[22px] leading-[29px] m-0 text-koyu-gri">
            {title}
          </h3>
          
          <div className="flex flex-row justify-between items-center">
            <span className="font-barlow font-semibold text-base leading-[29px] text-[#1b1b1bb2]">
              {rating}
            </span>
            <div className="flex flex-row justify-between w-[126px] items-center">
              <span className="font-barlow font-semibold text-base leading-[29px] text-[#1b1b1bb2]">
                ({commentCount})
              </span>
              <span className="font-barlow font-bold text-xl leading-[24px] text-right text-koyu-gri">
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;