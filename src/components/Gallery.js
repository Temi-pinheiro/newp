/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef } from 'react';
import { GalleryImage } from './GalleryImage';
import { useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  const getTargetScale = (index) => 1 - (6 - index) * 0.05;
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  /* Screenshot 2024-02-11 at 14.05 1 */

  return (
    <div ref={container} className='h-full relative w-full '>
      <GalleryImage
        key='1'
        targetScale={getTargetScale(0)}
        progress={scrollYProgress}
        range={[0 * 0.16, 1]}
        index={0}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[650px] '>
            To my <br />
            forever <span className='text-[#f8aab9]'>valentine, </span>
            <br />i bless the day God made you{' '}
            <span className='text-[#f8aab9]'>mine</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <img src='/belle.jpg' alt='bae' className='w-full h-auto -mt-10' />
          </div>
        </div>
        <span className='absolute bottom-[40px] left-[60px] font-bold text-[#f8aab9]'>
          (scroll pls)
        </span>
      </GalleryImage>
      <GalleryImage
        key='2'
        targetScale={getTargetScale(1)}
        progress={scrollYProgress}
        range={[1 * 0.16, 1]}
        index={1}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[650px] '>
            I know i've asked once or twice{' '}
            <span className='text-[#f8aab9]'>before,</span>
            <br />
            but just one more time to be{' '}
            <span className='text-[#f8aab9]'>sure</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <img src='/start.jpg' alt='bae' className='w-full h-auto -mt-20' />
          </div>
        </div>
      </GalleryImage>
      <GalleryImage
        key='3'
        targetScale={getTargetScale(2)}
        progress={scrollYProgress}
        range={[2 * 0.16, 1]}
        index={2}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[623px] '>
            One more <span className='text-[#f8aab9]'>time</span> before the
            clock strikes <span className='text-[#f8aab9]'>nine,</span>
            <br />
            will you be my <span className='text-[#f8aab9]'>valentine?</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <img src='/test.jpg' alt='bae' className='w-full h-auto' />
          </div>
        </div>
      </GalleryImage>
      <GalleryImage
        key='4'
        targetScale={getTargetScale(3)}
        progress={scrollYProgress}
        range={[3 * 0.16, 1]}
        index={3}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[623px] w-full'>
            I love you so much
            <br /> youre my favorite{' '}
            <span className='text-[#f8aab9]'>gift,</span>
            <br /> so{' '}
            <a
              target='_blank'
              href='https://wa.me/2348180904189?text=One%20pink%20knit%20hat%20please!'
              className='underline underline-offset-4 decoration-[#F8DCE1]'
            >
              here's yours
            </a>{' '}
            and i hope you like <span className='text-[#f8aab9]'>it</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <img src='/gift.jpg' alt='bae' className='w-full h-auto' />
          </div>
        </div>
      </GalleryImage>
      <GalleryImage
        key='5'
        targetScale={getTargetScale(4)}
        progress={scrollYProgress}
        range={[4 * 0.16, 1]}
        index={4}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[623px] w-full'>
            Thank you for joining me on this{' '}
            <span className='text-[#f8aab9]'>ride</span>
            <br />i just had to prove that im that{' '}
            <span className='text-[#f8aab9]'>guy</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <video
              src='/best.mov'
              className=' w-full h-auto'
              controls
              playsInline
            />
          </div>
        </div>
        <span className='absolute bottom-[40px] left-[60px] font-bold text-[#f8aab9]'>
          (click on the video pls)
        </span>
      </GalleryImage>
      <GalleryImage
        key='6'
        targetScale={getTargetScale(5)}
        progress={scrollYProgress}
        range={[5 * 0.16, 1]}
        index={5}
      >
        <div className='flex items-center justify-between text-[60px] leading-tight h-full'>
          <p className='max-w-[623px] w-full'>
            Cheers in advance to another{' '}
            <span className='text-[#f8aab9]'>chapter</span>
            <br />
            the second valentine's day in our happily ever
            <span className='text-[#f8aab9]'> after.</span>
          </p>
          <div className='w-[40%] rounded-[25px] h-full flex items-center justify-center overflow-clip'>
            <img src='/twins.jpg' alt='bae' className='w-full h-auto' />
          </div>
        </div>
      </GalleryImage>
    </div>
  );
};
