// this component is to show to cart details and do total 
import "./cart.css"
import React from 'react';
import SelectedNames from "../SelectedNames/SelectedNames";

const Cart = (props) => {
    const selected = props.selectedMember;
    console.log(selected);
    let totalCost = 0;
    for (const salary of selected) {
        totalCost += salary.salary;
    }
    console.log(totalCost);
    return (
        <div className="bg-light cart py-3 border border-danger rounded-3">
            <h4 className="text-center">Total team members: {selected.length}</h4>
            <h4 className="text-center">Total cost: ${totalCost}</h4>
            {
                selected.map(select => {
                    console.log(select.id);
                    return < SelectedNames names={select} key={select.id}></SelectedNames>

                })

            }

        </div >
    );
};

export default Cart;