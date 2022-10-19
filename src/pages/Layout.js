import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import TasksList from "../components/organisms/TasksList";

const Layout = () => (
  <>
    <Header />
    <TasksList />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
