// this component will contain a single member details and return it to Members component where all team members data will be shown
import React from 'react';
import "./Member.css"
const Member = (props) => {
    const memberDetails = props.details;
    // console.log(memberDetails);
    const { name, src, role, salary, nationality, born } = memberDetails;
    return (
        <div className="p-5 col col-4">
            <div className="card member-card rounded-3 " style={{ width: "18rem" }}>
                <img src={src} className="card-img-top member-photo" alt="..."></img>
                <div className="card-body bg-danger">
                    <h5 className="card-title ">Name:{name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-danger">Born:{born}</li>
                    <li className="list-group-item bg-danger">Role:{role}</li>
                    <li className="list-group-item bg-danger">Nationality:{nationality}</li>
                    <li className="list-group-item bg-danger">Salary: ${salary}</li>
                    <button type="button" class="btn btn-outline-danger m-3">Add to cart</button>
                </ul>
                <div className="card-body">
                    {/* <a href="#" className="card-link">Card link</a> */}
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    );
};

export default Member;