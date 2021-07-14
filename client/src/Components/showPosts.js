import React from 'react'
import { useState } from 'react'
// import { useParams } from 'react-router-dom';
import PagesBar from './PagesBar';

const posts = [
    {
        _id: "121",
        title: "cooking chicken",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking pizza",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking rice",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking fish",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking beef",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking brokoly",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking pompkin",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
    {
        _id: "121",
        title: "cooking chunt",
        subheader: "how to cook a tasty chicken?",
        longtext: "blah blah",
        pic: "",
        category: "colinary",
        date: Date(),
        magazin_id: "1234567"
    },
]

export default function ShowPosts(props) {
const [currentPosts, setCurrentPosts] = useState([]);
// const {page} = useParams();
    const setPostArr = (index)=>{
        const currentIndex = index-1;
        const firstCard = currentIndex *3
        const arr = posts.slice(firstCard,(firstCard+3))
        setCurrentPosts(arr)
    }
    return (
        <div className="container">
        <div className = "card-group justify-content-center">
            {currentPosts.map(post => (
                <div className="col col-4">
                <div key={post} className="card" style={{ "width": "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <div>
                            <h3>{post.subheader}</h3>
                            <p>{post.longtext}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">post Date: {post.date}</small>
                    </div>

                </div>
                </div>
            ))}
            
        </div>
        <PagesBar setIndex={setPostArr}></PagesBar>
        </div>
        
    )
}
