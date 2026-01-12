function Product({ imageSrc, title, price, rating , commentCount}) {
  return (<>
  
            <div class="product">
            <div class="product-frame">
              <img src={imageSrc} alt="" />
              <div class="product-text-area">
                <h3 class="product-name">{title}</h3>
                <div class="product-detail-area">
                  <span class="product-rating">{rating}</span>
                  <div class="product-price-comment-area">
                    <span class="comment-count">({commentCount})</span>
                    <span class="price">{price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  </>);
}
export default Product;