import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Pic1 from '../public/gallery/pic1.jpg';
import Pic2 from '../public/gallery/pic2.jpg';
import Pic3 from '../public/gallery/pic3.jpg';
import Pic4 from '../public/gallery/pic4.jpg';
import Pic5 from '../public/gallery/pic5.jpg';
import Pic6 from '../public/gallery/pic6.jpg';

const Portfolio = () => {

  const [isHovering, setIsHovering] = useState(-1)

  const handleMouseOver = (index) => {
    setIsHovering(index);
  };

  const handleMouseOut = () => {
    setIsHovering(-1);
  }

  const images = [
    {
      id:'1',
      src:'/../public/gallery/pic1.jpg',
      alt:'Pic1',
      text: "Event 1"
    },
    {
      id:'2',
      src:'/../public/gallery/pic6.jpg',
      alt:'Pic2',
      text: "Event 2"
    },
    {
      id:'3',
      src:'/../public/gallery/pic5.jpg',
      alt:'Pic3',
      text: "Event 3"
    },
    {
      id:'4',
      src:'/../public/gallery/pic6.jpg',
      alt:'Pic4',
      text: "Event 4"
    },
  ]

  return (
    <div id='portfolio'>
      <div>
        <h1>Here are links to my work</h1>
      </div>

      <div className='flex flex-row p-5 justify-between w-fit'>
        <div className='flex flex-col justify-between pr-5'>
          <div className='h-fit w-fit'>
            <Link href="/"
              className='flex flex-wrap flex-row justify-evenly'
            >
              {images.map((image, index) =>(
                <div key={index} className='p-5 relative'>
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                  />
                  {isHovering === index && (
                    <div>
                      <div className='absolute inset-0 bg-overblack opacity-90 z-10' />

                      <div className='absolute inset-y-1/3 left-1/3 text-ml font-bold text-center text-thistle'>
                        {image.text.split('\n').map((line, index) => (
                          <h3 key={index}>{line}</h3>
                        ))}
                        <AddCircleOutlineIcon />
                      </div>
                    </div>                    
                  )}
                </div>     
              ))}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

