import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
const { Component } = require("react");


class PageWraper extends Component {
    render () {
        return (
            <>
                <Head>
                    <link rel="stylesheet" href="/static/assets/css/custom.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
                </Head>
                <div>
                    <Script strategy="afterInteractive" type="text/javascript" src="/static/assets/bootstrap/js/bootstrap.min.js"></Script>
                    
                    <Script strategy="afterInteractive" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></Script>
                    <Script strategy="afterInteractive" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></Script>
                </div>

                <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav" >
                    <div className="container" style={{fontSize:"1.5rem"}} >
                        <div id="brand">
                        <div style={{paddingRight: "5px"}} ><Image src ="/log1.png" width="229px" height="40px"/></div>
                        <div style={{paddingRight: "5px"}} ><Image src ="/log3.png" width="40px" height="40px"/></div>
                        <div><Image src ="/log4.png" width="40px" height="40px"/></div>
                        </div>
                        <button 
                            style={{maxWidth:"50px"}} 
                            id="menuBtn" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarResponsive" 
                            className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" 
                            aria-controls="navbarResponsive" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarResponsive" style={{fontSize:".95rem"}} >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link href="https://lightup.vercel.app/"><a className="nav-link py-3 px-0 px-lg-3 rounded">
                                        Trang Chủ
                                    </a></Link>
                                    
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link href="https://lightup.vercel.app/cardCreator/#form"><a className="nav-link py-3 px-0 px-lg-3 rounded">
                                        UEH ID Card
                                    </a></Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link href="https://lightup.vercel.app/activities/#activities"><a className="nav-link py-3 px-0 px-lg-3 rounded">
                                        Danh Sách Hoạt Động
                                    </a></Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link href="https://lightup.vercel.app/ranking/#ranking"><a className="nav-link py-3 px-0 px-lg-3 rounded">
                                        Tra Cứu
                                    </a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default PageWraper;