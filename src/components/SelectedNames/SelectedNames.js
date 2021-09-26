//this component will contain the details of members that are added by the user by select button
import React from 'react';
import "./SelectedNames.css"

const SelectedNames = (props) => {
    const names = props.names;


    return (
        <div className="d-flex my-5 ">
            <div className=" w-75 d-flex align-items-center justify-content-center ">
                <h4>{names.name}</h4>
            </div>
            <div className="w-50">
                <img id="selected-img" src={names.src} alt="" />
            </div>
        </div>
    );
};

export default SelectedNames;