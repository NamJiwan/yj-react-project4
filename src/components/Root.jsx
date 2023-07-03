import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Outlet />
      {/* router에 children을 사용하기 위해 */}
    </div>
  );
}
