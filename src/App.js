import React from 'react'
import Cart from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'




function App() {

  const [items, setItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60f9f7837ae59c0017165f92.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json);
    });
  }, []);

  return (
    <div className="wrapper clear" >
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Cart
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            // onFavorite={() => }
            // onPlus={() =>}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App;
