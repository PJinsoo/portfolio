// 프론트 스킬 아이콘 이미지 Import
import HTML from "../images/front-icon/html5.png"
import JS from "../images/front-icon/JavaScript.png"
import TS from "../images/front-icon/typeScript.png"
import ReactJS from "../images/front-icon/Reactjs.png"
import NextJS from "../images/front-icon/Nextjs.png"
import CSS from "../images/front-icon/CSS.png"
import TailwindCSS from "../images/front-icon/tailwind-css.svg"
// 백 스킬 아이콘 이미지 Import
import JAVA from "../images/back-icon/java.png"
import Spring from "../images/back-icon/spring.png"
import NodeJS from "../images/back-icon/nodejs.webp"
import MySQL from "../images/back-icon/MySQL.png"
// 기타 스킬 아이콘 Import
import Git from "../images/ect-icon/gitlogo.png"
import Github from "../images/ect-icon/github.png"
import Gitlab from "../images/ect-icon/gitlab.png"

import Title from "./title";
import Image from "next/image";
import PageSize from "@/utility/page-size";
import DivideLine from "./divide-line"

// 세로로 나열하는 기술스택

const HeightSkills = () => {
    const pageSize = PageSize()

    return(
        <>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="SKILLS"
                summary= "보유한 기술 스택입니다!"
                icon="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />

            {/* 기술스택 파트 */}
            <div className={`grid
                            ${pageSize >= 850 && 'grid-cols-2'}
            `}>
                {/* 프론트엔드 기술 스택 */}
                <div className={`${pageSize >= 850 && ' w-[300px]'} grid mt-4 p-2 border rounded-lg shadow-md space-y-6 bg-gray-50`}>
                    <span className="text-center text-2xl border-b-2 h-10 border-gray-300 m-2 font-bold text-orange-500">Frontend</span>
                    <div className="flex justify-around">
                        <Image src={HTML} alt="html" width={130} height={130} className="-ml-3"/>
                        <Image src={CSS} alt="css" width={100} height={100}/>
                    </div>
                    <div className="flex justify-around">
                        <Image src={JS} alt="js" width={100} height={100} className="rounded-lg" />
                        <Image src={TS} alt="ts" width={100} height={100} />
                    </div>
                    <div className="flex justify-around">
                        <Image src={ReactJS} alt="react" width={100} height={100} className="rounded-lg" />
                    </div>
                    <div className="flex justify-around">
                        <Image src={NextJS} alt="next" width={200} height={100} />
                    </div>
                    <div className="flex justify-around p-4">
                        <Image src={TailwindCSS} alt="tailwind" width={200} height={100} />
                    </div>
                </div>

                <div>
                {/* 백엔드 기술 스택 */}
                <div className={`${pageSize >= 850 && ' w-[300px]'} h-[600px] grid mt-8 p-2 border rounded-lg shadow-md space-y-6 bg-gray-50`}>
                    <span className="text-center text-2xl border-b-2 border-gray-300 m-2 font-bold text-orange-500">Backend</span>
                    <div className="flex justify-around space-x-2 -mr-4">
                        <Image src={JAVA} alt="java" width={80} height={80}/>
                        <Image src={NodeJS} alt="node" width={120} height={100}/>
                    </div>
                    <div className="flex justify-around p-2">
                        <Image src={Spring} alt="spring" width={200} height={100} />
                    </div>
                    <div className="flex justify-around p-2">
                        <Image src={MySQL} alt="mysql" width={200} height={100} />
                    </div>
                </div>
                {/* ect... */}
                <div className={`${pageSize >= 850 && ' w-[300px]'} mt-8 p-4 grid grid-cols-1 border rounded-lg shadow-md space-y-6 bg-gray-50`}>
                    <span className="text-center text-2xl border-b-2 border-gray-300 m-2 font-bold text-orange-500">etc.</span>
                    <div className="flex justify-around space-x-2 -mr-2">
                        <Image src={Git} alt="git" width={200} height={100} />
                    </div>
                    <div className="flex justify-around ml-10">
                        <Image src={Github} alt="github" width={100} height={100}/>
                        <Image src={Gitlab} alt="gitlab" width={150} height={150}/>
                    </div>
                </div>
                </div>
            </div>
            <DivideLine/>
        </>
    )
}

export default HeightSkills