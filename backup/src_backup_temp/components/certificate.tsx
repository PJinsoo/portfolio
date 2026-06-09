import Title from "./title";
import Image from "next/image";
import PageSize from "@/utility/page-size";
import DivideLine from "./divide-line";

// 자격증

interface CertificateProps{
    name:string,
    date:string,
    organization:string,
    icon:string,
    sizeControl?:boolean,
}

const certificate = () => {
    const pageSize = PageSize()

    // 자격증 탬플릿
    const certificateTemplate = ({name, date, organization, icon, sizeControl} : CertificateProps) => {
        return(
            <div className={`flex space-x-3 ${sizeControl && 'md:pt-10'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                <div className="flex flex-col -mt-1">
                    <span className="text-gray-700 font-bold">{name}</span>
                    <span className="text-sm text-gray-600">{date} | {organization}</span>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="CERTIFICATE"
                summary= "취득한 자격증입니다!"
                icon="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />

            {/* 자격증 */}
            <div className={`grid mt-4 p-2 border rounded-lg shadow-md space-y-6 bg-gray-50`}>
                <div className="mx-2 my-8 grid grid-cols-1 space-y-6
                                    md:grid-cols-2 md:space-y-0 lg:ml-20">
                    {certificateTemplate({name:"정보처리산업기사", date:"2022.11.", organization:"한국산업인력공단", icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"})}
                    {certificateTemplate({name:"SQL개발자", date:"2022.06.", organization:"데이터산업진흥원", icon:"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"})}
                    {certificateTemplate({name:"컴퓨터활용능력 2급", date:"2018.08.", organization:"대한상공회의소", sizeControl:true, icon:"M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"})}
                    {certificateTemplate({name:"新 JLPT N1급", date:"2021.08.", organization:"일본국제교육협회", sizeControl:true, icon:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})}
                </div>
            </div>
            <DivideLine/>
        </>
    )
}

export default certificate