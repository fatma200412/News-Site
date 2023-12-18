import AddNews from "../pages/admin/addNews";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard";
import News from "../pages/admin/news";
import NoPage from "../pages/noPage";
import About from "../pages/user/about";
import Advertise from "../pages/user/advertise";
import Home from "../pages/user/home";
import PrivacyPolicy from "../pages/user/privacyPolicy";
import UserRoot from "../pages/user/userRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/advertise",
        element: <Advertise />,
      },
      {
        path: "/privaryPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,

    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/news",
        element: <News />,
      },
      {
        path: "/admin/addnews",
        element: <AddNews />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
