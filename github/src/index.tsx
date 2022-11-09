import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error from "./404";
import App from "./App";
import CreateIssue from "./CreateIssue/NewIssuePage";
import Issue from "./Issue/IssuePage";
import IssueDetail from "./IssueDetail/IssueDetailPage";
import LabelManagement from "./LabelManagement/LabelManagement";
import SignIn from "./SignIn";
import { store } from "./store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/LabelManagement" element={<LabelManagement />} />
          <Route path="/Issue" element={<Issue />} />
          <Route path="/Issue/:IssueNum" element={<IssueDetail />} />
          <Route path="/NewIssue" element={<CreateIssue />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
