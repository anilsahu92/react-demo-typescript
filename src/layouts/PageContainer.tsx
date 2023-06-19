import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

interface Props {}

function PageContainer(props: Props) {
  const {} = props;

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default PageContainer;
