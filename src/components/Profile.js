import React from 'react';
import '../scss/profile.scss';

const overviewData = require('../demoData/profile.json');

const UserData = (props) => {
    const userData = props.data || {},
        notification = userData.notification || "",
        editIcon = userData.edit || "",
        profile_image = userData.profile_image || "",
        label = userData.label || "";

    return(
        <div className="user-container">
            <div className="icon-container">
                <div className="icon">
                    <i class={"fa "+notification} aria-hidden="true"></i>
                </div>
                <div className="icon">
                    <i class={"fa "+editIcon} aria-hidden="true"></i>
                </div>
            </div>
            <div className="profile-pic">
                <img src={profile_image} alt=""/>
            </div>
            <div className="label">
                <span>{label}</span>
            </div>
        </div>
    );
};

const Catalouge = (props) => {
    const catalougeData = props.data || {},
        productData = catalougeData.products || {},
        followers = catalougeData.followers || {},
        productIcon = productData.icon || "",
        productCount = productData.count || "",
        productLabel = productData.label || "",
        followersIcon = followers.icon || "",
        followersCount = followers.count || "",
        followersLabel = followers.label || "";
    return(
        <div className="catalouge">
            <div className="catalouge-item border-right">
                <div className="icon">
                    <i class={"fa "+productIcon} aria-hidden="true"></i>                    
                </div>
                <div className="text-info">
                    <span>{productCount}</span>
                    <span className="label">{productLabel}</span>
                </div>
            </div>
            <div className="catalouge-item ">
                <div className="icon">
                    <i class={"fa "+followersIcon} aria-hidden="true"></i>                    
                </div>
                <div className="text-info">
                    <span>{followersCount}</span>
                    <span className="label">{followersLabel}</span>
                </div>
            </div>
        </div>
    );
};

//reputation component
const Reputation = (props) => {
    const data = props.data || {},
        icon = data.icon || "",
        label = data.label || "",
        title = data.title || "",
        progress = data.progress || "";
    return(
        <React.Fragment> 
            <div className="title"><span>{title}</span></div>         
            <div className="reputation">
                <div className="icon">
                    <i class={"fa "+icon} aria-hidden="true"></i>                
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

//orders component
const Orders = (props) => {
    const data= props.data || {},
        label = data.label || "",
        menu = data.menu || "",
        orders = data.orders || [];
    return(
        <React.Fragment>
            <div className="title"><span>{label}</span></div>
            <div className="order-container">
                {
                    orders.map((order, i) => {
                        const data = order || {},
                            icon = data.icon || "",
                            label = data.label || "",
                            time = data.time || "",
                            cost = data.cost || "";
                        return(
                            <div className="order">
                                <div className="order-info">
                                    <div className="icon">
                                        <i class={"fa "+icon} aria-hidden="true"></i>
                                    </div>
                                    <div className="text-info">
                                        <span>{label}</span>
                                        <span className="label">{time}</span>
                                    </div>
                                </div>
                                <div className="cost">
                                    <span>{cost}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
};

const Profile = (props) => {
    const data = overviewData.data || {},
        groups = data.groups || [];
    return(
        <div>
            {
                groups.map((group, i) => {
                    const type = group.type || "";
                    // console.log(group)
                    return(
                        <React.Fragment>
                            {(type === "userData") && <UserData data={group}/>}
                            {(type === "catalouge") && <Catalouge data={group}/>}
                            {(type === "Reputation") && <Reputation data={group}/>}
                            {(type === "orders") && <Orders data={group}/>}
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
};

export default Profile;