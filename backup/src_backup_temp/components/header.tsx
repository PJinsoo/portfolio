import { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./navbar";

// 헤더 컴포넌트

const Header = () => {

    return (
        // px-40 py-6
        <div className="z-20 bg-stone-50 w-full flex justify-end rounded-b-xl shadow mx-auto
                        px-10 py-6 md:px-20">
            {/* <Navbar/> */}
            <span className="font-semibold text-2xl mt-2 md:mt-0 text-blue-500">JinSoo&apos;s Portfolio</span>
        </div>
    )
}

export default Header;