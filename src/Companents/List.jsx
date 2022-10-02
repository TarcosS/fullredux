import React from "react";
import { useSelector } from "react-redux";



export default function List() {
    const reminders = useSelector((state) => state.reminderAdder.value); //Store'daki counterdan çekme
    const listItems = reminders.map((reminder) => 
        <li key={Math.random(5)} className="list-group-item">{reminder}</li>
    )
    return(
        <div className="col-md-6">
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )

}