import React from 'react';
import '../scss/overView.scss';

const overviewData = require('../demoData/overview.json');

const Search = () =>{
    return(
        <div className="search-form">
            <i class="icon fa fa-search" aria-hidden="true"></i>
            <input 
              placeholder = "search for products"
            />
        </div>
    );
};

//Analytics
const Analytics = (props) =>{
    const data = props.data || {},
        items = data.items || [],
        title = data.title || "";
    return(
        <React.Fragment>
            <div className="analytics">
                <span className="title">{title}</span>
                <div className="analytics-card">
                    {
                        items.map((item, i) => {
                            const data = item || {},
                                icon = data.icon || "",
                                iconColor = data.iconColor || "",
                                change = data.change || "",
                                changeValue = data.changeValue || "",
                                amount = data.amount || "",
                                label = data.label || "";

                            return(
                                <div className="card-item">
                                    <div className="product-info">
                                        <i class={"fa "+icon + " "+iconColor} aria-hidden="true"></i>
                                        <span className={change}>{changeValue}</span>                                        
                                    </div>
                                    <div className="amount">
                                        <span>{amount}</span>
                                    </div>
                                    <div className="label">
                                        <span>{label}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

//Chart
const Chart = (props) =>{
    const data = props.data,
        year = data.year || "",
        range = data.range || [],
        values = data.data || [];
    return(
        <div className="chart">
            <div className="chart-header">
                <div className="">
                    <span>Income</span>
                    <span>Expenses</span>
                </div>

                <button>{year}</button>
            </div>
            <div className="bar-container">
                <div className="range">
                    {
                        range.map(val =>{
                            return(
                                <div className="val">
                                    <span>{val}</span>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="bar-graph">
                    {
                        values.map((bar, i)=>{
                            const month = bar.month || "",
                                value = bar.value || "";

                            return(
                                <div>
                                    <span className="month">{month}</span>
                                    <div className={"bar "+"bh"+value}></div>
                                    
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};


//Products
const Product = (props) =>{
    const data = props.data || {},
        label = data.label || {},
        products = data.products || [];
    return(
        <div className="product-container">
            <span className="title">{label}</span>
            <div className="product-title">
                <span>Photos</span>
                <span >Name</span>
                <span>Date</span>
                <span>Category</span>
                <span>Brand</span>
                <span>Price</span>
                <span>Status</span>
            </div>
            <div>
                {
                    products.map((product, i) => {
                        const productData = product || {},
                            icon = productData.photos || "",
                            name_label = productData.name.label || "",
                            name_id = productData.name.id || "",
                            date = productData.date || "",
                            category = productData.category || "",
                            brand = productData.brand || "",
                            price = productData.price || "",
                            status_label = productData.status.label || "",
                            status_visitors = productData.status.visitors || "";

                        return(
                            <div className="product">
                                
                                <div className="product-list">
                                    <div className="icon">
                                        <i class={"fa "+icon} aria-hidden="true"></i>
                                    </div>
                                    <div className="name">
                                        <span>{name_label}</span>
                                        <span className="sub-text">{name_id}</span>
                                    </div>
                                    <div>
                                        <span>{date}</span>
                                    </div>
                                    <div>
                                        <span>{category}</span>
                                    </div>
                                    <div>
                                        <span>{brand}</span>
                                    </div>
                                    <div className="green">
                                        <span>{price}</span>
                                    </div>
                                    <div className="status">
                                        <span>{status_label}</span>
                                        <span className="sub-text">{status_visitors}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

const Overview = (props) => {
    const data = overviewData.data || {},
        groups = data.groups || [];
    return(
        <div>
            <Search />
            {
                groups.map((group, i) => {
                    const type = group.type || {};
                    return(
                        <React.Fragment>
                            {(type === "analytics") && <Analytics data={group}/>}
                            {(type === "chart") && <Chart data={group}/>}
                            {(type === "products") && <Product data={group}/>}
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
};

export default Overview;