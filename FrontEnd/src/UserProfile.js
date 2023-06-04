import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from "axios"
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
const UserProfile = () => {
    const [user, setuser] = useState({

    })

    const takedata = async () => {
        const x = await axios.get("")
    }

    useEffect(() => {
        takedata()
    }, [])
    return (
        <>
            <Header />
            <Navbar></Navbar>
            <div className="container-fluid">
                <h2>User Profile</h2>
                <img src="/images/contact.png" alt="" />
                <h2>Name : user.Name</h2>
                <h4>Mobile Number : user.Phone_Number</h4>
                <h4>E-mail : user.Email</h4>
            </div>
        </>
    )
}

export default UserProfile