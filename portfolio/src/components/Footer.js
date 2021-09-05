import React from 'react'

export default function Footer() {
    return (
        <>
        <div className="pt-6"></div>
        <footer className="d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
        <div className="container">
            <div className="row">
            <div className="col-lg-4" >
                <p >
                <strong>Hey I'am Nishikanta Ray</strong> Thank You for taking the time
                to view my Portfolio 😄. Have a good day.
                </p>
                <ul className="d-flex list-unstyled mb-5 mb-lg-0">
                <li className="mr-2">
                    <button
                    className="btn btn-icon-only btn-pill btn-twitter mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://twitter.com/NishikantaRay5';"
                    >
                    <span aria-hidden="true" className="fab fa-twitter"></span>
                    </button>
                </li>
                <li className="mr-2">
                    <button
                    className="btn btn-icon-only btn-pill btn-github mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://github.com/NishikantaRay';"
                    >
                    <span aria-hidden="true" className="fab fa-github"></span>
                    </button>
                </li>
                <li className="mr-2">
                    <button
                    className="btn btn-icon-only btn-pill btn-linkedin mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://www.linkedin.com/in/nishikanta-ray-7786a0196/';"
                    >
                    <span aria-hidden="true" className="fab fa-linkedin"></span>
                    </button>
                </li>
                <li>
                    <button
                    className="btn btn-icon-only btn-pill btn-youtube mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://www.youtube.com/channel/UCDXj9OJ3P0_bvwRetEENp9g/featured';"
                    >
                    <span aria-hidden="true" className="fab fa-youtube"></span>
                    </button>
                </li>
                <li>
                    <button
                    className="btn btn-icon-only btn-pill btn-instagram mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://instagram.com/nishikant.ray.16?utm_medium=copy_link';"
                    >
                    <span aria-hidden="true" className="fab fa-instagram"></span>
                    </button>
                </li>
                <li>
                    <button
                    className="btn btn-icon-only btn-pill btn-facebook mr-3"
                    type="button"
                    aria-label="youtube button"
                    title="youtube button"
                    onclick="location.href = 'https://www.facebook.com/nishikant.ray.16';"
                    >
                    <span aria-hidden="true" className="fab fa-facebook"></span>
                    </button>
                </li>
                </ul>
            </div>
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                <div className="text-center">
                <a href="https://nishikantaray.github.io/studytub/">
                    <div
                    className="
                        icon icon-shape
                        shadow-soft
                        border border-light
                        rounded-circle
                    "
                    >
                    <img
                        src="https://nishikantaray.github.io/studytub/img/core-img/nanda.png"
                        alt=""
                        srcset=""
                    />
                    </div>
                    <h3 className="h3 my-3">Study Tub</h3>
                    <span>Your One-Stop for all the Notes.</span>
                </a>
                </div>
            </div>

            <div
                className="col-12 col-lg-4 mb-5 mb-lg-0"
                data-aos-duration="3000"
                data-aos="fade-left"
            >
                <h5>Subscribe</h5>
                <p className="text-gray font-small mt-2">
                Join our mailing list. We write rarely, but only the best content.
                </p>
                <form >
                <div className="form-row mb-2">
                    <div className="col-12">
                    <label
                        className="h6 font-weight-normal d-none"
                        for="exampleInputEmail3"
                        >Email address</label
                    >
                    
                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="example@company.com"
                        name="email"
                        aria-label="Subscribe form"
                        id="mail"
                        
                    />
                    
                    </div>

                    <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        data-loading-text="Sending"
                    >
                        <span>Subscribe</span>
                    </button>
                    </div>
                </div>
                </form>
                
                <p className="text-gray font-small m-0">
                We’ll never share your details. See our
                <a className="text-black" href="/">Privacy Policy</a>
                </p>
            </div>
            </div>
            <hr className="my-5" />
            <div className="row">
            <div className="col">
                <a href="/" target="_blank" className="d-flex justify-content-center">
                <h3 >NR</h3>
                </a>
                <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
                >
                <p className="font-weight-normal font-small mb-0">
                    Copyright © Nishikantaray <span className="current-year">2020</span>.
                    All rights reserved.
                </p>
                </div>
            </div>
            </div>
        </div>
        </footer>
</>
    )
}
