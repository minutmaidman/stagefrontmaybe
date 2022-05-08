import React from 'react';
import reactlogo from './logo.png';
import "./css.css";

class Logo extends React.Component {
    render() {

        return (
            <div>
                <div className="container">
                    <div className="Row">
                        <a href="https://www.youtube.com/watch?v=BgvHNlgmKro/"><img src={reactlogo} alt="Logo" className="photo"/></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logo;