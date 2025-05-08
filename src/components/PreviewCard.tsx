import React from 'react'
import { MediaItem } from './MasonryGallery'
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    images: MediaItem[];
    route: string;
}

const breakpointColumns = {
    default: 2,
};

const PreviewCard = ({title, images, route}: Props) => {
  return (
    <Link to={route} className='card hover:underline decoration-2'>
        <div className='px-4 mb-3 mt-2 text-3xl font-semibold'>
            {title}
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 p-4'>
            {images.map((item, i) => (
                <img src={item.src} alt={`Media ${i}`} className="w-full h-auto object-cover aspect-square rounded" />
            ))}
        </div>
    </Link>
  )
}

export default PreviewCard