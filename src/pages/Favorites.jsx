import Cart from '../components/Card'

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Favorites</h1>

      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Cart
            key={index}
            // id ={item.id}
            //title={item.title}
            // price={item.price}
            // imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;