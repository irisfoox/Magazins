import React, { useRef, useState, useEffect } from 'react';
//import {connect} from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
//import Modal from 'react-awesome-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Style from '../Style.css';

export default function createPost() {
      return (
            <>
                  <div className="container-fluid">
                        <div className="col-10">
                              <div>
                                    <div class="d-flex justify-content-between">
                                          <Link to='/Home'>&lt;Back Home</Link>
                                          <Link to='/Set'>To The Magazin &gt;</Link>
                                    </div>
                              </div>
                              <div className="body">
                                    <div className="container-fluid">
                                              <div className="white m-10" Style="padding-left: 5%;">
                                                <div className="row">
                                                <h2><span class="badge badge-primary">Category</span></h2>
                                                      <div className="col-8 p-0 m-2">
                                                            <div> <p className="text-justify label1"><b>Type your post title</b></p></div>
                                                            <input type="text" name="title" placeholder="Title"></input>
                                                      </div>
                                                </div>
                                                <div className="row">
                                                      <div className="col-8 p-0 ">
                                                            <div> <p className="text-justify"><b>Write stories about your business and use them to engage your customers. Your Stories Blog can be shared on your website.</b></ p></div>
                                                      </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                      <div className="col-8 p-0 ">
                                                            <div> <p className="text-justify">Write stories about your business and use them to engage your customers. Your Stories Blog can be shared on your website.Write stories about your business and use them to engage your customers. Your Stories Blog can be shared on your website.Write stories about your business and use them to engage your customers. Your Stories Blog can be shared on your website.</ p>
                                                                  <p className="text-justify"><b>________</b></p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="row">
                                                      <div className="col-2 p-0 ">
                                                            <p className="text-justify">By Mattie Bryan</p>
                                                      </div></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}