import React from "react";

import './main-trip.styles.scss';

import Trip from "../trip/trip.component";

const Main = () => {
    return (
        
        <div className="head">
            <h1>Inspiration for your next trip</h1>
            <div className="next-trip">
            <div className="main">
                <div className="away">
                    <div className="photo">
                <Trip
                    src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320" />
                    </div>
                    <div className="title">Lonavala</div>
                    
                    <div className="description">66 kilometers away</div>
                    </div>
               <div className="away">
                    <div className="photo">
                <Trip
                    src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320" />
                    </div>
                    <div className="title">Alibagh</div>
                    <div className="description">37 kilometers away</div>
                    </div>
                    <div className="away">
                    <div className="photo">
                <Trip
                    src="https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=320" />
                    </div>
                    <div className="title">Calangute</div>
                    <div className="description">396 kilometers away</div>
                    </div>
                    <div className="away">
                    <div className="photo">
                <Trip
                    src="https://a0.muscache.com/im/pictures/3836379f-169d-4259-8c08-a6cb50461903.jpg?im_w=320" />
                    </div>
                    <div className="title">Karjat</div>
                    <div className="description">53 kilometers away</div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Main;