import React from 'react';
import './BlogData.css'
const BlogData = (props) => {
    const {name,image,date,title}=props.blog
    return (
        <div className="col-md-3 blog-container" style={{margin:'50px'}}>
            <div className="blog-container">
            <div style={{display:'flex'}} className="d-flex align-items-center">
                <div>
                    <img className="mr-5" src={image} alt=""/>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div>
                <h4 className="mt-3">{title}</h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore exercitationem ab vitae modi nemo, at optio laboriosam sequi ex.</p>
            </div>
            </div>
            
        </div>
    );
};

export default BlogData;