import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./addReminder";
export function Reminder() {
    
    const dispatch = useDispatch();
   
    return (
        <div className="col-md-6">
            <div className="d-flex flex-row gap-4">
                <input 
                className="form-control" 
                type={"text"} 
                id="reminderInput" 
                />
                <button  
                className="btn btn-primary"
                style={{width: "120px"}}
                onClick={() => dispatch(add())}
                >Ekle
                </button>
            </div>
            
        </div>
    )
}