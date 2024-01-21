import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalNav from "./GlobalNav";
import Style from "./LayoutStyle.module.css";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <article className={Style.header}>
        {/* <header>Welcome !</header> */}
        <GlobalNav />
      </article>

      <section className={Style["content-section"]}>
        <main className={Style["main-content"]}>
          <h1>Shakti Developers</h1>
          <Outlet />
        </main>
      </section>
      <ToastContainer />
    </>
  );
};

export default Layout;
