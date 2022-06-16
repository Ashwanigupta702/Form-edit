import React from 'react'
import { ErrorMessage,  useField } from 'formik'

export const TextField = ({show,setShow,label, ...props}) => {
     
    const [Field,meta] =useField(props);
    console.log(Field)
  return (
      <>
      {show?
    <div className="mb-2">
        <label htmlFor={Field.name}>{label}</label>
        <input 
       className={"form-control shadoe-none ${meta.touched && meta.error }"}
       {...Field}{...props}
        autoComplete="off"
        />
        <ErrorMessage component="div" name={Field.name} className="error" />
    </div>:<div><label htmlFor={Field.name}>{label}</label>
    <h4 >{Field.value}</h4>
    
    </div>
    
}
    </>
  )
}
