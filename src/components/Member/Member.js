// this component will contain a single member details and return it to Members component where all team members data will be shown
import React from 'react';
import "./Member.css"
const Member = (props) => {
    const memberDetails = props.details;
    // console.log(memberDetails);
    const { name, src, role, salary, nationality, born } = memberDetails;
    return (
        <div className=" col col-4 member-details">
            <div className="bg-white border border-danger member-card  px-4 d-flex justify-content-center flex-column align-items-center rounded-3">
                <div className="member-img img-fluid  d-flex justify-content-center">
                    <img src={src} alt="" className="" />
                </div>
                <div className="pt-3">
                    <h5>Name:{name}</h5>
                    <hr />
                    <p>Born: {born}</p>
                    <hr />
                    <p>Role: {role}</p>
                    <hr />
                    <p>Nationality: {nationality}</p>
                    <hr />
                    <p>Salary: ${salary}</p>
                    <hr />
                </div>
                <button type="button" class="btn btn-outline-danger">Add to cart</button>
            </div>
        </div>
    );
};

export default Member;