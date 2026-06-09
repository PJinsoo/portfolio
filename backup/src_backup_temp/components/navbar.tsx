import { useState, useEffect } from "react";
import Link from 'next/link';
import { Popover } from '@headlessui/react'
import PageSize from "../utility/page-size";

// 메뉴 컴포넌트
// 현재 미사용으로 주석처리
// 사용 시 map 안에 key 넣어주기

const Navbar = () => {
    // 헤더 메뉴
    // const menus = [
    //     { title: 'About Me', href: '' },
    //     { title: '메뉴2', href: '' },
    //     { title: '메뉴3', href: '' },
    // ]

    // // 현재 브라우저의 Width 값을 가져올 메서드
    // const pageSize = PageSize()

    // // 모바일 메뉴 변수
    // const [mobileMenu, setMobileMenu] = useState(false)

    // // 모바일 메뉴 On/Off 트리거
    // const viewMobileMenu = () => {
    //     setMobileMenu(!mobileMenu)
    // }

    return ( false
        // <div>
        //     {/* 테스트용 현재 화면 크기 {pageSize} */}
        //     {pageSize > 640
        //         // 일반적인 웹 브라우저 화면에서의 메뉴
        //         ? (<div className="space-x-10">
        //             {/* 메뉴 수 만큼 메뉴 출력 */}
        //             {menus?.map((menu) => (
        //                 <Link href={menu.href}>
        //                     <span className="text-sm font-semibold text-orange-500 hover:border-b-2 border-orange-500">
        //                         {menu.title}
        //                     </span>
        //                 </Link>))}
        //             </div>)

        //         // 모바일 화면에서의 메뉴(햄버거 버튼)
        //         : (
        //             <nav>
        //                 <button onClick={viewMobileMenu} className={`${mobileMenu && 'bg-orange-400 text-white'} p-3 rounded-lg border hover:bg-orange-500 hover:text-white`}>
        //                     <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        //                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        //                     </svg>
        //                 </button>
        //                 <Popover className=''>
        //                     <Popover.Button className="absolute">
        //                         <div className={`${ mobileMenu ? '' : 'hidden'} 
        //                                 mt-2 px-10 py-5 grid shadow-lg border-2 border-gray-300 rounded-lg space-y-8 w-full bg-gray-50
        //                         `}>
        //                             {menus?.map((menu) => (
        //                                 <Link href={menu.href}>
        //                                     <span className="text-lg font-semibold text-orange-400 hover:border-b-2 border-orange-500">
        //                                         {menu.title}
        //                                     </span>
        //                                 </Link>
        //                             ))}
        //                         </div>
        //                     </Popover.Button>
        //                 </Popover>
        //             </nav>
        //         )
        //     }
        // </div>
    )

}

export default Navbar