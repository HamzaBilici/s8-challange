import axios from "axios";
import "./Order.css";
import OrderForm from "./components/OrderForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
function Order() {


  const formInputInitialData = {
    doughSize: "",
    doughType: "",
    ingredients: [],
    orderNote: "",
    pieceCount: 1,
  };
  const [orderData, setOrderData] = useState({});
  const [totalPrice, setTotalPrice] = useState(orderData.price);
  const [formInputData, setFormInputData] = useState(formInputInitialData);
  const [isValid, setIsValid] = useState(false);


  
  useEffect(() => {

      const orderDataInit = {
    title: "Position Absolute Acı Pizza",
    price: 85.5,
    rating: "4.9",
    reviews: "200",
    description:
      "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  };

      axios
      .post(
        "https://reqres.in/api/pizza",
        orderDataInit,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      ).then(function (response) {
        console.log(response.data);
        setOrderData(response.data);
      }).catch(function (error) {
        console.log(error);
      });
  }, []);

  let navigate = useNavigate();
  useEffect(() => {
    setTotalPrice(
      (orderData.price + formInputData.ingredients.length * 5) *
        formInputData.pieceCount
    );
  }, [formInputData.ingredients, formInputData.pieceCount]);

  useEffect(() => {
    const isFormValid =
      formInputData.doughSize !== "" &&
      formInputData.doughType !== "" &&
      formInputData.pieceCount > 0 &&
      formInputData.ingredients.length <= 10;

    setIsValid(isFormValid);
  }, [formInputData]);

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    axios
      .post(
        "https://reqres.in/api/pizza",
        { ...formInputData, totalPrice },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);

        Toastify({
          style: {
            color: "white",
            height: "60px",
            fontSize: "20px",
          },
          duration: 1500,
          text: "Siparişiniz Alındı! Bir Sonraki sayfaya Yönlendiriliyorsunuz...",
          gravity: "bottom",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          callback: function () {
            navigate("/order/success", {
              state: { ...response.data, title: orderData.title },
            });
          },
        }).showToast();
      })
      .catch(function (error) {
        console.log(error);

        Toastify({
          style: {
            color: "white",
            height: "60px",
            fontSize: "20px",
          },
          duration: 1500,
          text: "Hata Oluştu! Lütfen Tekrar Deneyiniz...",
          gravity: "bottom",
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }).showToast();
      })
      .finally(function () {
        // always executed
      });

    //submit işlemleri
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
          isValid={isValid}
          formInputData={formInputData}
          formAreaData={formAreaData}
          handlechange={handlechange}
          handleSubmit={handleSubmit}
          totalPrice={totalPrice}
        />
      </section>
    </>
  );
}

export default Order;
