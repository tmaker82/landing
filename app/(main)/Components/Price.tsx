import React from "react";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";

const Price = () => {

    return (
        <>
            <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
                <div className="text-center">
                    <h2 className="text-900 font-normal mb-2">Наши цены</h2>
                    <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                </div>

                <div className="grid justify-content-between mt-8 md:mt-0">
                    <div className="col-12 lg:col-4 p-0 md:p-3">
                        <div
                            className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                            <h3 className="text-900 text-center my-5">Free</h3>
                            <img src="/demo/images/landing/free.svg" className="w-10 h-10 mx-auto" alt="free"/>
                            <div className="my-5 text-center">
                                <span className="text-5xl font-bold mr-2 text-900">$0</span>
                                <span className="text-600">per month</span>
                                <Button label="Get Started" rounded
                                        className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider className="w-full bg-surface-200"></Divider>
                            <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div
                            className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                            <h3 className="text-900 text-center my-5">Startup</h3>
                            <img src="/demo/images/landing/startup.svg" className="w-10 h-10 mx-auto"
                                 alt="startup"/>
                            <div className="my-5 text-center">
                                <span className="text-5xl font-bold mr-2 text-900">$1</span>
                                <span className="text-600">per month</span>
                                <Button label="Try Free" rounded
                                        className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider className="w-full bg-surface-200"></Divider>
                            <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div
                            className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                            <h3 className="text-900 text-center my-5">Enterprise</h3>
                            <img src="/demo/images/landing/enterprise.svg" className="w-10 h-10 mx-auto"
                                 alt="enterprise"/>
                            <div className="my-5 text-center">
                                <span className="text-5xl font-bold mr-2 text-900">$999</span>
                                <span className="text-600">per month</span>
                                <Button label="Get a Quote" rounded
                                        className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider className="w-full bg-surface-200"></Divider>
                            <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li className="py-2">
                                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span className="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Price;
