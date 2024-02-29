import MobileNavbar from "@/components/shared/mobile-navbar";
import { Sidebar } from "@/components/shared/sidebar";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNavbar />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
