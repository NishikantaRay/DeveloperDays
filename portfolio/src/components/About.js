import React from 'react'

export default function About(props) {
    const [details] = React.useState({
        'personalmail': 'nishikantaray1@gmail.com',
        'clgmail': 'ece.190410294@silicon.ac.in',
        'phone': '+91-6372833923',
        'name': 'About me',
        'picname': 'Nishikanta Ray',
        'intro':
            'I am a second year Undergraduate student of Electronics and Communication Engineering at Silicon Institute of Technology,Bhubanewer,Odisha. I am a tech enthusiast who likes creating new things and experimenting with things. I am a fast learner and enjoy challenges encountered along the way. I am always willing to learn new things with full enthusiasm and passion.',
        'url': 'https://avatars.githubusercontent.com/u/62615392?v=4',
    });

    return (
        <>
        <div className="container">
        <div className="mx-auto mt-5 text-center achieve" >
            <h4>&nbsp;{ details.name }</h4>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-5 pt-5 mb-md-0"  >
            <div className="card bg-primary shadow-inset border-light">
                <div className="card-header p-4">
                <img
                    src={ details.url }
                    className="card-img-top rounded"
                    alt="Wood Portrait"
                />
                </div>
            </div>
            <div className="card-body text-center pt-4">
                <h3 className="h5 mb-2">{ details.picname }</h3>
            </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-md-0"></div>
            <div className="col-12 col-md-6 col-lg-6 mb-5 pt-5 mb-md-0"  >
            <div className="row">
                <div className="col-12 col-md-12">
                <div className="card bg-primary shadow-inset border-light p-3">
                    <div
                    className="
                        card-header
                        shadow-soft
                        border border-light
                        rounded
                        p-3
                        mb-3
                    "
                    >
                    <p>
                        { details.intro }
                    </p>
                    </div>
                    <div
                    className="card-body shadow-soft border border-light rounded p-2 mb-3"
                    >
                    <ul className="list-group list-group-flush price-list mb-4">
                        <li className="list-group-item border-primary pb-1">
                        <span className="fas fa-envelope-square"></span
                        >
                        { details.personalmail }
                        </li>
                        <li className="list-group-item border-primary pb-1">
                        <span className="fas fa-envelope-square"></span
                        >
                        {details.clgmail }
                        </li>
                        <li className="list-group-item border-primary pb-1">
                        <span className="fas fa-phone"></span>{details.phone }
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</>
    )
}



