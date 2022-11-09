import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData()
    return (
        <div>
            <div className="container mx-auto">
                <div className="md:flex-1 gap-x-4">
                    <div className="md:col-span-8">
                        <h2> {details.title} </h2>
                    </div>
                    <div className="md:col-span-4">
                        {details.serviceName}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;