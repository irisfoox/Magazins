import React from 'react'
import UpperMenu from './UpperMenu'
import './App.css';

export default function Home() {
    return (
        <div>
            <grid>
                <div className="container" style={{width:"100%"}}>
                 <UpperMenu/>
                 <div className="col-1"></div>
                 <div className="col-11" style={{backgroundColor: "#E8EAEC"}}>
                  <div >
                    <img className="line" src="line" alt="line"></img>
                    <div className="what">What do you want to do today?</div>
                    <div className="col-5 card">
                        <img src="mylaptop" alt="create post" style={{top:'3%' ,width:'100%',height:'95%'}}></img>
                        <div style={{textAlign:'center'}}>Create Post</div>
                    </div>
                    <div className="col-6 card">
                        <img src="mymag" alt="my magazin" style={{top:'3%' ,width:'100%',height:'95%'}}></img>
                        <div style={{textAlign:'center'}}>My Magazin</div>
                    </div>
                  </div>
                 </div>
                </div>
            </grid>
        </div>
    )
}
