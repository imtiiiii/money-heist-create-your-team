/*
This component is for header area
*/
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css"
const Header = () => {
    const totalBudhet = 15000;
    return (
        <header className="container-fluid  text-center header py-3">
            <h2>Want to make your own <span className=""> Money Heist </span>team ? </h2>
            <h4 className="this-is-your-chance">This is your chance now !!!!</h4>
            <h4>Select now</h4>
            <h5> Total budghet: ${totalBudhet}</h5>

        </header>
    );
};

export default Header;