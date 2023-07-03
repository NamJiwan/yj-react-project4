import { Link } from "react-router-dom";
import LogoAsset from "./asset/LogoAsset";
import SearchAsset from "./asset/SearchAsset";

const GNB = [
  { mainTitle: "공연안내", subTitle: "Performance", link: "/performance" },
  { mainTitle: "공간 대관안내", subTitle: "Rental", link: "/rental" },
  { mainTitle: "멤버쉽", subTitle: "Menbership", link: "/menbership" },
  { mainTitle: "아카데미", subTitle: "Academy", link: "/academy" },
  { mainTitle: "커뮤니티", subTitle: "Community", link: "/community" },
  { mainTitle: "대구엑스포", subTitle: "Contact", link: "/contact" },
];
export default function Header() {
  return (
    <>
      <div className="w-full flex justify-center h-header-height shadow-md">
        {/* 좌우 여백을 위한 박스 */}
        <div className="w-full flex justify-center px-layout-padding">
          <div className="w-full flex justify-center relative">
            {/* 메뉴 리스트 */}
            <div className="w-full flex justify-center items-center space-x-8">
              {GNB.map(({ mainTitle, subTitle, link }) => (
                <Link key={mainTitle} to={link}>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-semibold">{mainTitle}</h1>
                    <p className="uppercase text-sm font-light">{subTitle}</p>
                  </div>
                </Link>
              ))}
            </div>
            {/* LOGO */}
            <div className="absolute left-0 h-full flex items-center">
              <LogoAsset width="w-50" />
            </div>
            {/* 오른쪽 상단 메뉴 */}
            <div className="absolute right-0 top-0 items-center uppercase flex  space-x-8 py-2 text-sm ">
              <div>
                <SearchAsset />
              </div>
              <div>home</div>
              <div>login</div>
              <div>join</div>
              <div>
                <select size={"sm"} className="text-sm rounded-sm py-2 border border-neutral-300 px-2">
                  <option>한국어</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
