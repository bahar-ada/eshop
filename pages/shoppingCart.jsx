import React from 'react'
import styles from './shoppingCart.module.css'
import ShoppingCartItems from '@/components/shoppingCartComponents/ShoppingCartItems'

const shoppingCart = () => {
    return (
        <div className={`${styles.outerContainer}`}>
            <div>
            <ShoppingCartItems/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default shoppingCart