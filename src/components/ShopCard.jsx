// только 1 карточка

export const ShopCard = ({name, color, img, price, className}) => {
  return (
    <div className={className}>
      <div className="shop-card__name">{name}</div>
      <div className="shop-card__color">{color}</div>
      <img src={img} alt={name} className="shop-card__img"/>
      <div>${price}</div>
    </div>
  )
}
