import React from 'react'
import { useHistory } from 'react-router-dom'
import mylaptop from '../pic/mylaptop.png'
import mymag from '../pic/mymag.png'


export default function Home() {
  let history=useHistory();
    return (
                <div className="container justify-content" style={{}}>
                 <div className="row">
                 <div className="col-11" style={{backgroundColor: "#E8EAEC"}}>
                    <div className="line"></div>
                    <div className="what">What do you want to do today?</div>
                    <div className="card-deck justify-content-center ">
                      <div className="col-5 card" onClick={(e)=>{history.push('/newpost')}}>
                        <img src={mylaptop} alt="create magazin" style={{}}></img>
                        <div style={{textAlign:'center'}}>Create Post</div>
                      </div>
                      <div className="col-5 card" onClick={()=>{history.push('/newmag')}}>
                        <img src={mymag} alt="my magazin" style={{}}></img>
                        <div style={{textAlign:'center'}}>My Magazin</div>
                      </div>
                    </div>
                 </div>
                 </div>
                </div>
        
    )
}
