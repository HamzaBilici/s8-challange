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
      <section className="flex flex-column items-center justify-start h-screen text-center gap-[20px] bg-kirmizi text-beyaz font-[Barlow] order-success-section">
        <h2 className="order-header mt-[30px] font-londrina font-[400] text-[50px] ">Teknolojik Yemekler</h2>
        {orderData && (
          <div className="items-center flex flex-column gap-[20px] order-success-message">
            <p className="font-[Satisfy] font-[400] text-[32px] leading-[44.27px] tracking-[0] text-center align-middle text-sari">lezzetin yolda</p>
            <h1 className="font-[Roboto_Condensed] !font-[300] !text-[86px] !leading-[92px] tracking-[1.5px] text-center align-middle uppercase">SİPARİŞ ALINDI</h1>
            <hr className="!border !border-bej w-100" />
            <h2 className="!font-[600] !text-[22px] !leading-[29.44px] text-center align-middle order-name">{title}</h2>
            <div className="w-[202px] justify-self-center !text-start order-detail">
              <div className="font-[400] text-[16px] leading-[24.76px] tracking-[0] align-middle order-size">
                Boyut: <span className="font-[Barlow] font-[700] text-[16px] leading-[24.76px] tracking-[0]">{doughSize}</span>
              </div>
              <div className="font-[400] text-[16px] leading-[24.76px] tracking-[0] align-middle order-dough">
                Hamur: <span className="font-[Barlow] font-[700] text-[16px] leading-[24.76px] tracking-[0]">{doughType}</span>
              </div>
              <div className="font-[400] text-[16px] leading-[24.76px] tracking-[0] align-middle order-ingredients">
                Malzemeler: <span className="font-[Barlow] font-[700] text-[16px] leading-[24.76px] tracking-[0]">{ingredients.join(", ")}</span>
              </div>
            </div>
            <div className="flex flex-column row-gap-[10px] px-[49px] py-[46px] !border !border-bej rounded-[6px] w-[350px] h-[197px] text-beyaz total-price">
              <h4 className="text-beyaz font-[600] font-[Barlow] !text-[20px] !leading-[24.76px] !tracking-[0] align-middle text-left">Sipariş Toplamı</h4>
              <div className="flex justify-between option-prices">
                <span className="text-beyaz font-[Barlow] text-[18px] leading-[24.76px] tracking-[0]">Seçimler</span>
                <span className="text-beyaz  font-[Barlow] text-[18px] leading-[24.76px] tracking-[0]">{ingredients.length*5*pieceCount}₺</span>
              </div>
              <div className="flex justify-between sum-price">
                <span className="text-beyaz font-[Barlow] text-[18px] leading-[24.76px] tracking-[0]">Toplam</span>
                <span className="text-beyaz font-[Barlow] text-[18px] leading-[24.76px] tracking-[0]">{totalPrice}₺</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default OrderSuccess;
