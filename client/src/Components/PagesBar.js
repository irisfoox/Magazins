import { React, useState, useEffect } from 'react'
//import Home from './Home';
//import NewPost from './NewPost';
//import {BrowserRouter as Router,
//    Switch,Route} from 'react-router-dom';

export default function PagesBar(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const {setIndex} = props
    //const count = 3;   //total no. of pages
    //const refL=React.createRef();
    //in each obj ref={refL}
    useEffect(() => {
        console.log(currentPage);
        setIndex(currentPage)
    }, [currentPage])

    const showPage=(index)=>{
        //let list = document.getElementsByTagName("H1")[0].setAttribute('className', "active");
        if (index === 0) {
            //refL.current.addClassName("active");
            //list[index].className.addInnerHTML = "active";
             //return <Home/>  //name example of page to go to
        } else if (index === 1) {
            //list[index].className.addInnerHTML = "active";
             //return <NewPost/>
        } else if (index === 2) {
            //list[index].className.addInnerHTML = "active";
            // return <CurrentState></CurrentState>
        }
    }
  
    return (
        <div>
                <div className="container">
                    <ul className="pagination justify-content-center" style={{ margin: "5 0" }}>
                        <li className="page-item page-link"disabled={currentPage === 0}
                            onClick={(e) => setCurrentPage(v => v - 1)}
                        >&lt; Previous</li>
                        <li className="page-item page-link"value={1} onClick={(e)=>setCurrentPage (e.target.value)} >1</li>
                        <li className="page-item page-link active"value={2} onClick={(e)=>setCurrentPage(e.target.value)}>2</li>
                        <li className="page-item page-link" value={3} onClick={(e)=>setCurrentPage(e.target.value)} >3</li>
                        <li><button className={`${currentPage >= 3?"disabledLink":""} page-item page-link `} disabled={currentPage >= 3}
                            onClick={(e) => setCurrentPage(v => v + 1)}>Next&gt;</button>
                            </li>
                        {/* <li><button className=" page-item page-link "disabled={currentPage >= 3}
                            onClick={(e) => setCurrentPage(v => v + 1)}>Next&gt;</button>
                            </li> */}
                    </ul>
                     {showPage(currentPage)}
                </div>
        </div>
    );
}