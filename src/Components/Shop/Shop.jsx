import React from 'react';
import classes from './Shop.module.css';

const Shop = (props)=>{

    return(
        <div className={classes.shopContainer}>
            {props.shops.map((shop, indx)=>{
                return (
                    <div key={indx} className={classes.shop}>
                        <img src={shop.shop_image} alt={shop.shop_name}/>
                        <p><b>{shop.shop_name}</b></p>
                        {shop.price === shop.discounted_price ? 
                                        <p><b>৳{shop.price}</b></p> : 
                                        <p><b className={classes.crossedOut}>৳{shop.price} </b> <b>৳{shop.discounted_price}</b></p>}
                        <div className={classes.btnDiv}>
                            <button className={classes.chat}>Chat</button>
                            <button className={classes.buy}>Buy Now</button>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Shop;