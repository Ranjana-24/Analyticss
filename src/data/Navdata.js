import home from "../assets/NavImages/home.png";
import pages from "../assets/NavImages/pages.png";
import applications from "../assets/NavImages/application.png";
import ecommerce from "../assets/NavImages/e commerce.png";
import authentication from "../assets/NavImages/authentication.png";

const NavData = [
  {
    title: "Home",
    icon: home,
    path: "/",
    children: [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Analytics", path: "/analytics" },
    ],
  },
  {
    title: "Pages",
    icon: pages,
    path: "/pages",
    children: [
      { title: "Profile", path: "/pages/profile" },
      { title: "Todo", path: "/pages/todo" },
      { title: "Pricing", path: "/pages/pricing" },
      { title: "FAQ", path: "/pages/faq" },
    ],
  },
  {
    title: "Applications",
    icon: applications,
    path: "/applications",
    children: [
      { title: "Chat", path: "/applications/chat" },
      { title: "Calendar", path: "/applications/calendar" },
      { title: "Email", path: "/applications/email" },
      { title: "Kanban", path: "/applications/kanban" },
    ],
  },
  {
    title: "Posts",
    icon: ecommerce,
    path: "/posts",
    children: [
      { title: "Posts", path: "/posts" },
      // { title: "Product Details", path: "/e-commerce/products/details" },
      // { title: "Add Product", path: "/e-commerce/products/add" },
      // { title: "Orders", path: "/e-commerce/orders" },
      // { title: "Customers", path: "/e-commerce/customers" },
    ],
  },
  {
    title: "Authentication",
    icon: authentication,
    path: "/authentication",
    children: [
      { title: "Login", path: "/authentication/login" },
      { title: "Register", path: "/authentication/register" },
      { title: "Forgot Password", path: "/authentication/forgot-password" },
      { title: "Reset Password", path: "/authentication/reset-password" },
    ],
  },
];

export default NavData;