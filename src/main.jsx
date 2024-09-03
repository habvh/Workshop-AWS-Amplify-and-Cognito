import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles/reset.layer.css"; // global CSS reset
import "@aws-amplify/ui-react/styles/base.layer.css"; // base styling needed for Amplify UI
import "@aws-amplify/ui-react/styles/button.layer.css"; // component specific styles

import "./index.css";
import { TodoListProvider } from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<>Loading...</>}>
      <TodoListProvider>
        <App />
      </TodoListProvider>
    </Suspense>
  </StrictMode>
);
