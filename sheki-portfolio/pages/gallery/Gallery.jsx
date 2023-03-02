import React from 'react';
import Image from 'next/image';

import Pic1 from '../../public/gallery/pic1.jpg';
import Pic2 from '../../public/gallery/pic2.jpg';
import Pic3 from '../../public/gallery/pic3.jpg';
import Pic4 from '../../public/gallery/pic4.jpg';
import Pic5 from '../../public/gallery/pic5.jpg';
import Pic6 from '../../public/gallery/pic6.jpg';
import Pic7 from '../../public/gallery/pic7.jpg';
import Pic8 from '../../public/gallery/pic8.jpg';
import Pic9 from '../../public/gallery/pic9.jpg';
import Pic10 from '../../public/gallery/pic10.jpg';
import Pic11 from '../../public/gallery/pic11.jpg';
import Pic12 from '../../public/gallery/pic12.jpg';

const Gallery = () => {
  return (
    <div className='h-fit w-screen'>
        {/* Filter Items */}
        <div>
            <ul className='flex flex-row'>
                <li><a href="">All</a></li>
                <li><a href="">Human</a></li>
                <li><a href="">Nature</a></li>
                <li><a href="">Country</a></li>
                <li><a href="">Video</a></li>
            </ul>
        </div>

        {/* Pictures */}
        <div className='flex flex-row p-5 justify-between w-fit'>
            {/* Column 1 */}
            <div className='flex flex-col justify-between pr-5'>
                {/* Pic 1 */}
                <div>
                    <Image src={Pic1} />
                </div>

                {/* Pic 2 */}
                <div>
                    <Image src={Pic2} />
                </div>

                {/* Pic 3 */}
                <div>
                    <Image src={Pic3} />
                </div>
            </div>

            {/* Column 2 */}
            <div className='flex flex-col justify-between pr-5'>
                {/* Pic 1 */}
                <div>
                    <Image src={Pic4} />    
                </div>

                {/* Pic 2 */}
                <div>
                    <Image src={Pic5} />
                </div>

                {/* Pic 3 */}
                <div>
                    <Image src={Pic6} />                    
                </div>
            </div>

            {/* Column 3 */}
            <div className='flex flex-col justify-between pr-5'>
                {/* Pic 1 */}
                <div>
                    <Image src={Pic7} />
                </div>

                {/* Pic 2 */}
                <div>
                    <Image src={Pic8} />
                </div>

                <div>
                    <Image src={Pic9} />
                </div>
            </div>

            {/* Column 4  */}
            <div className='flex flex-col justify-between'>
                {/* Pic 1 */}
                <div>
                    <Image src={Pic9} />
                </div>

                {/* Pic 2 */}
                <div>
                    <Image src={Pic10} />
                </div>

                <div>
                    <Image src={Pic10} />
                </div>
            </div>
        </div>

        {/* Button */}
        <div>
            <button>
                View More
            </button>
        </div>
    </div>
  )
}

export default Gallery          
