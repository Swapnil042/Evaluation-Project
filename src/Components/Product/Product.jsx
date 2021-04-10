import React from 'react';
import classes from './Product.module.css';

const Product = (props)=>{
    return(
        <div className={classes.productImg}>
                <img className={classes.mainImg} src={props.productImg} alt={props.product.product_name}/>
                <div className={classes.smallImgContainer}>
                    {props.product.product_images.map((img,idx)=>{
                        return(
                        <div key={idx} className={classes.smallImgDiv}>
                            <img className={classes.smallImg} src={img} alt={props.product.product_name} 
                                onClick={()=>props.setImg(img)}/>
                        </div>)
                    })}
                </div>
        </div>
    )
}

export default Product;