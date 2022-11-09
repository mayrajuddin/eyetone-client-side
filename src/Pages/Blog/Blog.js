import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-9'>
            <h3 className='text-4xl pb-6 uppercase text-center font-bold'>blog </h3>
            <div tabIndex={0} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white" >
                    1. Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3 '>tabIndex={0} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci, optio saepe temporibus impedit minus? Pariatur est molestiae similique? Expedita, unde. Nemo commodi et cum ipsum placeat officiis quidem sit.</p>
                </div>
            </div>
            <div tabIndex={1} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>tabIndex={1} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci, optio saepe temporibus impedit minus? Pariatur est molestiae similique? Expedita, unde. Nemo commodi et cum ipsum placeat officiis quidem sit.</p>
                </div>
            </div>
            <div tabIndex={2} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>tabIndex={2} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci, optio saepe temporibus impedit minus? Pariatur est molestiae similique? Expedita, unde. Nemo commodi et cum ipsum placeat officiis quidem sit.</p>
                </div>
            </div>
            <div tabIndex={3} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>tabIndex={3} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci, optio saepe temporibus impedit minus? Pariatur est molestiae similique? Expedita, unde. Nemo commodi et cum ipsum placeat officiis quidem sit.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;