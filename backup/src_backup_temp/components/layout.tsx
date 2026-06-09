import PageSize from "@/utility/page-size";
import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header"

// 레이아웃 컴포넌트

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }:LayoutProps) => {
    const pageSize =PageSize()

    return(
        <div className={`w-full h-full bg-neutral-50`}>
            <Head>
                {/* 웹 페이지 타이틀 */}
                <title>JinSoo&apos;s Portfolio</title>
                {/* 웹 페이지 아이콘 */}
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <Header/>
            
            {/* 페이지 사이즈에 따라 레이아웃 크기 조절 */}
            <div className={`bg-neutral-50 mt-10 mx-10
                    ${pageSize >= 500 && 'mx-28'}
                `}>
                {children}
            </div>
            
            <Footer/>
        </div>
    )
    
}

export default Layout