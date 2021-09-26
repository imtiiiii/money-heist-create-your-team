// this component will show all available members details
import React from 'react';
import Member from '../Member/Member';
import "./Members.css"
const Members = (props) => {
    const member = props.membersList;
    return (
        <div className="row ">
            {
                member.map(member => <Member details={member} key={member.id} ></Member>)
            }
        </div >
    );
};

export default Members;