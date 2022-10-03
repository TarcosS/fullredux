import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./addReminder";
export function Reminder() {
    
    const dispatch = useDispatch();
    const formStyle = {
        backgroundColor: "#f5eee4",
        boxShadow: "4px 10px 15px #16161650",
        borderRadius: "8px",
    }
    let colStyle = {}
    setInterval(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : 0;
        if(width > 768) {
            return colStyle = {
                padding:"0 80px",
            }
        } else {
            return colStyle = {
                padding:"0 0px",
            }
        }
    },1000)
    
    return (
        <div className="col-md-6 pb-5"
         style={colStyle}
         >
            <div className="p-3" style={formStyle}>
                <div className=" mb-3">
                    <label htmlFor="reminderInput" className="form-label">Hatırlatıcı Gir</label>
                    <input 
                    className="form-control" 
                    type={"text"} 
                    id="reminderInput" 
                    />
                </div>
                <div className=" mb-3">
                    <label htmlFor="reminderInput" className="form-label">Tarih Seç</label>
                    <input 
                    className="form-control" 
                    type={"date"} 
                    id="reminderDate" 
                    />
                </div>
                <div className="d-flex justify-content-end flex-row gap-4">
                    <button  
                    className="btn btn-primary"
                    style={{width: "120px"}}
                    onClick={() => dispatch(add())}
                    >Ekle
                    </button>
                </div>
            </div>
        </div>
    )
}