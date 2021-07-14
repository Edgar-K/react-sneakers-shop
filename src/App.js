function App() {
  return (
    <div className="wrapper" >
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 >React Sneakers</h3>
            <p>The best Shop for Sneakers</p>
          </div>
        </div>
        <ul className="headerInfo">
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
            <span>56 EUR</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All Sneakers</h1>
        .....
      </div>
    </div>
  )
}

export default App;
