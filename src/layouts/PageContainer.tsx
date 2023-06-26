import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoPage from "../pages/TodoPage";
import Contacts from "../pages/Contats";

interface Props {}

const PageContainer = (props: Props): JSX.Element => {
  const {} = props;

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default PageContainer;
