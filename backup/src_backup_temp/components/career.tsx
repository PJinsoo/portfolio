import Title from "./title";
import Image from "next/image";
import PageSize from "@/utility/page-size";
import DivideLine from "./divide-line";
import develoop from "../images/career/develoop.jpeg"
import { useState } from "react";
import ModalView from "./modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Modal from 'react-modal';
// 하키플레이 구현 사진
import old_home from '../images/career/hockeyplay/old/old_home.png'
import old_board_list from '../images/career/hockeyplay/old/old_board-list.png'
import old_board_view from '../images/career/hockeyplay/old/old_board-view.png'
import old_board_write from '../images/career/hockeyplay/old/old_board-write.png'
import old_schedule from '../images/career/hockeyplay/old/old_schedule.png'
import old_team from '../images/career/hockeyplay/old/old_team-management.png'
import new_home from '../images/career/hockeyplay/new/new_home.png'
import new_board_list from '../images/career/hockeyplay/new/new_board-list.png'
import new_board_view from '../images/career/hockeyplay/new/new_board-view.png'
import new_board_write from '../images/career/hockeyplay/new/new_board-write.png'
import new_schedule from '../images/career/hockeyplay/new/new_schedule.png'
import new_team from '../images/career/hockeyplay/new/new_team-management.png'
import testImg from '../images/test-img.jpg'

// 경력

