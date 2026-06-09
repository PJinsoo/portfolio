'use client';

import Layout from "@/components/layout";
import AboutMeNotFace from "@/components/about-me-NotMyFace";
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";
import Certificate from "@/components/certificate";
import Career from "@/components/career";

// 포트폴리오 화면 (App Router 마이그레이션)
export default function Home() {
  const pageSize = PageSize();

  return (
    <Layout>
      {/* 인적사항 소개 화면 */}
      <AboutMeNotFace/>

      {/* 페이지 사이즈에 따라 다르게 보여줄 기술스택 화면 */}
      {typeof pageSize === 'number' && pageSize >= 1300 ? <WidthSkills/> : <HeightSkills/>}

      {/* 취득 자격증 */}
      <Certificate/>

      {/* 프로젝트 소개 화면 */}
      <Projects/>

      {/* 경력 소개 화면 */}
      <Career/>
    </Layout>
  );
}
