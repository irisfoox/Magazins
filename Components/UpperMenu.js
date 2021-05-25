import React from 'react'
import '../App.css'
import leader from '../pic/leader.png'
import person from '../pic/person.png'
import pin from '../pic/pin.png'
//import line from '../pic/line.png'
import Home from './Home'
//<img src={line} alt="settings" height="2px" width="20px"></img>

export default function UpperMenu() {
    return (
        <div className="container">
        <div className="row d-flex" style={{width:"100%",height:"8%",background: "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
          backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 3px 6px #00000029",opacity: "1"
          }}>
            <div className="col-1">
                <img src={leader} alt="logo" height="20px"></img>
            </div>
            <div className="col-8"></div>
            <div className="col-2 pt-2 d-flex justify-content-right">
                <img src={person} alt="user" height="20px"></img>
                <img src={pin} alt="thumbtack" height="20px"></img>
                <button class="btn bars"><i class="fa fa-bars"></i></button>          
            </div>
        </div>
        <div className="row d-inline-flex" style={{width:"100%",height:"40%"}}>
                 <div className="side col-1"></div>
                 <div className="col-11" style={{backgroundColor: "#E8EAEC"}}>
                     <Home/>
                 </div>
        </div>
    </div>
    )
}
