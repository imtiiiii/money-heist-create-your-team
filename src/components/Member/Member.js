// this component will contain a single member details and return it to Members component where all team members data will be shown
import React, { useState } from 'react';
import "./Member.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCartArrowDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
const Member = (props) => {
    const element = <FontAwesomeIcon icon={faAddressCard} />
    const memberDetails = props.details;

    function Toggle(value) {
        const [disable, setDisable] = useState(false);
        setDisable(props.value);
        return <button disabled={disable} >Select</button>
    }

    const { name, src, role, salary, nationality, born } = memberDetails;
    return (
        <div className=" col col-4 member-details">
            <div className="bg-white border border-3 border-danger member-card  px-4 d-flex justify-content-center flex-column align-items-center rounded-3">
                <div className="member-img   d-flex justify-content-center">
                    <img src={src} alt="" className="" />
                </div>
                <div className="mt-2">
                    <h5 className="details-hover py-3 fw-bolder">Name: {name}</h5>
                    <hr />
                    <p className="details-hover py-3">Born: {born}</p>
                    <hr />
                    <p className="details-hover py-3">Role: {role}</p>
                    <hr />
                    <p className="details-hover py-3">Nationality: {nationality}</p>
                    <hr />
                    <p className="details-hover py-3">Salary: ${salary}</p>
                    <hr />
                </div>
                <button type="button" className="btn btn-outline-danger" onClick={() => { props.selectBtn({ memberDetails }) }}>{element} Select</button>
            </div>
        </div>
    );
};

export default Member;