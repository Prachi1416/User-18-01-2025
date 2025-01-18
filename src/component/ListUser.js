import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function ListUser() {
    const [User, setUser] = useState([])
       
    function fetchUserFromDB(){
            axios.get("http://localhost:5000/users").then(
                (response) => {
                    if(response.status === 200){
                        setUser(response.data)
                    }else{
                        alert("Somethings went Wrong....")
                    }
                }
            ).catch(
                (error) => {
                    console.error(error)
                }
            )
        }
    
    useEffect(
        () => {
                fetchUserFromDB()
            },[]
        )

    function filterData(){
        axios.get("http://localhost:5000/users").then(
            (response) => {
                if(response.status === 200){
                    let searchEle = document.getElementById("search")
                    let filteredData = response.data.filter((obj)=>obj.name.includes(searchEle.value))
                    setUser(filteredData)
                }else{
                    alert("Somethings went Wrong....")
                }
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )

        

    }
  return (
    <div className='CreateUser w-100 text-center p-2' style={{backgroundColor:'#43CC9F',height:"90vh"}}>
        <div className='w-50 mx-auto' style={{height:"90vh",display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}} >
        <h1 className='text-danger text-center'>List User</h1>
        <div className="d-flex w-50 mx-auto" role="search">
            <input className="form-control  me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit" onClick={filterData}>Search</button>
        </div>
        <table  style={{backgroundColor:'#43CC9F'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Phone Number</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    User.map(
                        (user) => {
                            return(
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.mail}</td>
                                    <td>{user.phono }</td>
                                    <td><NavLink to= {`/update/${user.id}`} className={'btn btn-warning'}><i class="bi bi-pencil-square"></i></NavLink></td>
                                    <td><NavLink to= {`/delete/${user.id}`} className={'btn btn-danger'}><i class="bi bi-trash3"></i></NavLink></td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
        </div>
    </div>  
    )
}

export default ListUser