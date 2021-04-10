import React, {useState, useEffect} from 'react';
import axios from 'axios';

import classes from './Home.module.css';
import Product from '../../Components/Product/Product';
import ProductDetails from '../../Components/Product/ProductDetails';
import Shop from '../../Components/Shop/Shop';
import {extractAttr,getMinPrice} from '../../utils';

const Home= ()=>{
    const [product, setProduct] = useState('');
    const [productAttr, setProductAttr] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedProductImg, setSelectedProductImg] = useState('');
    const [selectedSize, setSelectedSize] = useState({key: '', value: ''});
    const [selectedColor, setSelectedColor] = useState({key: '', value: ''});
    const [minPrice, setMinPrice] = useState(0);
    const [shop, setShop] = useState([]);

    useEffect(()=>{
        axios.get('https://api-dev.evaly.com.bd/go-catalog/api/v1/public/products/bangladesh-cricket-jersey-from-evaly-6bad62271')
            .then(res=>{
                setProduct(res.data.data);
                const attr = extractAttr(res.data.data.attributes);
                setSelectedColor({key: res.data.data.product_variants[0].attribute_values[0], value: attr[res.data.data.product_variants[0].attribute_values[0]]})
                setSelectedSize({key: res.data.data.product_variants[0].attribute_values[1], value: attr[res.data.data.product_variants[0].attribute_values[1]]})
                setProductAttr(attr);
            }).catch(err=>{})
    },[])
    useEffect(()=>{
        if(selectedColor.key !== '' && selectedSize.key !== ''){
            const newProduct = product.product_variants.filter((single)=>{
                return single.attribute_values[0] === parseInt(selectedColor.key) && single.attribute_values[1] === parseInt(selectedSize.key)
            });
            setSelectedProduct(newProduct[0]);
            setSelectedProductImg(newProduct[0].product_images[0])
            const variant_id = newProduct[0].variant_id;
            axios.get(`https://api-dev.evaly.com.bd/go-catalog/api/v1/public/shop-items/shops/${variant_id}`)
            .then(res=>{
                const price = getMinPrice(res.data.data);
                setShop(res.data.data);
                setMinPrice(price)
            }).catch(err=>{})
        } 
    },[selectedSize.key, selectedColor.key, product.product_variants])
    const selectedSizeHandler = (e)=>{
        setSelectedSize({key: e.target.value,value: productAttr[e.target.value]});
    }
    const selectedColorHandler = (e)=>{
        setSelectedColor({key: e.target.value, value: productAttr[e.target.value]});
    }
    const setImg = (img)=>{
        if(img !== selectedProductImg){setSelectedProductImg(img)} 
    }
    return(
        <>
            {selectedProduct === '' ? null : (
                <>
                    <div className={classes.productDiv}>
                        <Product product={selectedProduct} productImg={selectedProductImg} setImg={setImg}/>
                        <ProductDetails selectedProduct={selectedProduct} productAttr={productAttr} minPrice={minPrice}
                                        product={product.attributes} selectedColor={selectedColor.value} selectedColorHandler={selectedColorHandler}
                                        selectedSize={selectedSize.value} selectedSizeHandler={selectedSizeHandler}/>
                    </div>
                    <div className={classes.shops}><Shop shops={shop}/></div>
                </>
            )}
        </>
    )
}

export default Home;