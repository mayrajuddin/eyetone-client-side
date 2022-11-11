import React from 'react';

const Page = ({ children, title }) => {
    document.title = title
    return (
        <>
            {children}
        </>
    );
};

export default Page;