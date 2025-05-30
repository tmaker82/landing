import React from "react";
import {Button} from "primereact/button";
import Link from "next/link";

const Footer = () => {

    return (
        <>
            <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div className="grid justify-content-between">
                    <div className="col-12 md:col-2" style={{marginTop: '-1.5rem'}}>
                        <Link href="/"
                              className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            {/*<img src={`/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="footer sections" width="50" height="50" className="mr-2" />*/}
                            <span className="font-medium text-3xl text-900">TMAKER</span>
                        </Link>
                    </div>

                    <div className="col-12 md:col-10 lg:col-7">
                        <div className="grid text-center md:text-left">
                            <div className="col-12 md:col-3">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Компания</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">О нас</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Новости</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Investor
                                    Relations</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Media Kit</a>
                            </div>

                            <div className="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get
                                    Started</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                            </div>

                            <div className="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                                    Events
                                    <img src="/demo/images/landing/new-badge.svg" className="ml-2" alt="badge"/>
                                </a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div className="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand
                                    Policy</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy
                                    Policy</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Terms of
                                    Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer;
