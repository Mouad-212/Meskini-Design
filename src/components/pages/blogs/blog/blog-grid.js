import React from 'react';
import BlogItem from './blog-item';
import blogData from '../../../data/blog-data';

const BlogGridMain = () => {

    return (
        <>
	        <div className="two__columns section-padding-three">
                <div className="container">
                    <div className="row">
                        <BlogItem currentBlogItems={blogData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogGridMain;