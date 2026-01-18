function PromotionRight() {
  return (
    <div className="flex flex-col gap-[9px] w-full lg:w-1/2">
      <div className="z-0 relative rounded-xl overflow-hidden h-[270px] lg:h-[220px] max-lg:w-[422px] flex-grow group">
        <img 
          src="/images/iteration-2-images/cta/kart-2.png" 
          alt="" 
          className="absolute left-0 top-0 w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="mt-[28px] ml-8 flex flex-col">
          <h3 className="font-barlow font-semibold text-[32px] leading-[44px] text-white m-0">
            Hackathlon
            <br />
            Burger Menü
          </h3>
          <a className="font-barlow font-semibold text-sm leading-[48px] text-center !text-kirmizi bg-white !no-underline  mt-5 w-[138px] h-[48px] rounded-[50px] hover:bg-gray-100" href="">
            SİPARİŞ VER
          </a>
        </div>
      </div>

      <div className="z-0 relative rounded-xl overflow-hidden h-[270px] lg:h-[220px] max-lg:w-[422px] flex-grow group">
        <img 
          src="/images/iteration-2-images/cta/kart-3.png" 
          alt="" 
          className="absolute left-0 top-0 w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="mt-[28px] ml-8 flex flex-col">
          <h3 className="font-barlow font-semibold text-[32px] leading-[44px] text-koyu-gri m-0">
            <span className="!text-kirmizi">Çoooook</span> hızlı
            <br />
            npm gibi kurye
          </h3>
          <a className="!no-underline font-barlow font-semibold text-sm leading-[48px] text-center !text-kirmizi bg-white no-underline mt-5 w-[138px] h-[48px] rounded-[50px] hover:bg-gray-100" href="">
            SİPARİŞ VER
          </a>
        </div>
      </div>
    </div>
  );
}

export default PromotionRight;