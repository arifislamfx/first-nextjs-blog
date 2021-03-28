import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Head>
            <title>Best tech blog site in Bangladesh.</title>
            </Head>
            <Navbar></Navbar>
            { children }
            <Footer></Footer>
        </div>
    )
}

export default Layout
