import Logo from "../png/logo.png";
export default function LogoAsset({ width }) {
  return (
    <div>
      <img className={`${width}`} src={Logo} alt="mainlogo" />
    </div>
  );
}
