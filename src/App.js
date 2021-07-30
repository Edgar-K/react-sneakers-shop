import React from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'




function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://60f9f7837ae59c0017165f92.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://60f9f7837ae59c0017165f92.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://60f9f7837ae59c0017165f92.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  // Sending the data to server and saving on Cart
  const onAddToCart = (obj) => {
    axios.post('https://60f9f7837ae59c0017165f92.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://60f9f7837ae59c0017165f92.mockapi.io/cart/${id}`);


    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://60f9f7837ae59c0017165f92.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear" >
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          items={favorites}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
        // onChangeSearchInput={onChangeSearchInput}
        // onAddToCart={onAddToCart}
        // onAddToFavorite={onAddToFavorite}
        />
      </Route>
    </div>
  )
}

export default App;
