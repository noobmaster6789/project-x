import React, { FC, ReactChild } from 'react';

interface LayoutProps {
    children?: ReactChild
}
const Layout:FC = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="t-layout">
      <div className="t-layout--top-menu">
        this is layout
      </div>
      <div className="t-layout--content">
        {children}
      </div>
    </div>
  );
};
export default Layout;
