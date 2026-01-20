import React from 'react';

export const ProjectSkeleton: React.FC = () => {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-sm h-[300px] relative animate-pulse">
      <div className="w-full h-full bg-gray-200"></div>
      <div className="absolute bottom-0 right-0 p-8 w-full">
        <div className="h-4 bg-gray-300 rounded w-20 mb-3"></div>
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};