function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between  ">Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" width={25} height={25} />
                </h2>
                {items.length > 0 ? (
                    <div>
                        <div className="items">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center  justify-between mb-20">
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg" > </div>
                                    <div className="mr-20">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" width={25} height={25} />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul >
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
                            <button className="greenButton">Order
                                <img width={20} height={20} src="/img/arrow-right.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="220px" height="180px" src="/img/empty-cart.png" alt="empty-cart" />
                        <button onClick={onClose} className="mt-50 greenButton">
                            Back to Shop
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
}

export default Drawer;