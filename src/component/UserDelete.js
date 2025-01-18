import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate, useParams } from 'react-router-dom'

function UserDelete() {
        const { userId } = useParams()
        const [user, setUser] = useState({})
        const nav = useNavigate()
            
            function fetchUserDetailsFromDB(){
              axios.get(`http://localhost:5000/users/${userId}`).then(
                (response)=>{
                  setUser(response.data)
                }
              )
            } 
            function deleteUserFromDB() {
                axios.delete(`http://localhost:5000/users/${userId}`).then(
                  (response)=>{
                    alert("record deleted successfully")
                    nav('/list')
                  }
                ).catch(
                  (error)=>{
                    console.error(error)
                  }
                )
              }
            
              useEffect(
                ()=>{
                    fetchUserDetailsFromDB()  
                }, []
              )
    
  return (
    <div className='CreateUser w-100 text-center' style={{backgroundColor:"#43CC9F",height:"90vh",display:"flex",alignItems:"center",justifyContent:"center" }}>
        <div>
          <h1 className='text-center text-danger'>User Delete</h1>
            <br/>
            <h1>Are you sure, you want to delete the user</h1>
            <h2 className='text-danger'>{user.name}????</h2>
            <button type='button' onClick={()=>{deleteUserFromDB()}} className='btn btn-danger col-sm-2 mb-2'>Yes</button>
            <NavLink to={'/list'} className='btn btn-warning col-sm-2  mb-2'>No</NavLink>
        </div>
      </div>
  )
}

export default UserDelete