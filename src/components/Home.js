import React from 'react';
import '../scss/home.scss';
import Menu from './Menu';
import Overview from './OverView';
import Profile from './Profile';

const Home = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="home">
                    <div className="menu-container">
                        <Menu />
                    </div>
                    <div className="overview-container">
                        <Overview />
                    </div>
                    <div className="profile-container">
                        <Profile />
                    </div>
                </div>
            </div>
            <div className="small-screen">
                <span>This Site is not supported on smaller screens</span>
            </div>
       </React.Fragment> 
    );
};

export default Home;