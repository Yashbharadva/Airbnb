import React from "react";
import './header.styles.scss';

const Header = () => {
    return (
        <div classname='header'>
            <div className="header_logo">
                <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt="yash" />

                <div className="options">
                    <div className="option" to="/place to stay">
                        Place to Stay
                    </div>
                    <div className="option" to="/experiences">
                        Experiences
                    </div>
                    <div className="option" to="/online experiences">
                        Online Experiences
                    </div>
                </div>
                <div className="hosts">
                    <div className="host" to="/become a host">
                        Become a Host
                    </div>

                    <div className="image">
                        <img src="https://previews.123rf.com/images/geekclick/geekclick2001/geekclick200100049/136800495-earth-globe-icon-vector-icons-on-a-white-background-trendy-linear-icon-icon-for-website-and-print-em.jpg"
                            alt="laungauge" />

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlCnFhoQcZYphXnXqoJG0pCpnJ-pkrifJ7dJyntZdelSRBUrdD4Sao2ePQQyZYXfZUA&usqp=CAU.png"
                            alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;