import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function OrderForm({ formAreaData, handlechange, formInputData, totalPrice }) {
  const { doughTypes, ingredientData, pizzaSizes } = formAreaData;
  const { doughSize, doughType, ingredients, orderNote, pieceCount } =
    formInputData;
  return (
    <>
      <Form className="order-form">
        <div className="sizes">
          <FormGroup className="size-group">
            <Label>Boyut Seç</Label>
            <div>
              {pizzaSizes.map((size, index) => (
                <Input
                  checked={doughSize === size}
                  onChange={handlechange}
                  value={size}
                  key={index}
                  name="doughSize"
                  type="radio"
                ></Input>
              ))}
            </div>
          </FormGroup>

          <FormGroup className="dough-type">
            <Label>Hamur Seç</Label>
            <Input
              onChange={handlechange}
              name="doughType"
              type="select"
              value={doughType}
            >
              <option hidden value="">
                --Hamur Kalınlığı Seç --
              </option>

              {doughTypes.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
        <div className="ingredient-area">
          <Label>Ek Malzemeler</Label>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

          <div className="ingredient-checkbox">
            {ingredientData.map((ingredient, index) => (
              <FormGroup key={String(ingredient + index)} check>
                <Input
                  checked={ingredients.indexOf(ingredient) !== -1}
                  value={ingredient}
                  onChange={handlechange}
                  name="ingredients"
                  id={String(ingredient + index)}
                  type="checkbox"
                  disabled={
                    ingredients.length >= 10 &&
                    ingredients.indexOf(ingredient) === -1
                  }
                />

                <Label check htmlFor={String(ingredient + index)}>
                  {ingredient}
                </Label>
              </FormGroup>
            ))}
          </div>
        </div>
        <FormGroup className="order-note">
          <Label for="order-note">Sipariş Notu</Label>
          <Input
            onChange={handlechange}
            name="orderNote"
            id="order-note"
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={orderNote}
          />
        </FormGroup>
        <hr />
        <div className="total-area">
          <FormGroup className="piece-count">
            <Button
              disabled={pieceCount <= 1}
              name="pieceCount"
              value={-1}
              onClick={handlechange}
              className="decrease-btn"
            >
              -
            </Button>
            <Input
              name="pieceCount"
              readOnly
              value={pieceCount}
              className="piece-input"
            />
            <Button
              name="pieceCount"
              value={1}
              onClick={handlechange}
              className="increase-btn"
            >
              +
            </Button>
          </FormGroup>
          <FormGroup className="price-container">
            <div className="total-price">
              <Label>Sipariş Toplamı</Label>
              <div className="option-prices">
                <span>Seçimler</span>
                <span>Seçimler</span>
              </div>
              <div className="sum-price">
                <span>Toplam</span>
                <span>{totalPrice}₺</span>
              </div>
            </div>
            <Button className="order-btn">SİPARİŞ VER</Button>
          </FormGroup>
        </div>
      </Form>
    </>
  );
}
export default OrderForm;
