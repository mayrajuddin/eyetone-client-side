import React from 'react';

const Choosen = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h2 className="font-bold text-3xl py-3 text-blue-800 capitalize "> why peple choose <br /> <span className='tealish-blue-font'>eyetone</span></h2>
                <div className="grid md:grid-cols-3 gap-4 my-5">
                    <div className="border bg-sky-50 p-4">
                        <span className='tealish-blue-bg text-white rounded-full py-4 px-5 mb-2 inline-block'>01</span>
                        <h4 className="font-semibold text-blue-7 text-lg capitalize">medical experience</h4>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consectetur necessitatibus quod.</p>
                    </div>
                    <div className="border bg-sky-50 p-4">
                        <span className='tealish-blue-bg text-white rounded-full py-4 px-5 mb-2 inline-block'>02</span>
                        <h4 className="font-semibold text-blue-7 text-lg capitalize">patient care & support</h4>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consectetur necessitatibus quod.</p>
                    </div>
                    <div className="border bg-sky-50 p-4">
                        <span className='tealish-blue-bg text-white rounded-full py-4 px-5 mb-2 inline-block'>03</span>
                        <h4 className="font-semibold text-blue-7 text-lg capitalize">better vision</h4>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consectetur necessitatibus quod.</p>
                    </div>
                    <div className="border bg-sky-50 p-4">
                        <span className='tealish-blue-bg text-white rounded-full py-4 px-5 mb-2 inline-block'>04</span>
                        <h4 className="font-semibold text-blue-7 text-lg capitalize">affordability</h4>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consectetur necessitatibus quod.</p>
                    </div>
                    <div className="border tealish-blue-bg p-5">
                        <p className='text-4xl font-semibold text-white capitalize'>taking good care of your eyes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choosen;