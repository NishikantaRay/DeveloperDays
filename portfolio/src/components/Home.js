import React from 'react'

export default function Home() {
  
    return (
        <>
            <div className="pt-5 mt-5 container">
  <br />
  <br /><br />
  <div
    className="
      profile-image
      bg-primary
      mx-auto
      shadow-inset
      border border-light
      rounded-circle
      p-3
      ml-3
      mt-n5
    "
  >
    <img
      srcSet="https://avatars.githubusercontent.com/u/62615392?v=4"
      className="card-img-top rounded-circle"
      alt="Nishikanta Ray"
      
    />
  </div>
  <div
    className="mx-auto mt-2 hello text-center"
    
  >
    <h4 >&nbsp; Hey, I'm Nishikanta Ray</h4>
    <div className="word text-danger" ></div>
    <br />
  </div>
  <div
    className="mx-auto hellob mt-3"
    
  >
    <button
      className="btn btn-icon-only btn-pill btn-twitter mr-3"
      type="button"
      aria-label="youtube button"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      title="youtube button"
      onClick={() => {window.location.href = 'https://twitter.com/NishikantaRay5'}}
    >
      <span aria-hidden="true" className="fab fa-twitter"></span>
    </button>
    <button
      className="btn btn-icon-only btn-pill btn-instagram mr-3"
      type="button"
      aria-label="youtube button"
      title="youtube button"
      onClick={() => {window.location.href = 'https://instagram.com/nishikant.ray.16?utm_medium=copy_link'}}
    >
      <span aria-hidden="true" className="fab fa-instagram"></span>
    </button>
    <button
      className="btn btn-icon-only btn-pill btn-youtube mr-3"
      type="button"
      aria-label="youtube button"
      title="youtube button"
      onClick={() => {window.location.href = 'https://www.youtube.com/channel/UCDXj9OJ3P0_bvwRetEENp9g/featured'}}
    >
      <span aria-hidden="true" className="fab fa-youtube"></span>
    </button>
    <button
      className="btn btn-icon-only btn-pill btn-github mr-3"
      type="button"
      aria-label="youtube button"
      title="youtube button"
      onClick={() => {window.location.href = 'https://github.com/NishikantaRay'}}
    >
      <span aria-hidden="true" className="fab fa-github"></span>
    </button>
    <button
      className="btn btn-icon-only btn-pill btn-facebook mr-3"
      type="button"
      aria-label="youtube button"
      title="youtube button"
      onClick={() => {window.location.href = 'https://www.facebook.com/nishikant.ray.16'}}
    >
      <span aria-hidden="true" className="fab fa-facebook"></span>
    </button>
    <button
      className="btn btn-icon-only btn-pill btn-linkedin mr-3"
      type="button"
      aria-label="youtube button"
      title="youtube button"
      onClick={() => {window.location.href = 'https://www.linkedin.com/in/nishikanta-ray-7786a0196/'}}
    >
      <span aria-hidden="true" className="fab fa-linkedin"></span>
    </button>
  </div>
</div>
        </>
    )
}
