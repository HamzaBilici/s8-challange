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
  const orderDataInit = {
    title: "Position Absolute Acı Pizza",
    price: 85.5,
    rating: "4.9",
    reviews: "200",
    description:
      "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  };
  const [orderData, setOrderData] = useState(orderDataInit);
  const [totalPrice, setTotalPrice] = useState(orderData.price);
  const [formInputData, setFormInputData] = useState(formInputInitialData);
  const [isValid, setIsValid] = useState(false);

  function calcPrice() {
    setTotalPrice(
      (orderData.price + formInputData.ingredients.length * 5) *
        formInputData.pieceCount,
    );
  }
  /*
  useEffect(() => {
    axios
      .post("https://reqres.in/api/pizza", orderDataInit, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then(function (response) {
        console.log(response.data);
        setOrderData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setOrderData({...orderData,orderDataInit});
      });

    calcPrice();
  }, []);
*/
  let navigate = useNavigate();
  useEffect(() => {
    calcPrice();
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
    if (event.target.type === "button") {
      setFormInputData({
        ...formInputData,
        pieceCount: formInputData.pieceCount + Number(event.target.value),
      });
    } else if (event.target.type === "checkbox") {
      if (event.target.checked) {
        setFormInputData({
          ...formInputData,
          ingredients: [...formInputData.ingredients, event.target.value],
        });
      } else {
        setFormInputData({
          ...formInputData,
          ingredients: formInputData.ingredients.filter(
            (item) => item !== event.target.value,
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

  function nextPageToast(data) {
    Toastify({
      style: {
        color: "white",
        height: "60px",
        fontSize: "20px",
      },
      duration: 1000,
      text: "Bir Sonraki sayfaya Yönlendiriliyorsunuz...",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #b4b6ba, #687fad)",
      callback: function () {
        debugger
        navigate("/order/success", {
          state: { ...data, title: orderData.title },
        });
      },
    }).showToast();
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
        },
      )
      .then(function (response) {
        console.log(response.data);

        Toastify({
          style: {
            color: "white",
            height: "60px",
            fontSize: "20px",
          },
          duration: 1000,
          text: "Siparişiniz Alındı! Bir Sonraki sayfaya Yönlendiriliyorsunuz...",
          gravity: "bottom",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          callback: function () {
            nextPageToast(response.data);
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
          duration: 1000,
          text: "Hata Oluştu! Lütfen Tekrar Deneyiniz...",
          gravity: "bottom",
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          callback: function () {
            nextPageToast({...formInputData,totalPrice});
          },
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
      <h2 className="w-full m-0 h-[138px] font-[Londrina_Solid] font-[400] !text-[50px] leading-[50px] text-center tracking-[0px] !text-[var(--beyaz)] bg-[var(--kirmizi)] content-center">
        Teknolojik Yemekler
      </h2>

      <section className="header-section flex justify-center bg-[var(--bej)] flex-col items-center">
        <img
          className="max-w-[581px] h-auto"
          src="/images/iteration-2-images/pictures/form-banner.png"
          alt="order-img"
        />
        <div className="max-w-[532px] mt-[40px]">
          <div className="breadcrums flex flex-row">
            <span className="font-[Barlow] font-[500] font-[16px] leading-[28.8px] tracking-[0px] align-middle text-[var(--acik-gri)]">
              Anasayfa -{" "}
            </span>
            <span className="font-[Barlow] font-[500] font-[16px] leading-[28.8px] tracking-[0px] align-middle text-[var(--acik-gri)] text-[var(--kirmizi)]">
              {" "}
              Sipariş Oluştur
            </span>
          </div>
          <div>
            <h2 className="font-[Barlow] font-[600] font-[22px] leading-[29.44px] tracking-[0px] align-middle text-[var(--koyu-gri)]">
              {orderData.title}
            </h2>
            <div className="flex flex-row justify-between items-center">
              {" "}
              <span className="font-[Barlow] font-[700] leading-[37.47px] tracking-[0px] align-middle text-[var(--koyu-gri)] text-[28px]">
                {orderData.price}₺
              </span>{" "}
              <span className="rating-area w-[117.62px] flex flex-row items-center justify-between text-[var(--acik-gri)]">
                <span className="font-[Barlow] font-[400] text-[16px] leading-[28.8px] text-center align-middle">
                  {" "}
                  {orderData.rating}
                </span>
                <span className="font-[Barlow] font-[400] text-[16px] leading-[28.8px] text-center align-middle">
                  ({orderData.reviews})
                </span>
              </span>
            </div>
          </div>
          <div className="font-[Barlow] font-[400] text-[16px] leading-[ 28.8px] tracking-[0px] text-[#5f5f5f] mt-10">
            <p>{orderData.description}</p>
          </div>
        </div>
      </section>
      <section className="!bg-[var(--beyaz)] flex flex-column w-100 items-center mt-10 order-form-section pt-5">
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
