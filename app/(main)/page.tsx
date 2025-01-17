/* eslint-disable @next/next/no-img-element */
'use client';
import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Menu} from 'primereact/menu';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ProductService} from '../../demo/service/ProductService';
import {LayoutContext} from '../../layout/context/layoutcontext';
import Link from 'next/link';
import {Demo, NodeRef} from '@/types';
import {ChartData, ChartOptions} from 'chart.js';
import {StyleClass} from "primereact/styleclass";
import {classNames} from "primereact/utils";
import {Ripple} from "primereact/ripple";
import {Divider} from "primereact/divider";
import {Accordion, AccordionTab} from 'primereact/accordion';
import Hero from "@/app/(main)/Components/Hero";
import Advantage from "@/app/(main)/Components/Advantage";
import Faq from "@/app/(main)/Components/Faq";
import Banner from "@/app/(main)/Components/Banner";
import Price from "@/app/(main)/Components/Price";
import Footer from "@/app/(main)/Components/Footer";
import Slogan from "@/app/(main)/Components/Slogan1";
import Header from "@/app/(main)/Components/Header";


const Landing = () => {
    const [isHidden, setIsHidden] = useState(false);
    const {layoutConfig} = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    useEffect(() => {

    }, []);

    useEffect(() => {
    }, []);


    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                {/*<Header></Header>*/}

                <Hero></Hero>
                <Advantage></Advantage>
                <Faq></Faq>
                <Banner></Banner>
                <Price></Price>
                <Slogan></Slogan>


                <Footer></Footer>
            </div>
        </div>
    );
};

export default Landing;
