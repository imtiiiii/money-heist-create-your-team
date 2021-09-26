// this component will hold both team member and cart details
import React, { Component } from 'react';
import "./Shop.css"
const Shop = () => {
    // as Shop is parent of both team and cart container , the data we need from json file will be called to this parent section so that both team and cart child can get the data from their parent
    return (

        <section className="container-fluid bg-ligt">
            {/* as this container/section (up) will contain two section side by side we will use grid display to divide them their needed space */}
            {/* this div (down) will contain all the team member details */}
            <div className="team-container">

            </div>
            {/* this div (down) will contain all the cart details */}
            <div className="cart-container">

            </div>

        </section>
    );
};

export default Shop;