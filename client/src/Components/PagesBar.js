import { React, useState } from 'react'
import Home from './Home';
import NewPost from './NewPost';
import {BrowserRouter as Router,
    Switch,Route} from 'react-router-dom';

export default function PagesBar() {
    const [currentPage, setCurrentPage] = useState(0);
    const count = 3;   //total no. of pages
    //const refL=React.createRef();
    //in each obj ref={refL}

    const showPage=(index)=>{
        //let list = document.getElementsByTagName("H1")[0].setAttribute('className', "active");
        if (index === 0) {
            //refL.current.addClassName("active");
            //list[index].className.addInnerHTML = "active";
             return <Home/>  //name example of page to go to
        } else if (index === 1) {
            //list[index].className.addInnerHTML = "active";
             return <NewPost/>
        } else if (index === 2) {
            //list[index].className.addInnerHTML = "active";
            // return <CurrentState></CurrentState>
        }
    }
  
    return (
        <div>
                <div className="container">
                    <Router>
                    <ul className="pagination justify-content-center" style={{ margin: "5 0" }}>
                        <li className="page-item page-link"disabled={currentPage === 0}
                            onClick={(e) => setCurrentPage(v => v - 1)}
                        >&lt; Previous</li>
                        <li className="page-item page-link" onClick={(e)=>setCurrentPage(v => v+1)} >1</li>
                        <li className="page-item page-link active" onClick={(e)=>setCurrentPage(v => v+1)}>2</li>
                        <li className="page-item page-link" onClick={(e)=>setCurrentPage(v => v+1)} >3</li>
                        <li className="page-item page-link"disabled={currentPage >= count - 1}
                            onClick={(e) => setCurrentPage(v => v + 1)}
                            >Next&gt;</li>
                    </ul>
                    </Router>
                 {showPage(currentPage)}

                </div>
        </div>
    );
}