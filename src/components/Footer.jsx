function Footer() {
  const menus = [
    "Terminal Pizza",
    "5 Kişilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz Console Frosty",
    "Testler Geçti Mutlu Burger",
    "Position Absolute Acı Burger",
  ];

  const instaImages = [
    "/images/iteration-2-images/footer/insta/li-0.png",
    "/images/iteration-2-images/footer/insta/li-1.png",
    "/images/iteration-2-images/footer/insta/li-2.png",
    "/images/iteration-2-images/footer/insta/li-3.png",
    "/images/iteration-2-images/footer/insta/li-4.png",
    "/images/iteration-2-images/footer/insta/li-5.png",
  ];

  const contactInfo = [
    {
      icon: "/images/iteration-2-images/footer/icons/icon-1.png",
      text1: "341 Londonderry Road,",
      text2: "Istanbul Türkiye",
    },
    {
      icon: "/images/iteration-2-images/footer/icons/icon-2.png",
      text1: "aciktim@teknolojikyemekler.com",
      text2: "",
    },
    {
      icon: "/images/iteration-2-images/footer/icons/icon-3.png",
      text1: "+90 216 123 45 67",
      text2: "",
    },
  ];

  return (
    <footer className="bg-footer-bg text-white w-full mt-16 pb-8 lg:pb-0 pt-[50px]">
      <div className="max-w-[412px] lg:max-w-[1066px] mx-auto mt-[81px] lg:mt-[58px] mb-[23px] flex flex-col lg:flex-row justify-between">
        {/* Left Side (Contact + Menu) */}
        <div className="flex flex-col lg:flex-row gap-[51px]">
          {/* Contact Section */}
          <div className="flex flex-col">
            <h2 className="font-londrina font-normal text-[50px] leading-[50px] capitalize m-0 mb-[40px]">
              Teknolojik<br />Yemekler
            </h2>
            <ul className="flex flex-col gap-[22px] m-0 max-w-[306px] list-none p-0">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex font-barlow font-normal text-lg leading-[32px]">
                  <img src={info.icon} alt="" className="w-7 h-7 mr-[13px]" />
                  <span>
                    {info.text1}<br />{info.text2}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hot Menu Section */}
          <div className="flex flex-col gap-[28px] lg:justify-end mb-[22px]">
            <h3 className="font-barlow font-medium text-2xl leading-[32px] m-0">Hot Menu</h3>
            <ul className="flex flex-col gap-[7px] p-0 m-0 list-none">
              {menus.map((menu, index) => (
                <li key={index} className="font-barlow font-normal text-lg leading-[32px]">
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side (Instagram) */}
        <div className="flex flex-col gap-10 mt-[29px] lg:mt-0 lg:h-[332px] lg:justify-end">
          <h4 className="font-barlow font-medium text-2xl leading-[32px] m-0">Instagram</h4>
          <ul className="flex flex-wrap w-[347px] justify-between gap-y-[10px] gap-x-[15px] p-0 m-0 list-none">
            {instaImages.map((src, index) => (
              <li key={index} className="w-[105px] h-[105px]">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-[412px] lg:max-w-[1068px] mx-auto flex justify-between items-center min-h-[90px]">
          <span className="font-barlow font-normal text-base leading-[29px]">
            © 2023 Teknolojik Yemekler.
          </span>
          <img
            src="https://www.iconpacks.net/icons/1/free-twitter-icon-117-thumb.png"
            alt="Twitter"
            className="w-[18px] h-[18px] invert"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;