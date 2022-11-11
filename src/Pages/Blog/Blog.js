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
                    <p className='text-neutral-800 pt-3 '>Structured Query language (SQL)is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.SQL programming can be effectively used to insert, search, update, delete database records.</p>
                    <p className='text-neutral-800 pt-3 '>NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps.</p>

                </div>
            </div>
            <div tabIndex={1} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p className='text-neutral-800 pt-3'>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                </div>
            </div>
            <div tabIndex={2} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                    <p className='text-neutral-800 pt-3'>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </p>
                </div>
            </div>
            <div tabIndex={3} className="w-3/4 mx-auto collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium tealish-blue-bg text-white">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p className='text-neutral-800 pt-3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;