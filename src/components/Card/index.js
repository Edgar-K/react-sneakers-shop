import React from 'react';
import styles from './Card.module.scss'

function Cart({ id, onFavorite, onPlus, title, imageUrl, price, favorited = false, added = false }) {

    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite} >
                <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked" width={15} height={15} />
            </div>

            <img src={imageUrl} alt="Sneakers" width={170} height={112} />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price</span>
                    <b>€ {price}</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" width={20} height={20} />

            </div>
        </div>
    );
}

export default Cart;