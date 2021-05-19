import React from 'react'

export default function UpperMenu() {
    return (
        <div className="row" style={{width:"100%",height:"8%"}}>
            <div className="col-1">
                <img src="leader" alt="logo" height="38px"></img>
            </div>
            <div className="col-10"></div>
            <div className="col-1">
                <img src="person" alt="user" height="38px"></img>
                <img src="pin" alt="thumbtack" height="38px"></img>
                <img src="line" alt="settings" height="38px"></img>
            </div>
        </div>
    )
}
