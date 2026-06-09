
// 각 메뉴의 타이틀 컴포넌트

interface TitleProps {
    title:string    // 타이틀 이름
    summary:string  // 타이틀 설명 혹은 요약
    icon:string     // 타이틀 아이콘
}

const Title = ({title, summary, icon}: TitleProps) => {
    return (
        <div className="lg:flex lg:justify-between">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 border-b-2 border-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                <span className="text-2xl p-1 border-b-2 border-gray-600 font-mono font-bold">{title}</span>          
            </div>
            {/* 한 줄 소개가 들어갈 부분 */}
            <span className="font-bold text-slate-500 text-lg mt-2">{summary}</span>
        </div>
    )
}

export default Title