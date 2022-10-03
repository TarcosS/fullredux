import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/reminder/addReminder";

const listStyle = {
    backgroundColor: "#783e3e",
    boxShadow: "4px 10px 15px #16161650",
    borderRadius: "8px",
    minHeight:"300px"
}

export default function List() {
    const reminders = useSelector((state) => state.reminderAdder.value); //Store'daki counterdan çekme
    const dispatch = useDispatch()
    const listItems = reminders.map((reminder) => 
        <li 
        key={reminder.id} 
        className="list-group-item d-flex align-items-center justify-content-between"
        >
            <span>
                {reminder.date} tarihinde {reminder.text}
            </span>
            <button listid={reminder.id} onClick={() => dispatch(remove(reminder.id))} style={{width: "80px",border:"none", borderRadius: "5px", color:"white", background:"#ff3e30"}}>Sil</button>
        </li>
    )
    return(
        <div className="col-md-6 py-3" style={listStyle}>
            <h4 style={{color:"white"}}>
                Hatırlatıcı
            </h4>
            <hr style={{borderColor:"white", borderWidth:"2px"}}/>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )

}