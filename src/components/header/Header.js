import React from "react";
import "./header.sass";


function Header() {
    
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./img/logo.webp" alt="Fashe." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="d-flex">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./img/icon-header-01.png.webp" alt="basket" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./img/icon-header-02.png.webp" alt="basket" /></a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* Header - Carousel */}
            <div className="title">
                <h1></h1>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/master-slide-04.jpg.webp" className="d-block w-100" alt="Master Slide 01" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/master-slide-03.jpg.webp" className="d-block w-100" alt="Master Slide 02" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/master-slide-02.jpg.webp" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Header;