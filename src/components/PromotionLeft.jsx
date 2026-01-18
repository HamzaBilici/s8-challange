function PromotionLeft() {
  return (
    <div className="z-0 relative flex-grow rounded-xl overflow-hidden h-[336px] lg:!h-[449px] max-lg:w-[422px] group">
      <img 
        src="/images/iteration-2-images/cta/kart-1.png" 
        alt="" 
        className="absolute left-0 top-0 w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="mt-11 ml-12 flex flex-col w-[158px] h-[252px]">
        <h3 className="font-quattrocento font-bold text-[68px] leading-[72px] text-white m-0">
          Özel Lezzetus
        </h3>
        <p className="font-barlow font-normal text-xl leading-[26px] text-white my-[5px] w-[275px]">
          Position:Absolute Acı Burger
        </p>
        <a 
          className="!no-underline font-barlow font-semibold text-sm leading-[48px] text-center !text-kirmizi bg-white no-underline mt-5 w-[138px] h-[48px] rounded-[50px] hover:bg-gray-100 transition-colors" 
          href="#"
        >
          SİPARİŞ VER
        </a>
      </div>
    </div>
  );
}

export default PromotionLeft;