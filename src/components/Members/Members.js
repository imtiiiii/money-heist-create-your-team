// this component will show all available members details
import React from 'react';
import Member from '../Member/Member';
import "./Members.css"
const Members = (props) => {
    const check = props.membersList;
    console.log("check-> ", check);
    return (
        <div>
            {
                check.map(member => <Member details={member} key={member.id} ></Member>)
            }
        </div >
    );
};

export default Members;