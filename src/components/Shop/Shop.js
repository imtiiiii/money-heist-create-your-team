// this component will hold both team member and cart details
import React, { Component, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Members from '../Members/Members';
import "./Shop.css"
const Shop = () => {
    // as Shop is parent of both team and cart container , the data we need from json file will be called to this parent section so that both team and cart child can get the data from their parent

    //USESTATE AND USEEFFECT MUST BE USED TO GET AND SHOW DATA 
    //HERE MEMBERS MEANS TEAM MEAMBERS. USING USE STATE FOR TEAM MEMBERS BEACUSE WE WILL SHOW THE MEMBERS DATA ,SO THE STATE OF OUR PAGE CHANGEES
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])

    const [newSelectedMember, setNewSelectedMember] = useState([]);
    // this function (down) will collect the data of the team member which will be selected by user
    const handleSelect = teamMember => {
        //first storing the data in our variable
        teamMember = teamMember.memberDetails;
        //console.log(teamMember);
        //coppying previously clicked member and also adding newly selected member
        const clickedMember = [...newSelectedMember, teamMember];
        //now clikedMember(up) will contain the data of all the selected member till now
        // console.log(clickedMember);
        return setNewSelectedMember(clickedMember);
    }
    //console.log(newSelectedMember);
    return (

        <section className="container-fluid row mt-5 ">
            {/* as this container/section (up) will contain two section side by side we will use grid display to divide them their needed space */}
            {/* this div (down) will contain all the team member details */}
            <div className="team-container col col-8">
                <Members membersList={members} selectBtn={handleSelect}></Members>
            </div>
            {/* this div (down) will contain all the cart details */}
            <div className="cart-container col-4 ">
                <Cart selectedMember={newSelectedMember}></Cart>
            </div>

        </section>
    );
};

export default Shop;