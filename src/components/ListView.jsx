import { ShopCard } from "./ShopCard";

export const ListView = ( {products} ) => {
  const className = "shop-card list";

  return (
    <div className="list-view">
      {products.map(elem => 
        <ShopCard name={elem.name} color={elem.color} img={elem.img} price={elem.price} className={className}/>
      )}
    </div>
  )
}