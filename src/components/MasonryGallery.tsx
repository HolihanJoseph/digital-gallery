import React from 'react'
import Masonry from 'react-masonry-css';



export type MediaItem  = {
  type: string;
  src: string;
};

interface MasonryGalleryProps{
  mediaItems: MediaItem[]
};

const breakpointColumns = {
    850:  2,
    800: 1,
};

const MasonryGallery = ({mediaItems}: MasonryGalleryProps) => {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-auto gap-4"
      columnClassName="masonry-column"
    >
      {mediaItems.map((item, i) => (
        <div key={i} className="mb-4 rounded overflow-hidden shadow">
          {item.type === 'image' ? (
            <img src={item.src} alt={`Media ${i}`} className="w-full h-auto object-cover" />
          ) : (
            <video
              controls
              preload="metadata"
              className="w-full h-auto object-cover"
              src={item.src}
            />
          )}
        </div>
      ))}
    </Masonry>
  )
}

export default MasonryGallery