import React, { Suspense } from "react";
import "../globals.css";

function App({ children }) {
  return (
    <div lang="en" className="min-h-screen">
      <div className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
