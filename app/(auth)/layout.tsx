import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <div className="auth">{children}</div>;
};

export default layout;
