import React from 'react';
import '../scss/menu.scss';

const data = require('../demoData/menu.json');

const MenuOptions = (props) => {
    const data = props.data || {},
        title = data.title,
        options = data.options || [];
        // console.log("menu option props", data)
    return(
        <div className="menu-options">
            <span>{title}</span>
            <div className="options">
                {
                    options.map((option, i) => {
                        const optionData = option || {},
                            label = optionData.label || "",
                            icon = optionData.icon || "";
                        
                        return(
                            <div className="menu-item">
                                <i class={"icon fa "+icon} aria-hidden="true"></i>
                                <span className="label">{label}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

const UserData = (props) => {
    const data = props.data || {},
        icon = data.icon || "",
        label = data.label || "";
    return(
        <div className="user-data">
            <img src={icon} alt=""/>
            <span>{label}</span>
        </div>
    );
};

const Copyright = (props) => {
    const data = props.data || {},
        year = data.year || "",
        label = data.label || "";
    return(
        <div className="copyright">
            <span className="year">&#169;{year}</span>
            <span className="label">{label}</span>
            <span className="label">{label}</span>
        </div>
    );
};

const Menu = (props) => {
    const mData = data.data || {},
        groups = mData.groups || [];
        console.log("hello");

    return(
        <div>
            {
                groups.map((group,i) => {
                    const type = group.type || "";
                    console.log("group type", type);

                    
                    return(
                        <React.Fragment>
                            {(type === "UserData") && <UserData data={group}/>}
                            {(type === "MenuOptions") && <MenuOptions data={group}/>}
                            {(type === "Copyright") && <Copyright data={group}/>}
                        </React.Fragment>
                    );
                })
            }
        </div>
    );

};

export default Menu;