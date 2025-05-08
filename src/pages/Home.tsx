import React from 'react'

import MasonryGallery from '../components/MasonryGallery'
import PreviewCard from '../components/PreviewCard';

const YellowstoneImages = [
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstonePelican.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/BrianFlyFish.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/RoadBear.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneStars.jpg' },

];

const DolomiteImages = [
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/trail-and-layers.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/jagged-peaks.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/grazing-cow.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/wood-refugio.JPG' },
];

const AmhrestImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/barn.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/tree-and-table.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/ct-river.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/greylock-cabin.jpg'},
];

const NewEnglandImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/wilson-morning.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/camel-camp.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/cutting-clouds.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/lye-brook-trail.jpg'},
]

const blankImageArray = [
  {type: 'image', src: ''},
  {type: 'image', src: ''},
  {type: 'image', src: ''},
];

const Home = () => {
  return (
    <div className='p-2 grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-4 gap-4'>
      <PreviewCard route="/yellowstone" title="Yellowstone National Park" images={YellowstoneImages}/>
      <PreviewCard route="/dolomites" title="Dolomites - Alta Via 1" images={DolomiteImages}/>
      <PreviewCard route="/westernmass" title="Western Massachusetts" images={AmhrestImages}/>
      <PreviewCard route="/newengland" title="New England" images={NewEnglandImages}/>
    </div>
  )
}

export default Home