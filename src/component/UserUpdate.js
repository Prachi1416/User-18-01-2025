import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function UserUpdate() {
    const { userId } = useParams()
    const {register, handleSubmit, setValue, formState:{errors}} = useForm()
    const nav = useNavigate()
    const nameAttrs = {
        required: {value:true, message:"This is required field."},
        minLength: {value:6, message:"Minium Lenght will be 6"},
        maxLength: {value:30, message:"Maximum Lenght will be 30"},
    }

    const emailAttrs = {
        required: {value:true, message:"This is required field."}, 
        pattern: {value: /^[A-Za-z0-9_.-]+@[A-Za-z0-9]+\.[a-z.]{2,6}$/, message: "Email is not valid"}   
    }

    const phonoAttrs = {
        required: {value:true, message:"This is required field."},  
        min : {value: 1000000000, message:"Invalid PhNo."  }  ,  
        max : {value: 9999999999, message:"Invalid PhNo."  }  
    }

    const passwordAttrs = {
        required: {value:true, message:"This is required field."},
        pattern: {value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@!#&$.-])[A-Za-z\d@!#&$.-]{8,20}$/, message: "Password is not strong"}    
    }


    function fetchUserDetailsFromDB(){
        axios.get(`http://localhost:5000/users/${userId}`).then(
            (response) => {
                setValue("name", response.data.name)
                setValue("mail", response.data.mail)
                setValue("phono", response.data.phono)
                setValue("desig", response.data.desig)
                setValue("dept", response.data.dept)
            }
        )
    }
    function updateUserDetailsFromDB(userData){
        axios.patch(`http://localhost:5000/users/${userId}`, userData).then(
            (response) => {
                nav('/list')
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    }
    useEffect(
        ()=>
            { 
                fetchUserDetailsFromDB()
            },[]
        )

  return (
    <div className='CreateUser w-100 text-center' style={{backgroundColor:"#43CC9F" ,height:"90vh"}}>
        <div className='w-50 mx-auto' style={{height:"90vh",display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}} >

        <h1 className='text-center text-danger'>Create User</h1>
            
            <form onSubmit={handleSubmit(updateUserDetailsFromDB)}>
                <div className='row mb-2'>
                    <div className='col-sm-4 text-center'>  
                         <label htmlFor="name" className='form-label fw-bold'>Name</label>
                    </div> 
                    <div className='col-sm-8'> 
                            <input type="text" id="name"{...register('name', nameAttrs )} placeholder="Enter your name" className='form-control col-sm-7' />
                            {errors.name? <p className='text-danger'>{errors.name.message}</p>:<></>}
                        </div>    
                    </div>

                    <div className='row mb-2'>
                        <div className='col-sm-4 text-center'>  
                            <label htmlFor="email" className='form-label fw-bold'>Email</label>
                        </div> 
                        <div className='col-sm-8'>   
                            <input type="email" id="email" {...register('mail', emailAttrs)} placeholder="Enter your email" className='form-control col-sm-7' />
                            {errors.mail? <p className='text-danger'>{errors.mail.message}</p>:<></>}

                        </div>    
                    </div>

                    <div className='row mb-2'>
                        <div className='col-sm-4 text-center'>  
                            <label htmlFor="phone" className='form-label fw-bold'>Phone Number</label>
                        </div> 
                        <div className='col-sm-8'>       
                            <input type="number" id="phone"{...register('phono', phonoAttrs)} placeholder="Enter your phone number" className='form-control col-sm-7' />
                            {errors.phono? <p className='text-danger'>{errors.phono.message}</p>:<></>}
                        </div>    
                    </div>

                    <div className='row mb-2'>
                        <div className='col-sm-4 text-center'>  
                            <label htmlFor="password" className='form-label fw-bold'>Passsword</label>
                        </div> 
                        <div className='col-sm-8'>       
                            <input type="password" id="password"{...register('password', passwordAttrs)} placeholder="Enter your password" className='form-control col-sm-7' />
                            {errors.password? <p className='text-danger'>{errors.password.message}</p>:<></>}
                        </div>    
                    </div>    

                <center>
                    <button type='submit' className='btn btn-warning col-sm-6 mb-2'>Update</button>
                    <NavLink to = {'/list'} className={'btn btn-danger col-sm-6 mb-2'}>Cancle</NavLink>
                </center>
            
            </form>
        </div>    
    </div>
    )
}

export default UserUpdate