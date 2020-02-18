import React from 'react';
import classnames from 'classname';
const TextInputGroup=({name,label,onChange,type,placeholder,value,error}) => {
   return (
        
        <div className="form-group">
            <label htmlFor="name">{label} </label>
            <input 
            type={type}
            name={name}
            className={classnames("form-control form-control-lg",
                                    {'is-invalid':error}
            )}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
            <div className="invalid-feedback">{error}</div>
        </div>
        
        
     )
}
TextInputGroup.defaultProps = {
    type:'text'
}
export default TextInputGroup;