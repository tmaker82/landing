import React from "react";
import {Button} from "primereact/button";
import {Accordion, AccordionTab} from "primereact/accordion";

const Advantage = () => {

    return (
        <>
            <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div className="grid justify-content-center">
                    <div className="col-12 text-center mt-8 mb-4">
                        <h2 className="text-900 font-normal mb-2">Наши преимущества</h2>
                        <span className="text-600 text-2xl">Placerat in egestas erat...</span>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Easy to Use</h5>
                                <span className="text-600">Posuere morbi leo urna molestie.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Fresh Design</h5>
                                <span className="text-600">Semper risus in hendrerit.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-indigo-200"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Well Documented</h5>
                                <span className="text-600">Non arcu risus quis varius quam quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Responsive Layout</h5>
                                <span className="text-600">Nulla malesuada pellentesque elit.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-orange-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Clean Code</h5>
                                <span className="text-600">Condimentum lacinia quis vel eros.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-pink-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Dark Mode</h5>
                                <span className="text-600">Convallis tellus id interdum velit laoreet.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-teal-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Ready to Use</h5>
                                <span className="text-600">Mauris sit amet massa vitae.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-blue-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Modern Practices</h5>
                                <span className="text-600">Elementum nibh tellus molestie nunc non.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                        <div
                            style={{
                                height: '160px',
                                padding: '2px',
                                borderRadius: '10px',
                                background: 'linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))'
                            }}
                        >
                            <div className="p-3 surface-card h-full" style={{borderRadius: '8px'}}>
                                <div
                                    className="flex align-items-center justify-content-center bg-purple-200 mb-3"
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                                </div>
                                <h5 className="mb-2 text-900">Privacy</h5>
                                <span className="text-600">Neque egestas congue quisque.</span>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>

    )
}

export default Advantage;
