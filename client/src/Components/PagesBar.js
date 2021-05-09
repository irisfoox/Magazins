import {React,useState} from 'react'

export default function PagesBar(){
const [currentPage, setCurrentPage] = useState(0);
const count=3;   //total no. of pages

function showPage(index){ 

   if(index===0){
       return <History></History>  //name example of page to go to
      }else if(index===1){
       return <Reasons></Reasons>
      }else if(index===2){
       return <CurrentState></CurrentState>
    }
}

return (
   <div>
       <grid>
       <container width="100%">
           <button disabled={currentPage===0}
            onClick={(e)=>setCurrentPage(v=>v-1)}
            >&lt; Previous page</button>
           <button disabled={currentPage>=count-1}
            onClick={(e)=>setCurrentPage(v=>v+1)}
            >Next page &gt;</button>

            {showPage(currentPage)}     
       </container>
       </grid>
   </div>
);
}