const Career = () => {
    const pageSize = PageSize()

    // 업무 상세보기 트리거
    const [intro, setIntro] = useState(false)
    const viewIntro = () => {
        return setIntro(!intro)
    }

    // 하키플레이 스샷 모달 트리거
    const [isOpen, setOpen] = useState(false);
    const hockeyModal = () => {
        setOpen(!isOpen);
    }

    // 스샷 뷰어 모달 트리거
    const [viewImg, setViewImg] = useState(false);
    const [targetImg, setTargetImg] = useState(testImg);

    // 모달에 알맞는 사진 보여주기
    const imgViewModal = (e:any) => {
        const {id} = e.target // 클릭한 사진의 정보 가져오기
        // 홈화면
        if(id == "home_old") setTargetImg(old_home)
        if(id == "home_new") setTargetImg(new_home)
        // 게시판
        if(id == "board_old") setTargetImg(old_board_list)
        if(id == "board_new") setTargetImg(new_board_list)
        // 게시글 조회
        if(id == "view_old") setTargetImg(old_board_view)
        if(id == "view_new") setTargetImg(new_board_view)
        // 게시글 쓰기
        if(id == "write_old") setTargetImg(old_board_write)
        if(id == "write_new") setTargetImg(new_board_write)
        // 경기 일정
        if(id == "schedule_old") setTargetImg(old_schedule)
        if(id == "schedule_new") setTargetImg(new_schedule)
        // 팀 관리
        if(id == "team_old") setTargetImg(old_team)
        if(id == "team_new") setTargetImg(new_team)
        setViewImg(!viewImg) // 모달 출력 on/off
    }

    // 하키플레이 스샷 탬플릿 함수
    const swiperImg = (id:string, title:string, oldImg:any, newImg:any) => {
        return (
            <>
                {/* 제목 */}
                <div>
                    <span className="mt-2 flex justify-center text-lg text-gray-700 font-semibold">{title}</span>
                    <span className="flex justify-center text-sm text-gray-600">이미지를 클릭하면 크게 볼 수 있어요!</span>
                </div>
                {/* 구 하키와 신 하키 비교 화면 | 이미지 클릭 시 크게 보여주기 */}
                <div className="p-2 -mt-8">
                    {pageSize <= 600 ? (
                        <div>
                            <div className="m-10 flex flex-col justify-center">
                                <Image id={id+"_old"} src={oldImg} alt={'Spring HockeyPlay'} width={400} onClick={imgViewModal} className="p-2 border rounded-md bg-gray-200 shadow"/>
                                <span className="text-center text-gray-600 mt-1">Spring으로 개발된 기존 하키플레이</span>
                            </div>
                            <div className="m-10 flex flex-col justify-center">
                                <Image id={id+"_new"} src={newImg} alt={'Next.JS HockeyPlay'} width={400} onClick={imgViewModal} className="p-2 border rounded-md bg-gray-200 shadow"/>
                                <span className="text-center text-gray-600 mt-1">Next.JS로 재개발한 하키플레이</span>
                            </div>
                        </div>
                        
                    ) : (
                        <div className="flex justify-around ">
                            <div className="m-10 flex flex-col justify-center">
                                <Image id={id+"_old"} src={oldImg} alt={'Spring HockeyPlay'} width={400} onClick={imgViewModal} className="p-2 border rounded-md bg-gray-200 shadow"/>
                                <span className="text-center text-gray-600 mt-1">Spring으로 개발된 기존 하키플레이</span>
                            </div>
                            <div className="m-10 flex flex-col justify-center">
                                <Image id={id+"_new"} src={newImg} alt={'Next.JS HockeyPlay'} width={400} onClick={imgViewModal} className="p-2 border rounded-md bg-gray-200 shadow"/>
                                <span className="text-center text-gray-600 mt-1">Next.JS로 재개발한 신규 하키플레이</span>
                            </div>
                        </div>
                        )}

                        {/* 클릭된 이미지 크게 보기 모달 출력 */}
                        <Modal isOpen={viewImg} className="rounded-lg m-10 h-auto w-auto bg-gray-100 border-2 border-gray-300" >
                            <div className="px-6 py-2 border-b-2 rounded-lg flex justify-between z-50 text-gray-700">
                                <span className="text-2xl">이미지 클릭으로 돌아가기</span>
                                <button onClick={imgViewModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className="m-3 flex justify-center">
                                    <Image src={targetImg} alt={'imgView'} width={600} onClick={imgViewModal} className="p-1 border rounded-md bg-gray-200 shadow"/>
                                </div>
                            </div>
                        </Modal>
                </div>
            </>
        )
    }

    return (
        <>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="CAREER"
                summary= "그동안의 경력입니다!"
                icon="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />

            {/* 경력 */}
            <div className={`mt-4 border p-4 rounded-lg shadow-md space-y-6 bg-gray-50`}>
                <div className="flex flex-col items-center">
                    <div className="border-2 rounded-full h-48 w-48 bg-white shadow-sm">
                        <Image src={develoop} alt='develoop' width={150} className="mt-20 ml-4"/>
                    </div>
                </div>
                <div className={`h-full`}>
                    <div className="text-center m-2 flex flex-col">
                        <span className="text-xl font-bold text-gray-800 -mx-10">(주) 디벨룹</span>
                        <span className="text-sm text-gray-600">2022.09 ~ 2023.02 (6개월)</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-700">
                            비대면 화상 솔루션과 스마트팩토리를 개발·운영하고 스포츠 경기 운영·관리 플랫폼의 개발 등 기타 Web/App 플랫폼 개발을 하는 기업입니다.
                        </p>
                    </div>
                    <hr className="my-4 w-full border-gray-300"/>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-700">:: 주요 담당 업무 ::</span>
                        <p className="font-semibold text-gray-700">스포츠 경기 운영·관리 플랫폼 개발</p>
                        <p className="text-sm text-gray-600">Next.JS, TypeScript, node.JS</p>
                    </div>
                    <hr className="my-4 w-full border-gray-300"/>
                        <div>
                            <div className="flex justify-between">
                                <span className="p-2 font-semibold">▎&nbsp;개발 담당 업무</span>
                                <span className="mx-2 p-2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-600" onClick={hockeyModal}>
                                    구현 사진
                                </span>
                                {/* hockeyplay 사진보기 모달 */}
                                <ModalView isOpen={isOpen}>
                                    <div className="px-6 py-2 border-b-2 rounded-lg flex justify-between z-50 text-gray-700">
                                        <span className="font-bold text-2xl">Hockey Play</span>
                                        <button onClick={hockeyModal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={`${pageSize <= 600 && 'overflow-y-auto h-[500px]'}`}>
                                        <Swiper
                                            spaceBetween={100}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            allowTouchMove // 터치 허용
                                            threshold={20} // 터치 감도
                                        >
                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("home", "하키플레이 홈 화면", old_home, new_home)}
                                            </SwiperSlide>

                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("board", "하키플레이 게시판", old_board_list, new_board_list)}
                                            </SwiperSlide>

                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("view", "하키플레이 게시글 조회", old_board_view, new_board_view)}
                                            </SwiperSlide>

                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("write", "하키플레이 게시글 작성", old_board_write, new_board_write)}
                                            </SwiperSlide>

                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("schedule", "하키플레이 팀 일정 관리 페이지", old_schedule, new_schedule)}
                                            </SwiperSlide>

                                            <SwiperSlide className="cursor-pointer">
                                                {swiperImg("team", "하키플레이 팀 정보 수정 및 관리 페이지", old_team, new_team)}
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </ModalView>
                            </div>
                            <div className="ml-2 mt-1">
                                <p>· 게시판의 CRUD 개발</p>
                                <p>· 게시글 뷰어에 Youtube 랜더링 적용</p>
                                <p>· 매치 정보 모달의 프론트 개발</p>
                                <p>· 팀 페이지 전체 개발</p>
                                <p>· API 개발 - 회원 탈퇴, 팀 정보수정/폐쇄신청</p>
                                <p>· 관리자의 회원, 팀 관리 페이지 개발</p>
                                <p>· Text Editor로 CKeditor 라이브러리 적용</p>
                                <p>· 경기 일정 관리을 위해 FullCalendar 라이브러리 적용</p>
                            </div>
                        </div>
                    <hr className="my-4 border-gray-300"/>
                    {/* 경력 내용 상세보기 온오프 */}
                    <div className="w-full">
                        {intro 
                            ? (
                            <div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-sm mt-3 mx-2">업무 경험 자세히 읽기</span>
                                    <span className="mx-2 p-2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-600" onClick={viewIntro}>
                                        내용닫기
                                    </span>
                                </div>
                                <div className="mt-2 p-1 text-gray-800">
                                    <p>
                                        <b>Spring MVC로 개발되어 운영 중인 웹 사이트 &apos;하키플레이(아이스하키 경기 운영·관리 웹 플랫폼)&apos;를 
                                            TypeScript 기반의 Next.JS로 재개발하는 프로젝트에 참여하였습니다.</b>
                                    </p><br/>
                                    <p>
                                        해당 프로젝트를 수행하기 위해서 TypeScript와 React.JS(Next.JS)를 1달의 기간동안 학습하였습니다.
                                        학습의 효과로 TypeScript와 Next.JS 환경에 빠르게 적응할 수 있었으며 <b>하키플레이의 Next.JS 재개발 작업에서도 대부분의 페이지를 구현해내는 실적을 올릴 수 있었습니다.</b>
                                    </p><br/>
                                    <p>
                                        더불어 기존의 Spring으로 개발된 하키플레이의 구조를 확인해가며 작업을 진행한 만큼 게시판 제작 수준에 국한되던 <b>제 Spring 실력을, 실제 운영 중인 하나의 웹페이지를 이해할 만큼 성장시킬 수 있었습니다.</b>
                                    </p>
                                </div>
                            </div>)
                            : (
                            <div className="flex justify-between">
                                <span className="text-gray-700 text-sm mt-3 mx-2">업무 경험 자세히 읽기</span>
                                <span className="mx-2 p-2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-600" onClick={viewIntro}>
                                    상세보기
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <DivideLine/>
        </>
    )
}

export default Career