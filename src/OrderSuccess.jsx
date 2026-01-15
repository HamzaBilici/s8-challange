import { useEffect } from "react";
import { useLocation } from "react-router";
useEffect
function OrderSuccess() {
// Hook'u component içinde çağırıyoruz
  const location = useLocation();
  
  const orderData = location.state;
  const { doughSize, doughType, ingredients, totalPrice,pieceCount,title } = orderData;
  console.log(orderData);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <section className="order-success-section">
        <h2 className="order-header">Teknolojik Yemekler</h2>
        {orderData && (
          <div className="order-success-message">
            <p>lezzetin yolda</p>
            <h1>SİPARİŞ ALINDI</h1>
            <hr />
            <h2 className="order-name">{title}</h2>
            <div className="order-detail">
              <div className="order-size">
                Boyut: <span>{doughSize}</span>
              </div>
              <div className="order-dough">
                Hamur: <span>{doughType}</span>
              </div>
              <div className="order-ingredients">
                Malzemeler: <span>{ingredients.join(", ")}</span>
              </div>
            </div>
            <div className="total-price">
              <h4>Sipariş Toplamı</h4>
              <div className="option-prices">
                <span>Seçimler</span>
                <span>{ingredients.length*5*pieceCount}₺</span>
              </div>
              <div className="sum-price">
                <span>Toplam</span>
                <span>{totalPrice}₺</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default OrderSuccess;
