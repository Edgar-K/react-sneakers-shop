import Cart from '../components/Card'

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">{searchValue ? `Search On :" ${searchValue}"` : "All Sneakers"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="clear" width={18} height={18} />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Cart
              key={item.id}
              // title={item.title}
              // price={item.price}
              // imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}

      </div>
    </div>
  );
}

export default Home;