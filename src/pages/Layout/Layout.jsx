import { Outlet } from "react-router-dom";
import Loader from "../../shared/components/Loader/Loader";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
