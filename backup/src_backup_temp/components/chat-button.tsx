import { useState } from "react";
import Image from "next/image";
import profile from "../images/my-photo/profile.jpg" // 프로필사진
import profileCircle from "../images/my-photo/casualProfile.png" // 프로필사진 동그라미

// 하단부 챗버튼 컴포넌트
// 채팅창을 활용하여 내 사진 보여주기

const ChatButton = () => {
    // 채팅창 온오프 트리거
    const [sideTrigger, setSideTrigger] = useState(false)
    const viewSideModal = () => {
        return setSideTrigger(!sideTrigger)
    }

    // 채팅 메세지 메서드
    const chatMessage = (msg: string) => {
        return(
            <div className="flex justify-start space-x-2">
                <Image id='Casual' src={profileCircle} alt="profileImg" width={50} className="rounded-full shadow-md cursor-pointer" onClick={viewProfileImg}/>
                <div className="grid">
                    <span className="text-sm font-semibold text-gray-700 ml-1">진수</span>
                    <span className="px-3 py-1 appearance-none rounded-xl bg-blonde text-gray-600 border shadow text-sm">
                        {msg}
                    </span> 
                </div>
            </div>
        )
    }

    // 프로필 사진 또는 전송한 사진 클릭
    const viewProfileImg = (e:any) => {
        // 클릭한 사진이 프사인지, 전송한 증명사진인지 확인
        const {id} = e.target
        
        if(id == "ID") {
            alert("증명사진 보여주기 미구현")
        }
        else {
            alert("프사 보여주기 미구현")
        }
    }

    return (
        <div>
            {/* 챗버튼의 내용물 */}
            {sideTrigger && (
                <div className="fixed bottom-28 right-5 z-30 border-blue-100 bg-lightsky p-2 h-96 w-60 rounded-2xl shadow-xl">
                    <div className="border-b-2 border-slate-200 px-4 py-2 -mx-2 rounded-b-xl flex justify-between">
                        <span className="text-gray-700 font-bold">진수 님과의 채팅창</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={viewSideModal}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="mt-2 p-1 space-y-3 overscroll-y-auto">
                        <div className="grid grid-cols-2">
                            <Image id='Casual' src={profileCircle} alt="profileImg" width={50} className="rounded-full shadow-md cursor-pointer" onClick={viewProfileImg}/>
                            <div className="-mt-1">
                                <span className="text-sm font-semibold text-gray-700 -ml-12">진수</span>
                                <Image id='ID' src={profile} alt="profileImg" width={200} className="rounded-xl shadow-md -ml-12 cursor-pointer" onClick={viewProfileImg}/>
                            </div>
                        </div>
                        {chatMessage('이건 제 사진이에요!')}
                        {chatMessage('사진을 눌러보세요!')}
                    </div>
                </div>
            )}

            {/* 챗버튼 */}
            <div onClick={viewSideModal} 
                className={`${sideTrigger ? 'bg-blue-500' : 'bg-blue-400'}
                fixed bottom-12 right-5 p-4 z-10 rounded-full shadow-xl text-white
              hover:bg-blue-500 transition-colors border-transparent cursor-pointer`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </div>
        </div>
    )
}

export default ChatButton