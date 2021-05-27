import React, { useEffect, useState } from 'react';

const Blogs = () => {
    //
    const [blogs,setBlogs] = useState([]);

    useEffect(()=> {
        fetch('https://v1.nocodeapi.com/mahbubulalam/medium/ukPgzlsIReSCvtZE')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            console.log(data);
        })
    },[])
    return (
        <section className="container" id="blogs">
            <div className="section-title">
                <h2>Blogs</h2>
            </div>
            <div className="row text-center">
                
                    <div class="card-deck ">
                        {
                            blogs.map(blog => 
                                <div className="col-md-4 mt-3">
                                    <div class="card h-100 w-100 p-5 bg-dark">
                                        <div className="d-flex justify-content-center align-items-center h-100 w-100 ">
                                            <div class="card-title">
                                                <h5 class="card-title text-bold text-white">{blog.title} <br/>
                                                <small>by {blog.creator}</small>
                                                {blog.content}
                                                </h5> 
                                            </div>
                                        </div>
                                        <div className="card-body">
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