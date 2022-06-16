import React, { useState } from 'react'
import { Formik ,Form} from 'formik'
import * as yup from 'yup'
import { TextField } from './TextField'

export const Signup = () => {
    const [show, setShow] = useState(true);
    const hr=()=>{
        setShow(1);
    }
    const validate=yup.object({
    firstName: yup.string()
    .max(15,'Must be 15 character or less')
    .min(5,'Must be at least 5 ')
    .required('first name is Required'),
    lastName:yup.string()
    .max(20,'must be 20 character or less')
    .required('last name is Required'),
    email:yup.string()
    .email('Email is invalid')
    .required('Email is Required'),
    password:yup.string()
    .min(6,'Password must be at least 6 characters')
    .required('Password is required'),
    confirmPasswords:yup.string()
    .oneOf([yup.ref('password'),null],'Password must match')
    .required('Confirm password is required'),
    })
  return (
    <Formik
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPasswords: ''
    }}
    validationSchema={validate}
    onSubmit={values =>{
        setShow(0);
        window.alert(JSON.stringify(values, 0, 2));
        console.log(values)
    }}
    
    >
     {formik=>(
         <div>
           <h1 className="my-4 font-wright-bold .display-4"> Signup</h1>
           <Form>
               <TextField label="First Name" name="firstName" type="text" show={show}setShow={setShow}/>
               <TextField label="Last Name" name="lastName" type="text" show={show} setShow={setShow}/>
               <TextField label="Email" name="email" type="email" show={show} setShow={setShow}/>
               <TextField label="password" name="password" type="password" show={show} setShow={setShow}/>
               <TextField label="confirm password" name="confirmPasswords" type="password"show={show}setShow={setShow}/>
               
             {show?
               <div>
                 <button className='btn btn-dark mt-3' type='submit'>Submit</button>
                 <button className='btn btn-dark mt-3 ' type='reset' onClick={()=>setShow(1)}>Reset</button>
               </div>
               :<div>
               </div>

               }
           </Form>
           {show?
               <div> 
               </div>
               :<div>
                   <button  className='btn btn-dark mt-3 ' onClick={()=>hr()}>Edit</button>
                   
               </div>

               }
         </div>
     )}   
    </Formik>
  )
}
