import { Link } from "react-router-dom";
import FacebookAsset from "./asset/FacebookAsset";
import InstaAsset from "./asset/InstaAsset";
import KakaoAsset from "./asset/KakaoAsset";
import NaverAsset from "./asset/NaverAsset";

export default function LeftSide() {
  const SNS_ITEMS = [
    { icon: <FacebookAsset />, link: 'https"//facebook.com' },
    { icon: <NaverAsset />, link: "https://naver.com" },
    { icon: <KakaoAsset />, link: "https://www.kakao.com" },
    { icon: <InstaAsset />, link: "https://www.instagram.com" },
  ];
  return (
    <div className="flex flex-col w-full space-y-8 items-center">
      {SNS_ITEMS.map(({ icon, link }) => (
        <Link to={link} key={link}>
          <div className="w-10 h-10 border border-neutral-300 rounded-full flex justify-center items-center group overflow-hidden">{icon}</div>
        </Link>
      ))}
    </div>
  );
}
