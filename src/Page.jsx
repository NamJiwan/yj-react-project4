import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import MultiCarousel from "./components/MultiCarousel";
import TitletwoRow from "./components/TitletwoRow";
import AcademyAsset from "./components/asset/AcademyAsset";
import AcademyAsset2 from "./components/asset/AcademyAsset2";
import AcademyAsset3 from "./components/asset/AcademyAsset3";
import AcademyAsset4 from "./components/asset/AcademyAsset4";
import InstaAsset from "./components/asset/InstaAsset";
import KakaoAsset from "./components/asset/KakaoAsset";

export default function Page() {
  return (
    <>
      <Layout>
        {/* main 캐러샐 이미지 */}
        <div className="w-full h-screen-minus-header overflow-hidden">
          <CarouselMain />
        </div>
        {/* 1번째 그리드 3/5 2/5 구분 */}
        <div className="py-16 w-full">
          <div className="w-full px-4">
            <div className="grid grid-cols-5 gap-16">
              {/* 공지사항 */}
              <div className="col-span-3 space-y-8">
                {/* 타이틀 */}
                <TitletwoRow main='공지사항' sub='notice' />
                {/* 게시판 */}
                <div className="w-full flex flex-col ">
                  <div className="border-2 border-neutral-900 w-full flex items-center">
                    <div className="text-center w-20 aspect-square flex justify-center items-center bg-neutral-900 text-white">2023 <br /> 05-15</div>
                    <div className="px-4">대구 오페라하우스 개관 20주년 이벤트</div>
                  </div>
                </div>
                <ul>
                  {
                    Array(5).fill('').map((_, i) => (
                      <li key={i} className="w-full flex justify-between px-1 py-3 cursor-pointer hover:bg-neutral-50">
                        <span>대구오페라하우스는 문화비 소득공제가 가능합니다.</span>
                        <span>2023-06-08</span>
                      </li>
                    ))
                  }

                </ul>
              </div>
              {/* 아카데미 */}
              <div className="col-span-2 flex flex-col space-y-8">
                <TitletwoRow main='아카데미' sub='doh acdemy' />
                <p className="w-1/2">전문적이고 차별화 된 대구오페라하우스의 아카데미 교육프로그램을 만나보세요</p>
                {/* 아이콘 4개 이미지 */}
                <div className="grid grid-cols-2 gap-6">
                  {/* 1첫번째 아이콘 */}
                  <div className="flex items-center space-x-4">
                    {/* 아이콘 */}
                    <div>
                      <AcademyAsset />
                    </div>
                    {/* 글내용 */}
                    <div>
                      <p>아카데미 안내</p>
                      <p className="uppercase text-neutral-500 text-sm">academy</p>
                    </div>
                  </div>
                  {/* 2첫번째 아이콘 */}
                  <div className="flex items-center space-x-4">
                    {/* 아이콘 */}
                    <div>
                      <AcademyAsset2 />
                    </div>
                    {/* 글내용 */}
                    <div>
                      <p>아카데미 안내</p>
                      <p className="uppercase text-neutral-500 text-sm">academy</p>
                    </div>
                  </div>
                  {/* 3첫번째 아이콘 */}
                  <div className="flex items-center space-x-4">
                    {/* 아이콘 */}
                    <div>
                      <AcademyAsset3 />
                    </div>
                    {/* 글내용 */}
                    <div>
                      <p>아카데미 안내</p>
                      <p className="uppercase text-neutral-500 text-sm">academy</p>
                    </div>
                  </div>
                  {/* 4첫번째 아이콘 */}
                  <div className="flex items-center space-x-4">
                    {/* 아이콘 */}
                    <div>
                      <AcademyAsset4 />
                    </div>
                    {/* 글내용 */}
                    <div>
                      <p>아카데미 안내</p>
                      <p className="uppercase text-neutral-500 text-sm">academy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2번째 그리드 3/5 2/5 구분 */}
        <div className="py-16 w-full">
          <div className="w-full px-4">
            <div className="grid grid-cols-5 gap-16">
                {/* 소셜네트워크 */}
                <div className="col-span-3 flex flex-col space-y-8">
                  <TitletwoRow main='소셜네트워크' sub='social network' />
                  <div className="w-full grid grid-cols-2 gap-4">
                    {/* 1번째 자식 */}
                    <div className="w-full cursor-pointer aspect-video relative">
                      <img className="w-full object-cover h-full" src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="social image1" />
                      <p className="font-semibold py-3 px-1">오페라테 Operatte</p>
                      {/* 호버했을때 음영처리 빈박스 */}
                      <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"></div>
                      {/* 오른쪽 위 아이콘 */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                        <KakaoAsset />
                      </div>
                    </div>
                    {/* 2번째 자식 */}
                    <div className="w-full cursor-pointer aspect-video relative">
                      <img className="w-full object-cover h-full" src="https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" alt="social image2" />
                      <p className="font-semibold py-3 px-1">카페라테 Caffelatte</p>
                      {/* 호버했을때 음영처리 빈박스 */}
                      <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"></div>
                      {/* 오른쪽 위 아이콘 */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                        <InstaAsset />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 알림존 */}
                <div className="col-span-2 space-y-8">
                  <TitletwoRow main='알림존' sub='doh banner' />
                  <MultiCarousel>
                    {/* 1번째 이미지 */}
                    <div className="w-52 h-60 bg-gray-400">
                      <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="social image2" />
                    </div>
                    {/* 2번째 이미지 */}
                    <div className="w-52 h-60 bg-gray-400">
                      <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="social image3" />
                    </div>
                    {/* 3번째 이미지 */}
                    <div className="w-52 h-60 bg-gray-400">
                      <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="social image4" />
                    </div>
                    {/* 4번째 이미지 */}
                    <div className="w-52 h-60 bg-gray-400">
                      <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="social image5" />
                    </div>
                  </MultiCarousel>
                </div>
            </div>
          </div>
        </div>
        {/* 우관기관 */}
        <div className=" w-full px-4">
          <div className="grid grid-cols-5 gap-16 items-end">
            {/* 타이틀 */}
            <div>
              <TitletwoRow main='유관기관' sub='familly sites' />
            </div>
            {/* 캐러셀이미지 */}
            <div className="col-span-4">
              <MultiCarousel itemNum={5} itemSpeed={2000}>
              {
                Array(9).fill('').map((_,i) => (
                  <div key={i}>
                    <img src={`https://www.daeguoperahouse.org/images/main/img_ban0${i+1}_on.png`} alt="family site1" />
                  </div>
                ))
              }
              </MultiCarousel>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
