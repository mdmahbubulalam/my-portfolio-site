import React, { useEffect, useState } from 'react';
import blogs from './Blogs.json'


const Blogs = () => {
    
    return (
        <section className="container" id="blogs">
            <div className="section-title">
                <h2>Blogs</h2>
            </div>
            <div className="row text-center">

                <div className="col-md-6"></div>
                
                    <div class="card-deck ">
                        {
                            blogs.map(blog => 
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3 text-white">
                                    <div class="card h-100 w-100 p-5 rounded" style={{backgroundColor : "#290048"}}>
                                        <div class="card-title">
                                            <h5 class="card-title text-bold text-white">{blog.title}</h5> 
                                            <p className='p-0 m-0'><small>by {blog.creator}</small></p>
                                        </div>   
                                        <div className='card-body'>
                                                <p className='p-0 m-0'>{blog.content}</p>
                                            </div>
                                        <div className="card-footer">
                                            <a href={blog.link} role="button" target='_blank' className="btn btn-outline-light btn-block">Read This Article</a>
                                        </div>
                                    </div>              
                                </div>
                            )
                        }
                    </div>
                
            </div>
            
        </section>
    );
};

export default Blogs;