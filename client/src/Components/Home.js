import React from 'react'
import line from '../pic/line.png'
import mylaptop from '../pic/mylaptop.png'
import mymag from '../pic/mymag.png'


export default function Home() {
    return (
                <div className="container" style={{}}>
                 <div className="row">
                 <div className="col-11" style={{backgroundColor: "#E8EAEC"}}>
                    <img src={line} alt="line"></img>
                    <div className="what">What do you want to do today?</div>
                    <div className="card-deck justify-content-center ">
                      <div className="col-5 card">
                        <img src={mylaptop} alt="create magazin" style={{}}></img>
                        <div style={{textAlign:'center'}}>Create Post</div>
                      </div>
                      <div className="col-5 card">
                        <img src={mymag} alt="my magazin" style={{}}></img>
                        <div style={{textAlign:'center'}}>My Magazin</div>
                      </div>
                    </div>
                 </div>
                 </div>
                </div>
        
    )
}
