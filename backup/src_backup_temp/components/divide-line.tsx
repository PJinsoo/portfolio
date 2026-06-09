import PageSize from "@/utility/page-size"

// 각 메뉴들을 나눠줄 실선 컴포넌트

const DivideLine = () => {
    const pageSize = PageSize()
    
    return <hr className='my-12 border border-gray-300'/>
}

export default DivideLine