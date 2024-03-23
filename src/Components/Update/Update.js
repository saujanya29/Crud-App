import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  updateUser } from '../../assets/userReducer';


function Update() {

     const {id} = useParams();
     const users = useSelector((state)=> state.users);
     const existingUser = users.filter(f => f.id == id);
     const{name,email} = existingUser[0];
     const[uname,setName] = useState(name)
     const[uemail,setEmail] = useState(email)
     const dispatch = useDispatch()
     const navigate = useNavigate()
     

   const handleSubmit = (event)=> {
    event.preventDefault();
    dispatch(updateUser({
      id : id,
      name: uname,
      email: uemail
    }))
   navigate('/');
   }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-itmes-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
         <h3>Update User</h3>
        <form action="" onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='form-control' value={uname} onChange={e => setName(e.target.value)}/>

                <label htmlFor="email">Name</label>
                <input type="email" name='email' className='form-control' value={uemail} onChange={e => setEmail(e.target.value)}/>
            </div> <br />

            <button className='btn btn-info'>Submit</button>
        </form>




        </div>
    </div>
  )
}

export default Update