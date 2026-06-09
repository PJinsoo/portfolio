import PageSize from "@/utility/page-size"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//당근마켓 이미지
import CarrotEnter from "../images/project-img/carrot/0-enter.png"
import CarrotHome from "../images/project-img/carrot/1-home.png"
import CarrotProduct from "../images/project-img/carrot/2-product.png"
import CarrotSale from "../images/project-img/carrot/3-sale.png"
// 디맥 이미지
import DjmaxMain from "../images/project-img/djmax/main.jpeg"
import DjmaxInsert from "../images/project-img/djmax/insert.jpeg"

// 프로젝트 소개는 계속 반복되는 코드기 때문에 컴포넌트로 분리

interface ProjectProps {
    no: number,         // 프로젝트 번호
    projectImg?: any,          // 프로젝트 이미지
    imgClick?: boolean,     // 이미지가 많을 경우 이미지들 배열로 담아서 선언   
    title: string,      // 프로젝트 제목
    date: string,       // 진행 날짜
    language?: string,  // 웹 개발물이 아닐 경우 사용
    DB?: string,        // DB 써야하면 ㄱㄱ
    front?: string,     // 프론트엔드
    back?: string,      // 백엔드
    github?: string,    // 깃허브 주소
    // 프로젝트 설명이 들어갈 TSX 데이터
    children: React.ReactNode;
}

const ProjectTemplate = ({
    no, projectImg, imgClick, title, date, language, DB, front, back, github, children
} : ProjectProps) => {
    const pageSize = PageSize()

    // 프로젝트 이미지 저장하기(스위퍼를 위해)
    const [img, setImg] = useState(projectImg)
    // 스위퍼
    const [swiper, setSwiper] = useState(1)

    // 클릭 시 다른 이미지로 전환
    const onClick = (e:any) => {
        // 클릭한 프로젝트의 넘버 가져오기
        const {id} = e.target
        // 프로젝트 당근마켓
        if(id == "3") {
            if(swiper == 1) {
                setSwiper(swiper+1)
                return setImg(CarrotHome)
            }
            if(swiper == 2) {
                setSwiper(swiper+1)
                return setImg(CarrotProduct)
            }
            if(swiper == 3) {
                setSwiper(swiper+1)
                return setImg(CarrotSale)
            }
            if(swiper == 4) {
                setSwiper(1)
                return setImg(CarrotEnter)
            }
        }
        //프로젝트 디맥
        if(id == "6") {
            if(swiper == 1) {
                setSwiper(swiper+1)
                return setImg(DjmaxMain)
            }
            if(swiper == 2) {
                setSwiper(1)
                return setImg(DjmaxInsert)
            }
        }
    }

    const imgList = (img:any) => {
        return (
            <Image src={img} id={no.toString()} alt='projectimg' width={450} height={100} onClick={onClick} className="shadow-lg rounded-lg border p-1 cursor-pointer"/>
        )
    }

    return (
        <div className='w-auto h-auto mt-4 mb-10 grid border rounded-lg shadow-md p-4 bg-gray-50'>
            {/* 프로젝트 넘버링 */}
            <div className="flex -m-2">
                <span className="flex justify-center border-2 border-gray-300 rounded-full w-5 text-gray-400 text-xs">{no}</span>
            </div>
            {/* 제목, 날짜 */}
            <span className="text-center text-2xl font-bold mt-3">{title}</span>
            <span className="text-center text-sm text-gray-500 mb-4">{date}</span>
            <div className={`${pageSize >= 1000 ? 'grid grid-cols-2 space-x-4' : 'space-y-4'}`}>
                {/* 프로젝트 사진 */}
                <div className='flex justify-center'>
                    <>
                    {imgClick && (
                        <div>
                            {imgList(img)}
                            <span className="font-semibold text-sm text-gray-500 flex justify-end mt-1">이미지를 클릭하면 다른 이미지도 볼 수 있어요!</span>
                        </div>
                        )}
                    {!imgClick && (<Image src={img} id={no.toString()} alt='projectimg' width={450} height={100} onClick={onClick} className="shadow-lg rounded-lg border p-1 cursor-pointer"/>)}
                    </>
                </div>
                <div className="mt-4 text-gray-700">
                    {/* 설명 */}
                    <div>
                        {children}
                    </div>
                    <hr className="border border-gray-300 m-6"/>
                    {/* 개발 환경 */}
                    <div>
                        {language && (
                            <div className="grid grid-cols-2">
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-lg font-semibold text-gray-600">Language</span>
                            </div>
                            <span className="font-bold text-gray-800">{language}</span>
                        </div>)}

                        {DB && (
                            <div className="grid grid-cols-2">
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-lg font-semibold text-gray-600">DataBase</span>
                            </div>
                            <span className="font-bold text-gray-800">{DB}</span>
                        </div>)}

                        {front && (
                        <div className="grid grid-cols-2">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold text-gray-600">Frontend</span>
                                </div>
                                <span className="font-bold text-gray-800">{front}</span>
                            </div>)}

                        {back && (
                        <div className="grid grid-cols-2">
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-lg font-semibold text-gray-600">Backend</span>
                            </div>
                            <span className="font-bold text-gray-800">{back}</span>
                        </div>)}

                        {github && (
                            <div className="grid grid-cols-2">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold text-gray-600">GitHub</span>
                                </div>
                                <Link href={github!=undefined ? github : ''} target="blank">
                                    <span className="font-bold hover:underline text-gray-800">바로가기</span>
                                </Link>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate