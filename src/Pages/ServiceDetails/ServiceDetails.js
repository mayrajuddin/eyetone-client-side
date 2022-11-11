import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import Page from '../../components/Page';
import AddComments from '../AddComments/AddComments';
import Comments from '../Comments/Comments';

const ServiceDetails = () => {
    const details = useLoaderData()
    const { user } = useContext(authContext)

    return (
        <Page title="Service Details">
            <div className='my-9'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-12 gap-4">
                        <div className="md:col-span-8">
                            <img src={details.img} alt="" className='h-56 w-full' />
                            <h2 className="text-2xl font-bold py-3 capitalize">{details.serviceName}</h2>
                            <p className='capitalize text-lg font-semibold py-2'>{details.title}</p>
                            <h3 className='font-semibold text-lg pb-2'>Price : {details.price} TK</h3>
                            <h3 className='font-semibold text-lg pb-2'>Ratings : {details.rating} </h3>
                            <p> {details.description} </p>
                        </div>
                        <div className="md:col-span-4">
                            <div className="tealish-blue-bg text-white p-5 text-center">
                                <p className='capitalize text-2xl font-bold'>consultation on the {details.serviceName}</p>
                                <Link to='#' className='btn bg-blue-700 border-0 hover:bg-blue-800 px-7 mt-5'>Book Consultation</Link>
                            </div>
                        </div>
                    </div>
                    <div className='py-9 text-center'>
                        <h2 className="text-3xl font-bold capitalize pb-3">peoples comments</h2>
                        <Comments />
                    </div>
                    <div>
                        {user?.email ? <AddComments serviceName={details.serviceName} /> :
                            <>
                                <div className='text-2xl text-center font-semibold capitalize'> login to add review <Link to='/login' className=' tealish-blue-font font-bold '>login</Link></div>
                                <div className='text-center'></div>
                            </>
                        }
                    </div>
                </div>
            </div >
        </Page>
    );
};

export default ServiceDetails;