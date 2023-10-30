import { ShopCard } from "./ShopCard";

export const CardsView = ( {products} ) => {
  const className = "shop-card cards";

  return (
    <div className="card-view">
      {products.map(elem => 
        <ShopCard name={elem.name} color={elem.color} img={elem.img} price={elem.price} className={className}/>
      )}
    </div>
  )
}