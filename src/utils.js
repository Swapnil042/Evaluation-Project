export const extractAttr = (attributes)=>{
    const values = attributes.map((value)=>{
        return value.attribute_data.values.map((val)=>{
            return {[val.key]:val.value}
        }).reduce(((result, current) => Object.assign(result, current)), {})
    }).reduce(((result, current) => Object.assign(result, current)), {})

    return values;
}
export const getMinPrice=(shops)=>{
    const discountedPrice = shops.map((shop)=>{
        return shop.discounted_price
    })
    const minPrice = Math.min(...discountedPrice);
    return minPrice;
}