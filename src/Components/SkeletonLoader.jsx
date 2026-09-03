import React from 'react';

export const SkeletonBox = ({ className = "" }) => (
  <div 
    className={`bg-slate-200/80 dark:bg-white/5 rounded-2xl skeleton-shimmer animate-pulse ${className}`} 
  />
);

export const ProjectCardSkeleton = () => (
  <div className="rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 p-6 flex flex-col gap-4 shadow-sm">
    <SkeletonBox className="w-full h-52 rounded-2xl" />
    <div className="flex items-center justify-between mt-2">
      <SkeletonBox className="w-24 h-4 rounded-full" />
      <SkeletonBox className="w-16 h-4 rounded-full" />
    </div>
    <SkeletonBox className="w-3/4 h-6 rounded-lg" />
    <SkeletonBox className="w-full h-12 rounded-lg" />
    <div className="flex gap-2 mt-2">
      <SkeletonBox className="w-20 h-6 rounded-full" />
      <SkeletonBox className="w-20 h-6 rounded-full" />
      <SkeletonBox className="w-20 h-6 rounded-full" />
    </div>
    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
      <SkeletonBox className="flex-1 h-10 rounded-full" />
      <SkeletonBox className="w-10 h-10 rounded-full" />
    </div>
  </div>
);

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-[#0d0f17] text-slate-800 dark:text-slate-100 px-4 sm:px-6 lg:px-8 py-6 w-full max-w-7xl mx-auto flex flex-col gap-12 animate-fadeIn">
      
      {/* Top Navbar Skeleton */}
      <div className="flex items-center justify-between py-3 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-3">
          <SkeletonBox className="w-10 h-10 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <SkeletonBox className="w-28 h-4 rounded-md" />
            <SkeletonBox className="w-20 h-3 rounded-md" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5">
          <SkeletonBox className="w-14 h-4 rounded-full" />
          <SkeletonBox className="w-14 h-4 rounded-full" />
          <SkeletonBox className="w-14 h-4 rounded-full" />
          <SkeletonBox className="w-16 h-4 rounded-full" />
          <SkeletonBox className="w-16 h-4 rounded-full" />
          <SkeletonBox className="w-14 h-4 rounded-full" />
        </div>

        <div className="flex items-center gap-3">
          <SkeletonBox className="w-9 h-9 rounded-full" />
          <SkeletonBox className="w-24 h-9 rounded-full" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-12">
        {/* Left Content Skeleton */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Status Badge */}
          <SkeletonBox className="w-48 h-7 rounded-full" />

          {/* Heading Lines */}
          <div className="flex flex-col gap-3 my-2">
            <SkeletonBox className="w-3/4 h-10 sm:h-12 rounded-xl" />
            <SkeletonBox className="w-full h-10 sm:h-12 rounded-xl" />
            <SkeletonBox className="w-2/3 h-10 sm:h-12 rounded-xl" />
          </div>

          {/* Subtitle / Paragraph */}
          <div className="flex flex-col gap-2 my-1 max-w-xl">
            <SkeletonBox className="w-full h-4 rounded-md" />
            <SkeletonBox className="w-5/6 h-4 rounded-md" />
            <SkeletonBox className="w-4/6 h-4 rounded-md" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <SkeletonBox className="w-36 h-12 rounded-full" />
            <SkeletonBox className="w-32 h-12 rounded-full" />
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 mt-4">
            <SkeletonBox className="w-10 h-10 rounded-xl" />
            <SkeletonBox className="w-10 h-10 rounded-xl" />
            <SkeletonBox className="w-10 h-10 rounded-xl" />
          </div>
        </div>

        {/* Right Hero Visual Skeleton */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 p-6 flex flex-col items-center justify-center gap-4 shadow-sm">
            <SkeletonBox className="w-48 h-48 sm:w-56 sm:h-56 rounded-full" />
            <div className="flex items-center gap-2 mt-2">
              <SkeletonBox className="w-24 h-6 rounded-full" />
              <SkeletonBox className="w-24 h-6 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex flex-col items-center gap-2 py-2">
            <SkeletonBox className="w-16 h-8 rounded-lg" />
            <SkeletonBox className="w-24 h-4 rounded-md" />
          </div>
        ))}
      </div>

      {/* Featured Projects Grid Skeleton */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex flex-col items-center gap-2 text-center mb-4">
          <SkeletonBox className="w-28 h-4 rounded-full" />
          <SkeletonBox className="w-64 h-8 rounded-xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>

    </div>
  );
};

export default HomeSkeleton;
