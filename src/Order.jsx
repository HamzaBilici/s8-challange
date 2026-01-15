import "./Order.css";
import OrderForm from "./components/OrderForm";
import { useState, useEffect } from "react";

function Order() {
  const orderData = {
    title: "Position Absolute Acı Pizza",
    price: 85.5,
    rating: "4.9",
    reviews: "200",
    description:
      "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  };
  const formInputInitialData = {
    doughSize: "",
    doughType: "",
    ingredients: [],
    orderNote: "",
    pieceCount: 1,
  };
  const [totalPrice, setTotalPrice] = useState(orderData.price);
  const [formInputData, setFormInputData] = useState(formInputInitialData);

  useEffect(() => {
    setTotalPrice(
      (orderData.price + formInputData.ingredients.length * 5) *
        formInputData.pieceCount
    );
  }, [formInputData.ingredients]);

  function handlechange(event) {
    //event.preventDefault();
    console.log(event.target.type);
    if (event.target.type === "button") {
      setFormInputData({
        ...formInputData,
        pieceCount: formInputData.pieceCount + Number(event.target.value),
      });
    } else if (event.target.type === "checkbox") {
      console.log(event.target.checked);
      if (event.target.checked) {
        setFormInputData({
          ...formInputData,
          ingredients: [...formInputData.ingredients, event.target.value],
        });
      } else {
        setFormInputData({
          ...formInputData,
          ingredients: formInputData.ingredients.filter(
            (item) => item !== event.target.value
          ),
        });
      }
    } else {
      setFormInputData({
        ...formInputData,
        [event.target.name]: event.target.value,
      });
    }
    /*
    setFormInputData({
      ...formInputData,
      
        event.target.type === "button"
          ? formInputData.pieceCount + Number(event.target.value)
          : 
                event.target.type === "checkbox"
                  ?  event.target.checked
                      ?  event.target.value
                      : formInputData.ingredients.filter(
                          (item) => item !== event.target.value
                        )
                  : event.target.value,
            
    });*/
    console.log(formInputData);
  }

  const ingredientData = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  const doughTypes = ["İnce", "Kalın", "Çıtır"];

  const pizzaSizes = ["S", "M", "L"];

  const formAreaData = {
    doughTypes: doughTypes,
    ingredientData: ingredientData,
    pizzaSizes: pizzaSizes,
  };

  return (
    <>
      <h2 className="order-header">Teknolojik Yemekler</h2>

      <section className="header-section">
        <img
          src="/images/iteration-2-images/pictures/form-banner.png"
          alt="order-img"
        />
        <div className="product-info">
          <div className="breadcrums">
            <span>Anasayfa - </span>
            <span className="active"> Sipariş Oluştur</span>
          </div>
          <div>
            <h2>{orderData.title}</h2>
            <div className="price-rating">
              {" "}
              <span className="price">{orderData.price}₺</span>{" "}
              <span className="rating-area">
                <span> {orderData.rating}</span>
                <span>({orderData.reviews})</span>
              </span>
            </div>
          </div>
          <div className="product-description">
            <p>{orderData.description}</p>
          </div>
        </div>
      </section>
      <section className="order-form-section">
        <OrderForm
          formInputData={formInputData}
          formAreaData={formAreaData}
          handlechange={handlechange}
          totalPrice={totalPrice}
        />
      </section>
    </>
  );
}

export default Order;
