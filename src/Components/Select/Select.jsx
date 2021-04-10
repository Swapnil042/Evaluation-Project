import React from 'react';

import classes from './Select.module.css';

const Select = (props)=>{
    const color = props.attributes[0].attribute_name === 'color' ? props.attributes[0] : props.attributes[1];
    const size = props.attributes[0].attribute_name === 'size' ? props.attributes[0] : props.attributes[1];
    return(
        <div className={classes.mainDiv}>
            <div className={classes.size}>
                <label><b>Sizes</b></label>
                {size.attribute_data.values.map((val)=>{
                        return (<div key={val.key}> 
                                    <input type="radio" value={val.key } name='size' 
                                        checked={val.value === props.sizeValue} 
                                        onChange={props.sizeHandler}/>
                                    <b>{val.value}</b>
                                </div>)
                })}
            </div>
            <div>
                <label><b>Colors</b></label>
                {color.attribute_data.values.map((val)=>{
                        return (<div key={val.key}> 
                                    <input type="radio" value={val.key } name='color' 
                                        checked={val.value === props.colorValue} 
                                        onChange={props.colorHandler}/>
                                    <b>{val.value}</b>
                                </div>)
                })}
            </div>
            
        </div>
    )
}

export default Select;