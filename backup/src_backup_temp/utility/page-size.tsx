import { useState, useEffect } from "react";

// 브라우저 사이즈 감지 메서드
// 반응형 웹 페이지를 위해 브라우저 사이즈 감지

const PageSize = () => {
    // 화면 크기 감지
    // window 객체는 Next.js의 SSR 과정에서 찾을 수 없기 때문에 typeof로 존재 판단 후 작업 수행
    const [width, setWidth] = useState(
        typeof window != 'undefined' ? window.innerWidth : 0
        )

    // 화면 크기를 감지할 동안 걸어줄 로딩
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        width != undefined && setLoading(false)
    }, [width])

    // 화면 크기 저장
    const screenResize = () => {
        setWidth(window?.innerWidth)
    }

    // 페이지가 그려질 때 마다 화면 크기 다시 저장
    useEffect(() => {
        window.addEventListener("resize", screenResize)
        return () => {
            window.removeEventListener("resize", screenResize)
        }
    }, [])

    return !isLoading && width
        
}

export default PageSize