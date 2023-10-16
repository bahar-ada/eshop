import React from 'react'
import styles from './ShoppingCartSingleItem.module.css'
import ChangeCountButtons from '../ChangeCountButtons'
import Image from 'next/image'

const ShoppingCartSingleItem = ({ product }) => {
    return (
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.rightContainer}`}>
                <Image src={product.indexImageUrl} height={140} width={140} />
            </div>
            <div className={`${styles.leftContainer}`}>
                <div className={`${styles.leftTopContainer}`}>
                    <h5>{product.name}</h5>
                </div>
                <div className={`${styles.leftBottomContainer}`}>
                    <ChangeCountButtons productId={product.id} />
                    <h5>{product.priceWithDiscount === 0
                        ? product.price
                        : product.priceWithDiscount}</h5>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartSingleItem