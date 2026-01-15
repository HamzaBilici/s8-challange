import { Link } from "react-router";

function MainBanner() {
  const options = [
    { imgSrc: "images\\iteration-2-images\\icons\\1.svg", label: "YENİ! Kore" },
    { imgSrc: "images\\iteration-2-images\\icons\\2.svg", label: "Pizza" },
    { imgSrc: "images\\iteration-2-images\\icons\\3.svg", label: "Burger" },
    {
      imgSrc: "images\\iteration-2-images\\icons\\4.svg",
      label: "Kızartmalar",
    },
    { imgSrc: "images\\iteration-2-images\\icons\\5.svg", label: "Fast food" },
    {
      imgSrc: "images\\iteration-2-images\\icons\\6.svg",
      label: "Gazlı İçecek",
    },
  ];

  const optionItems = options.map((option, index) => (
    <li key={index}>
      <img src={option.imgSrc} alt="" />
      <span>{option.label}</span>
    </li>
  ));

  return (
    <>
      <section className="main-banner">
        <div className="image-area">
          <img
            className="main-banner-image"
            src="images\iteration-1-images\home-banner.png"
            alt=""
          />
          <h2 className="banner-header">Teknolojik Yemekler</h2>
          <div className="banner-text-area">
            <div className="banner-text">
              <span>fırsatı kaçırma</span>
              <p>
                KOD ACIKTIRIR <br />
                Pizza, DOYURUR
              </p>
            </div>

            <Link to="/order">ACIKTIM</Link>
          </div>
        </div>
        <div className="main-banner-options">
          <ul>{optionItems}</ul>
        </div>
      </section>
    </>
  );
}
export default MainBanner;
