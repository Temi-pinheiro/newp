/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useTransform, motion } from 'framer-motion';
import Link from 'next/link';
export const GalleryImage = ({
  index,
  progress,
  range,
  targetScale,
  children,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className='w-full h-[100vh] flex items-center justify-center sticky top-0 case'>
      <motion.div
        style={{ top: `calc(-1vh + ${index * 12.5}px)`, scale }}
        className=' overflow-clip relative origin-top rounded-[40px] w-[83%] shadow-red-300 shadow-2xl h-[55%]'
      >
        <div className='w-full h-full flex items-center bg-white relative px-[60px] py-[40px] '>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
