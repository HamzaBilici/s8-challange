function OrderForm({
  isValid,
  formAreaData,
  handlechange,
  handleSubmit,
  formInputData,
  totalPrice,
}) {
  const { doughTypes, ingredientData, pizzaSizes } = formAreaData;
  const { doughSize, doughType, ingredients, orderNote, pieceCount } =
    formInputData;

  return (
    <>
      <form className="max-w-[529px] w-100 flex flex-column gap-y-10 order-form mb-10" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div className="!mb-0 max-w-[215px]">
            {" "}
            <label className="w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]">
              Boyut Seç{" "}
              <span className="text-[var(--kirmizi)] text-[20px] font-[Barlow] font-[600] leading-[24.76px] tracking-[0px] align-middle">
                *
              </span>
            </label>
            <div className="flex flex-row flex-nowrap gap-[17px]">
              {pizzaSizes.map((size, index) => {
                return (
                  <label
                  data-cy="sizeSelection"
                    key={index}
                    className="relative cursor-pointer select-none w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]"
                  >
                    <input
                      checked={doughSize === size}
                      onChange={handlechange}
                      value={size}
                      name="doughSize"
                      type="radio"
                      className="peer absolute opacity-0 w-0 h-0"
                    />
                    <span
                    className="
                    flex items-center justify-center
                    w-[56px] h-[56px]
                    rounded-full
                    bg-[var(--bej)]
                    text-[var(--acik-gri)]            
                    font-['Barlow'] font-medium text-[16px]
                    leading-[56px]            
                    transition-all duration-200            
                    peer-checked:bg-[var(--beyaz-sari)]
                    peer-checked:font-semibold            
                    peer-focus:shadow-none
                     "
                    >
                      {size}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="max-w-[258px] w-[258px] mb-0">
            <label   className="w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]">
              Hamur Seç{" "}
              <span className="text-[var(--kirmizi)] text-[20px] font-[Barlow] font-[600] leading-[24.76px] tracking-[0px] align-middle">
                *
              </span>
            </label>
            <select
            data-cy="doughSelection"
              onChange={handlechange}
              name="doughType"
              type="select"
              value={doughType}
              className="bg-[var(--bej)] w-[258px] h-[56px] rounded-[6px] px-[10px]"
            >
              <option hidden value="">
                --Hamur Kalınlığı Seç --
              </option>

              {doughTypes.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="ingredient-area">
          <label className="w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]">Ek Malzemeler</label>
          <p className="font-[Barlow] font-[500] text-[16px] leading-[56px] tracking-[0] align-middle text-[var(--acik-gri)] m-0">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </p>

          <div className="flex !flex-wrap gap-[13px] !gap-y-[13px] ingredient-checkbox">
            {ingredientData.map((ingredient, index) => (
              <div
                key={String(ingredient + index)}
                className="w-[167px] gap-[11px] flex items-center"
              >
                <div className="relative w-[45px] h-[45px] min-w-[45px] rounded-[6px] overflow-hidden">
                  <input
                  data-cy="ingredientSelection"
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
                    className="peer appearance-none w-full h-full rounded-md bg-[var(--bej)]  cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[var(--siyah)] font-bold text-lg pointer-events-none opacity-0 peer-checked:bg-[var(--sari)] peer-checked:!opacity-100 transition-opacity duration-200">
                    ✓
                  </span>
                </div>
                <label
                  htmlFor={String(ingredient + index)}
                  className="cursor-pointer !font-[700] !font-[Barlow] !text-[16px] !text-[var(--acik-gri)] !leading-[28.8px] !tracking-[0] !align-[middle]"
                >
                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="order-note">
          <label for="order-note" className="w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]">Sipariş Notu</label>
          <input
          data-cy="orderNote"
            onChange={handlechange}
            name="orderNote"
            id="order-note"
            type="text"
            placeholder="    Siparişine eklemek istediğin bir not var mı?"
            value={orderNote}
            className="bg-[var(--bej)] w-100 h-[56px] rounded-[6px] mt-2"
          />
        </div>
        <hr className="!border !border-[var(--acik-gri)]/50" />
        <div className="flex flex-row items-center justify-between items-start gap-[11px] !font-[Barlow]">
          <div className="flex flex-row items-center w-[170px] h-[57px] border border-[transparent] rounded-[6px] overflow-hidden">
            <button
            data-cy="decreaseCount"
              type="button"
              disabled={pieceCount <= 1}
              name="pieceCount"
              value={-1}
              onClick={handlechange}
              className="w-[57px] h-[56px] border-none rounded-[0] bg-[var(--sari)] p-0 decrease-btn text-[var(--beyaz)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              -
            </button>
            <input
              name="pieceCount"
              readOnly
              value={pieceCount}
              className="!w-[57px] !h-[56px] border border-[var(--beyaz-gri)] rounded-[0px]  font-[700] !text-[16px] !leading-[100%] tracking-[0] text-center align-middle piece-input"
            />
            <button
            data-cy="increaseCount"
              type="button"
              name="pieceCount"
              value={1}
              onClick={handlechange}
              className="w-[57px] h-[56px] border-none rounded-[0] bg-[var(--sari)] p-0 decrease-btn text-[var(--beyaz)]"
            >
              +
            </button>
          </div>
          <div className="grow">
            <div className="flex flex-column !border !border-[var(--beyaz-gri)] !rounded-[6px] !bg-[var(--bej)] grow px-[49px] py-[42px]">
              <label className="w-100 font-[Barlow] font-[600] text-[20px] leading-[24.76px] tracking-[0] align-[middle] mb-[19px]">Sipariş Toplamı</label>
              <div className="flex flex-row justify-between my-[12px] mx-0 font-[Barlow] font-[600] text-[18px] leading-[24.76px] tracking-[0] align-middle text-[var(--acik-gri)]">
                <span>Seçimler</span>
                <span>{ingredients.length * 5 * pieceCount}₺</span>
              </div>
              <div className="flex flex-row justify-between my-[12px] mx-0 font-[Barlow] font-[600] text-[18px] leading-[24.76px] tracking-[0] align-middle text-[var(--kirmizi)]">
                <span>Toplam</span>
                <span>{totalPrice?totalPrice:""}₺</span>
              </div>
            </div>
            <button
              data-cy="formSubmit"
              disabled={!isValid}
              className="w-100 bg-[var(--sari)] text-[var(--koyu-gri)] !font-[Barlow] font-[600] !text-[18px] !leading-[56px] tracking-[0px] text-center align-middle border-transparent !rounded-[6px] disabled:cursor-not-allowed disabled:opacity-30"
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default OrderForm;
