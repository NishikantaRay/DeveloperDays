import React from 'react'

export default function Achieve() {
    const [state] = React.useState(
    [
        {
          img: 'https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/p1.png',
          details:
            ' The first, (currently only) and hands down BEST bootstrap 5 snippet extension. Includes templates, powerful utility snippets, and much more.',
          name: 'Bootstrap 5 Code Snippets ',
          link: 'https://marketplace.visualstudio.com/items?itemName=Nishikanta12.bootstrap5snippets',
        },
        {
          img: 'https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/p2.png',
          details:
            ' StudyTub is an online platform where you can get all engineering study material ,video lectures and assignment solution',
          name: 'Studytub ',
          link: 'https://studytub.ml',
        },
        {
          img: 'https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/p3.png',
          details:
            'To Control the black market of medicines, Control the production of Falsified drugs and provide real and trusted medicines to the buyer.',
          name: 'Hackthe mountain 2.0',
          link: 'https://devfolio.co/submissions/eliminating-black-market-of-medicines-0cd3',
        },
      ]);
    return (
        <>
          <div className="container pt-3">
  <div className="mx-auto mb-5 mt-5 text-center achieve hello">
    <h4 >&nbsp;Achievements</h4>
  </div>
  <div className="justify-content-center">
  {state.map((user) => (

    <div className="col-12 col-md-12 mb-3" >
      <div className="card bg-primary pl-2 pr-2 border-light shadow-soft">
        <div className="row">
          <div className="col-md-6 pt-4">
            <img
              srcSet={ user.img }
              className="card-img-top rounded"
              alt="Themesberg office"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="h5 card-title">{ user.name }</h3>
              <p className="card-text">
                { user.details }
              </p>
              <a href={ user.link } className="btn btn-primary btn-sm"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
  
</div>  
        </>
    )
}
