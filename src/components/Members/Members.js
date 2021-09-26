// this component will show all available members details
import React from 'react';
import Member from '../Member/Member';
import "./Members.css"
const Members = (props) => {
    const SelectBtnFunction = props.selectBtn;


    const member = props.membersList;
    return (
        <div className="row g-5">
            {
                member.map(member => <Member details={member} key={member.id} selectBtn={SelectBtnFunction}></Member>)
            }
        </div >
    );
};

export default Members;