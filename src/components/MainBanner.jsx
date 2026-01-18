import { Link } from "react-router"; // react-router-dom olduğundan emin olun

function MainBanner() {
  const options = [
    { imgSrc: "images/iteration-2-images/icons/1.svg", label: "YENİ! Kore" },
    { imgSrc: "images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { imgSrc: "images/iteration-2-images/icons/3.svg", label: "Burger" },
    { imgSrc: "images/iteration-2-images/icons/4.svg", label: "Kızartmalar" },
    { imgSrc: "images/iteration-2-images/icons/5.svg", label: "Fast food" },
    { imgSrc: "images/iteration-2-images/icons/6.svg", label: "Gazlı İçecek" },
  ];

  const optionItems = options.map((option, index) => (
    <li key={index} className="flex flex-row gap-4 items-center h-[42px] w-[45%] lg:w-auto">
      <img src={option.imgSrc} alt="" className="h-full w-auto" />
      <span className="font-barlow font-medium text-lg leading-[32.4px] text-center">
        {option.label}
      </span>
    </li>
  ));

  return (
    <section className="main-banner max-w-[1440px] w-100">
      {/* Image Area */}
      <div className="relative w-full h-screen lg:h-[1080px] overflow-hidden z-0 bg-red-500 flex flex-column !gap-10">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover -z-10"
          src="images/iteration-1-images/home-banner.png"
          alt="Main Banner"
        />
        
        {/* Banner Header */}
        <h2 className="w-full lg:w-[363px] h-[50px] mx-auto mt-[56px] !mt-[126px] mb-10 lg:!my-[56px] font-londrina font-normal !text-[50px] leading-[50px] text-center tracking-normal text-white">
          Teknolojik Yemekler
        </h2>

        {/* Banner Text Area */}
        <div className="mx-auto flex flex-col items-center w-auto h-auto lg:w-[586px] lg:h-[300px]">
          <div className="text-center w-auto h-auto lg:w-[767px] lg:h-[230px]">
            <span className="hidden lg:block font-satisfy font-normal text-[32px] leading-[44px] text-sari mb-2">
              fırsatı kaçırma
            </span>
            <p className="max-md:w-min font-roboto font-light !text-[86px] leading-[50px] !leading-[92px] tracking-[1.5px] text-white m-0">
              KOD ACIKTIRIR <br />
              PIZZA, DOYURUR
            </p>
          </div>

          <Link
            to="/order"
            className="appearance-none !text-koyu-gri !no-underline w-[193px] h-[56px] rounded-[50px] bg-sari font-barlow font-semibold text-lg leading-[56px] text-center no-underline text-koyu-gri mt-[41px] lg:mt-[13px] block hover:scale-105 transition-transform"
          >
            ACIKTIM
          </Link>
        </div>
      </div>

      {/* Main Banner Options (Bottom Bar) */}
      <div className="bg-white flex items-center max-w-[1920px] mx-auto h-[268px] lg:h-[94px] py-4 lg:py-0">
        <ul className="mx-auto p-0 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between list-none w-full max-w-[412px] lg:max-w-[1068px] gap-y-[29px] gap-x-[41px] lg:gap-0">
          {optionItems}
        </ul>
      </div>
    </section>
  );
}

export default MainBanner;