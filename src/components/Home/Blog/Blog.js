import React from 'react';
import doctor from '../../../images/wilson.png'
import BlogData from '../BlogData/BlogData';
const Blog = () => {
    const blogInfo=[
        {
            name:"Dr Cudi",
            image:doctor,
            date:(new Date()).toDateString(),
            title:'Check at least a doctor in a year for your teeth'
        },
        {
            name:"Dr Pedri",
            image:doctor,
            date:(new Date()).toDateString(),
            title:'Two time brush in a day can keep you healthy'
        },
        {
            name:"Dr Fati",
            image:doctor,
            date:(new Date()).toDateString(),
            title:'The tooth cancer is taking challenge'
        }
    ]
    return (
        <div>
            <div className="text-center">
                <h4 className="text-primary">OUR BLOG</h4>
                <h2 className="mt-5">From Our Blog News</h2>
            </div>
            <div className="row">
                {
                    blogInfo.map(blog=><BlogData blog={blog}></BlogData>)
                }
            </div>
            
        </div>
    );
};

export default Blog;