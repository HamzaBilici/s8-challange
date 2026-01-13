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

  const contactListItems = contactInfo.map((info, index) => (
    <li key={index}>
      <img src={info.icon} alt="" />
      <span>
        {info.text1}
        <br />
        {info.text2}
      </span>
    </li>
  ));

  const menuListItems = menus.map((menu, index) => <li key={index}>{menu}</li>);

  const instaListItems = instaImages.map((src, index) => (
    <li key={index}>
      <img src={src} alt="" />
    </li>
  ));

  return (
    <>
      <footer>
        <div class="footer-top">
          <div class="footer-left">
            <div class="footer-contact">
              <h2>
                Teknolojik
                <br />
                Yemekler
              </h2>
              <ul>{contactListItems}</ul>
            </div>
            <div class="footer-menu">
              <h3>Hot Menu</h3>
              <ul>{menuListItems}</ul>
            </div>
          </div>
          <div class="footer-right">
            <h4>Instagram</h4>
            <ul>{instaListItems}</ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-frame">
            <span>© 2023 Teknolojik Yemekler.</span>
            <img
              src="https://www.iconpacks.net/icons/1/free-twitter-icon-117-thumb.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
