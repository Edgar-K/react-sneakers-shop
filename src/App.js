function App() {
  return (
    <div className="wrapper clear" >

      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Cart</h2>

          <div>
            <div className="cartItem d-flex align-center  justify-between mb-20">
              <div style={{ backgroundImage: 'url("/img/sneakers/1-sneaker.jpeg")' }} className="cartItemImg" > </div>
              <div className="mr-20">
                <p className="mb-5">Nike Running</p>
                <b>€ 87,00</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" width={15} height={15} />
            </div>

            <div className="cartItem d-flex align-center  justify-between mb-20">
              <div style={{ backgroundImage: 'url("/img/sneakers/1-sneaker.jpeg")' }} className="cartItemImg" > </div>
              <div className="mr-20">
                <p className="mb-5">Nike Running</p>
                <b>€ 87,00</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" width={15} height={15} />
            </div>
            <ul className="cartTotalBlock">
              <li className="d-flex">
                <span>Total:</span>
                <div></div>
                <b>150 EUR</b>
              </li>
              <li className="d-flex">
                <span>Tax 19%:</span>
                <div></div>
                <b>29 EUR</b>
              </li>
            </ul>

          </div>

        </div>
      </div>
      <header className="d-flex justify-between p-40 align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best Shop for Sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
            <span>56 EUR</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">

          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>

            <img src="/img/sneakers/1-sneaker.jpeg" alt="Sneakers" width={133} height={112} />
            <h5>Fila Jual Sepatu</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 87,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/2-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike Running</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 123,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/3-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike 90's</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 95,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/4-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike Sport</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 163,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
