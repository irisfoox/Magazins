import React, { useRef, useState, useEffect } from 'react';
//import {connect} from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
//import Modal from 'react-awesome-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../Style.css';

export default function NewMag() {
    return (
        <div className="container-fluid">
            <div className="col-10">
                <div>
                    <div class="d-flex ml-4 justify-content-between">
                        <Link to='/Home'>&lt;Back Home</Link>
                        <Link to='/Set'>Open Magazin &gt;</Link>
                    </div>
                    <h5 style={{ "textAlign": "center", "marginTop": "15%" }}>Create new magazin</h5>
                    <br></br>
                    <input type="text" id="magname" placeholder="Write magazin's name"></input>
                    <p>Choose category: </p>
                    <div id="categories">
                        <label for="colinary"><input type="checkbox" id="colinary" />Colinary</label>
                        <label for="clothing"> <input type="checkbox" id="clothing" />Clothing </label>
                        <label for="homedesign"><input type="checkbox" id="homedesign" />Homedesign </label>
                        <label for="other"><input type="text" id="other" placeholder="Other category" /></label><button class="btn-primary">Add new category</button>
                        <br></br><br></br>
                        <button class="btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
