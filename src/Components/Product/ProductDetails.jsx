import React from 'react';

import classes from './ProductDetails.module.css';
import Select from '../Select/Select';

const ProductDetails = (props)=>{

    return (
            <div className={classes.productDetails}>
                <h3 className={classes.productName}>{props.selectedProduct.product_name}</h3>
                <p> <b>Color : {props.productAttr[props.selectedProduct.attribute_values[0]].toUpperCase()}</b>
                    <b className={classes.sizeLabel}>Size : {props.productAttr[props.selectedProduct.attribute_values[1]]}</b>
                </p>
                <p className={classes.sku}>SKU : {props.selectedProduct.sku.toUpperCase()}</p>
                <p className={classes.brand}>BRAND : {props.selectedProduct.brand_name}</p>
                <p className={classes.variant}>Variant ID : {props.selectedProduct.variant_id}</p>
                <h2 className={classes.price}>৳ {props.minPrice}.00</h2>
                <p  className={classes.startingPrice}><b>Starting price</b></p>
                <hr/>
                <Select attributes = {props.product} colorValue={props.selectedColor} colorHandler={props.selectedColorHandler}
                    sizeValue={props.selectedSize} sizeHandler={props.selectedSizeHandler}
                />
                <hr/>
                <p><b>Have questions about this product (SKU: {props.selectedProduct.sku}) ?</b></p>
                <div style={{color: "#d32f2f"}}>
                    <i className={"fa fa-phone fa-2x " + classes.phone}></i>
                    <h2 className={classes.phone}>09638111666</h2>
                </div>
            </div>
    )
}

export default ProductDetails;