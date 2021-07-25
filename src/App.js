import React from 'react'
import axios from 'axios'
import Cart from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'




function App() {

  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch('https://60f9f7837ae59c0017165f92.mockapi.io/items').then((res) => {
    //   return res.json();
    // }).then((json) => {
    //   setItems(json);
    // });

    axios.get('https://60f9f7837ae59c0017165f92.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://60f9f7837ae59c0017165f92.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  // Sending the data to server and saving on Cart
  const onAddToCart = (obj) => {
    axios.post('https://60f9f7837ae59c0017165f92.mockapi.io/cart', obj);
    setCartItems((prev) => ([...prev, obj]));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear" >
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
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
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Favorite')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}

        </div>
      </div>
    </div>
  )
}

export default App;
