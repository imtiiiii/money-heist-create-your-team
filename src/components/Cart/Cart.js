// this component is to show to cart details and do total 
import "./cart.css"
import React from 'react';
import SelectedNames from "../SelectedNames/SelectedNames";

const Cart = (props) => {
    const selected = props.selectedMember;
    return (
        <div className="bg-light cart py-3">
            <h4 className="text-center">Total team members: {selected.length}</h4>
            {
                selected.map(select => < SelectedNames names={select}></SelectedNames>)

            }

        </div >
    );
};

export default Cart;