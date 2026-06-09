import PageSize from "@/utility/page-size";
import Title from "./title";
import testImg from "../images/test-img.jpg"
import ProjectTemplate from "./projectTemplate";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import DivideLine from "./divide-line";
// 프로젝트 이미지
import PortfolioImg from "../images/project-img/portfolio/useFace.jpg"
import PortfolioImg_notFace from "../images/project-img/portfolio/notUseFace.png"
import MoiveChartImg from "../images/project-img/movie/main.png"
import CarrotEnter from "../images/project-img/carrot/0-enter.png"
import Zoom from "../images/project-img/zoom/call.png"
import DJMAX from "../images/project-img/djmax/main.jpeg"
import Coin from "../images/project-img/coin/main.png"
import Board from "../images/project-img/board/main.png"

const Projects = () => {
    const pageSize = PageSize()
    SwiperCore.use([Navigation, Pagination])

    return (
        <div className="z-0">
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="PROJECTS"
                summary= "좌우 스크롤을 통해 더 확인해보세요!"
                icon="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />

            <div>
                {/* Swiper 라이브러리를 사용한 슬라이드 뷰 */}
                <Swiper
                    className=""
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    allowTouchMove // 터치 허용
                    threshold={20} // 터치 감도
                >
                    {/* 포폴 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={1} projectImg={PortfolioImg_notFace} title="JinSoo's Portfolio" date="2023.02" front="Next.JS | TypeScript" github="https://github.com/PJinsoo/portfolio">
                            <div>
                                <p>
                                    <b>지금 보고 계시는 포트폴리오 프로젝트입니다!</b> 그동안 익힌 스킬을 하나의 결과물로 만들어보고 싶어 시작하여 완료한 프로젝트입니다.
                                </p><br/>
                                <p>
                                    <b>TypeScript와 Next.JS를 사용하여 구현했습니다.</b> 디자인은 Tailwind CSS를, 서버 배포는 Vercel을 이용해 배포 중입니다.
                                </p><br/>
                                <p>
                                    <b>화면 크기에 따라 레이아웃 구조가 다르게 보일 반응형 웹으로 구현하였습니다.</b> 모바일 화면과 PC브라우저 화면에서 다르게 보일 것 입니다!
                                    또한 스와이프나 모달 사용에서 오픈 라이브러리를 적극 활용하였습니다. 
                                </p><br/>
                                <p>
                                    이렇게 프로젝트를 진행하며 <b>그동안 쌓은 React.JS의 실력을 다듬을 수 있었습니다.</b> 앞으로의 제 커리어를 
                                    계속 갱신할 예정이기 때문에 <b>최대한 간편한 유지보수를 위해 컴포넌트를 최대로 나누었고</b>, 이 과정에서 모듈화를 체험해볼 수 있었습니다.
                                </p><br/>
                                <p>
                                    서버 배포까지 도전해본건 처음인 프로젝트로 Vercel을 통한 배포가 그렇게 어렵지 않고 간단하게 진행할 수 있다는 걸 알게 되었습니다.
                                </p>
                                <p>
                                    
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* Moive Chart */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={2} projectImg={MoiveChartImg} title="Movie Chart" date="2022.09" front="Next.JS | JavaScript" back="Node.JS | TMDB(Open Source API)" github="https://github.com/PJinsoo/movie-chart">
                            <div>
                                <p>
                                    <b>최신 영화를 인기순으로 확인할 수 있는 간단한 웹페이지 프로젝트 입니다.</b> 최근 개봉한 영화 중 평점이 높은 순으로 정렬하여 목록을 보여주며 줍니다.
                                </p><br/>
                                <p>
                                    <b>JavaScript와 Next.JS</b>를 사용해 구현하였으며 Next.JS 프레임워크 사용은 첫 번째인 프로젝트입니다.
                                </p>
                                <p>
                                    영화 데이터의 경우, 오픈소스 사용에 더 익숙해질 수 있도록 <b>오픈소스 API인 TMDB의 데이터를 적극 활용</b>하였습니다.
                                </p><br/>
                                <p>
                                    <b>프로젝트를 진행하며 가장 크게 느낀 점은 Next.JS가 제공하는 편리한 사용성에 대한 긍정적인 경험이었습니다.</b> 라우팅 경로 설정 없이 
                                    pages 디렉토리를 활용해 자동으로 라우팅을 지원해주거나 서버 사이드 렌더링으로 
                                    페이지가 빨라 보이는 긍정적인 경험을 주는 등 최근 인기를 누리는 이유를 확인할 수 있었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* 당근마켓 클론 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={3} projectImg={CarrotEnter} imgClick title="진수의 당근" date="2022.10" front="Next.JS | TypeScript" back="Node.JS | Prisma" github="https://github.com/PJinsoo/carrot-market">
                            <div>
                                <p>
                                    <b>모바일 중고거래 앱인 당근마켓을 웹으로 클론 코딩해보았습니다.</b> 판매 상품 목록을 보여주며 상품을 클릭하면 상품 정보와
                                    비슷한 상품에 대한 목록도 표시해주는 등 당근마켓을 클론해보았습니다. 
                                    직전 영화 소개 페이지를 제작하며 친해진 Next.JS와 더욱 친해지기 위해 시작한 프로젝트입니다.
                                </p><br/>
                                <p>
                                    <b>프론트로 TypeScirpt와 Next.JS</b>를 사용하였으며, <b>백엔드는 NoSQL인 Prisma</b>를 사용하였습니다.
                                </p><br/>
                                <p>
                                    <b>처음으로 NoSQL을 다뤄본 것과 퍼블리싱을 위해 Tailwind CSS에 도전</b>해보는 등 다양한 도전을 해본 프로젝트입니다.
                                </p>
                                <p>
                                    개발의 규모가 이전보다 커지다보니 중복된 코드가 잦아졌고 이를 최소화할 필요가 있었습니다. 이 과정에서 <b>각 기능의 컴포넌트를 나누는 것에 대해 더 익숙해 질 수 있었습니다.</b> 또한 
                                    비슷한 상품 목록을 보여주기 위한 나름대로의 알고리즘을 구현해보기도 하였습니다.
                                </p><br/>
                                <p>
                                    Tailwind CSS를 사용해보며 놀라울 정도로 간편하게 이뤄내는 퍼블리싱에 감탄하였습니다.
                                    Tailwind CSS를 계기로 기존 CSS에 흥미를 갖게 되는 등 추가적인 학습효과도 이뤄낼 수 있던 좋은 프로젝트 경험이었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* 줌 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={4} projectImg={Zoom} title="소켓의 영상통화방" date="2022.09" front="JavaScript" back="Node.JS" github="https://github.com/PJinsoo/zoom">
                            <div>
                                <p>
                                    <b>Zoom 등의 비대면 화상회의 프로그램과 같은 영상통화방 프로젝트입니다.</b> 방 번호를 입력하여 통화방에 접속할 수 있으며 
                                    자기자신은 왼쪽에 통화 상대방은 오른쪽에 나타납니다. 음소거나 카메라를 끌 수도 있으며, 카메라의 종류가 2개 이상이라면 원하는 카메라를 선택할 수도 있습니다.
                                </p><br/>
                                <p>
                                    <b>Socket 통신의 학습을 위해 진행한 프로젝트</b>로 프론트는 자바스크립트를 백은 노드를 사용하여 구현해보았습니다. 
                                    소켓의 학습은 먼저 WebSocket으로 구현하면서 학습해보았으며 이후 Socket.IO 라이브러리를 적용하며 Socket.IO의 편리한 사용성을 체감하였습니다.
                                </p><br/>
                                <p>
                                    <b>해당 프로젝트에서 가장 크게 배운 점은 사용자의 디바이스에 접근하는 방법이었습니다.</b> 카메라의 유무와 개수, 스피커의 유무 등 유저의 물리적 기기의 정보를 알아낼 수 있었으며
                                    음소거, 카메라 전환 등의 기기 조작을 웹에서 유저에게 바로 제공해줄 수 있음을 배울 수 있었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* 게시판 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={5} projectImg={Board} title="각종 게시판 구현" date="2021.09 ~" DB="MySQL" github="https://github.com/stars/PJinsoo/lists/board">
                            <div>
                                <p>
                                    <b>여러가지 언어로 구현해본 게시판들입니다.</b> 새로운 언어를 학습함에 있어 튜토리얼로 게시판을 구현해보곤 합니다.
                                </p><br/>
                                <p>
                                    <b>게시판의 구현을 통해</b> 해당 언어의 환경은 어떠하고, DataBase와의 커넥션은 어떻게 진행되는지, 
                                    연결된 DataBase에서 CRUD 작업은 어떻게 진행해야 하는지 등의 <b>웹개발의 기초를 가장 효과적으로 익힐 수 있다 생각했습니다.</b>
                                </p><br/>
                                <p>
                                    이렇게 학습을 진행해본 언어로는 <b>Servlet, JSP, Spring, Spring Boot, Next.JS</b>가 해당됩니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* 코인 */}
                    {/* <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={5} projectImg={Coin} title="코인 환전기" date="2022.09" front="React.JS" back="Coinpaprika(Open Source API)" github="https://github.com/stars/PJinsoo/lists/board">
                            <div>
                                <p>
                                    입력한 달러를 현재 코인의 시세로 변환시켜주거나 그 반대를 수행하는 코인 환전기입니다.
                                </p><br/>
                                <p>
                                    React.JS 학습을 위해 진행해본 프로젝트로 React.JS 환경을 익히는데 큰 도움을 주었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide> */}
                    
                    {/* 디맥 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate no={6} projectImg={DJMAX} imgClick title="DJMAX V 성과 기록기" date="2021.11" language="JAVA" DB="MySQL">
                            <div>
                                <p>
                                    즐겨하는 <b>리듬게임인 &apos;DJMAX&apos;의 성과를 기록하는 자바 프로그램을 개발해본 프로젝트입니다.</b> 대학 시절 학과 자바 수업의 프로젝트로 진행되었습니다.
                                    초기엔 로그인화면을, 로그인한 회원이 기록한 성과 목록을, 성과기록을 추가/삭제/수정을 지원하는 기본적인 기록기 프로그램입니다.
                                </p><br/>
                                <p>
                                    <b>자바의 Window Apllication을 통해 자바 GUI로 개발</b>되었으며, 유저정보, 성과정보를 저장할 <b>데이터베이스로는 MySQL</b>을 사용했습니다.
                                </p><br/>
                                <p>
                                    그동안 자바로 구현해본 코드는 CLI 화면에서 결과값 텍스트를 바라보는 것에서 지루함을 느꼈습니다. 
                                    그런 제게 <b>실제 GUI를 개발해보는 것은 흥미로운 경험</b>이었습니다.
                                </p><br/>
                                <p>
                                    DB와 연동하는 과정에서 <b>자바의 DB 커넥션 연결이 처음이었던지라 미숙했던 점이 있어 고전을 면치못하기도</b> 하였습니다.
                                    하지만 <b>이 경험을 통해 DB 연동에 익숙해질 수 있었으며 이후 Spring과 DB를 연결하는 과정에서도 도움이 되는 등 큰 도움이 된 프로젝트입니다.</b>
                                    또한 이 프로젝트를 통해 자신이 좋아하는 분야에 무언가를 개발하고 있음이 얼마나 즐거운지 느낄 수 있었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>


                </Swiper>
            </div>
            <DivideLine/>
        </div>
    )
}

export default Projects