import Layout from "@/components/layout";
import AboutMe from "@/components/about-me";
import AboutMeNotFace from "@/components/about-me-NotMyFace";
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";
import DivideLine from "@/components/divide-line";
import ChatButton from "@/components/chat-button";
import Certificate from "@/components/certificate";
import Career from "@/components/career";

// 포트폴리오 화면

// 각 메뉴의 간편한 관리를 위해 컴포넌트화

const Home = () => {
  const pageSize = PageSize()

  return (
      <Layout>
        {/* 화면사이즈 테스트용 */}
        {/* <div className="fixed bg-gray-200 top-0">
        <p
            className="
                text-white
                font-bold
                bg-red-500
                sm:bg-yellow-500
                md:bg-green-500
                lg:bg-blue-500
                xl:bg-violet-500
                ">
            빨:xs 주:sm 초:md 파:lg 보:xl
        </p>
        <p>현재 사이즈: {pageSize}</p>
        </div> */}


        {/* 인적사항 소개 화면 */}
        <AboutMeNotFace/>

        {/* 페이지 사이즈에 따라 다르게 보여줄 기술스택 화면 */}
        {pageSize >= 1300 ? <WidthSkills/> : <HeightSkills/>}

        {/* 취득 자격증 */}
        <Certificate/>

        {/* 프로젝트 소개 화면 */}
        <Projects/>

        {/* 경력 소개 화면 */}
        <Career/>

        {/* 우하단 챗버튼, 당장은 일단 주석처리*/}
        {/* <ChatButton/> */}
      </Layout>
  )
}

export default Home