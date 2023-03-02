import React from 'react';

const Gallery = () => {
  return (
    <div>
        {/* Pictures */}
        <div>
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
            <div>
                Pictures are here
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
