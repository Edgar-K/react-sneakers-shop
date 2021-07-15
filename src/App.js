function App() {
  return (
    <div className="wrapper clear" >
      <header className="d-flex justify-between p-40 align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>The best Shop for Sneakers</p>
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
        <h1>All Sneakers</h1>
        .....
      </div>
    </div>
  )
}

export default App;
