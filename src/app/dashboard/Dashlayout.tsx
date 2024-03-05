// components/Layout.tsx
import Sidenav from '@/components/side-nav';
import React from 'react';

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex '>
      {/* Sidebar */}
      <div className='basis-1/5 grow-0 shrink-0'>
        {/* Sidebar content */}
        <Sidenav />
      </div>
      {/* Main content */}
      <div className='flex-1'>
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default DashLayout;
