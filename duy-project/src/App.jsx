import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/BaiTapThucHanhLayout/Header";
import Body from "./assets/components/BaiTapThucHanhLayout/Body";
import Footer from "./assets/components/BaiTapThucHanhLayout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
