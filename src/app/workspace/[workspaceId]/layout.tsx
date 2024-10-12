"use client";

import { Toolbar } from "./toolbar";

interface WorkspaceIdLayout {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayout) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
