import { lazy, Suspense } from "react";
// 引入路由组件
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
// 引入封装路由Hooks
import { navLinkStyle } from "./Hooks/App";
import Home from "./pages/Home";
// import About from "./pages/About";
const About = lazy(() => import("./pages/About"));
export default function App() {
  return (
    <div>
      <NavLink style={navLinkStyle} to="/home">
        首页
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        分类
      </NavLink>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 默认匹配路由 */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
