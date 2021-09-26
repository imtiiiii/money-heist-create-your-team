// this component will hold both team member and cart details
import React, { Component, useEffect, useState } from 'react';
import "./Shop.css"
const Shop = () => {
    // as Shop is parent of both team and cart container , the data we need from json file will be called to this parent section so that both team and cart child can get the data from their parent

    //USESTATE AND USEEFFECT MUST BE USED TO GET AND SHOW DATA 
    //HERE MEMBERS=TEAM MEAMBERS. USING USE STATE FOR TEAM MEMBERS BEACUSE WE WILL SHOW THE MEMBERS DATA SO THE STATE OF OUR PAGE CHANGEES
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])
    console.log(members);
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