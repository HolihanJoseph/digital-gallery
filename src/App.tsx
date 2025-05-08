import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import CategoryContent from "./components/CategoryContent";
import HomeButton from "./components/HomeButton";
import ScrollToTop from "./components/ScrollToTop";

const DolomiteImages = [
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/alpacas.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/jagged-peaks.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/beast-in-distance.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/basking-cows.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/belluno.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/beast-landscape.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/capped-mountain.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/cliffs.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/glade-and-cloud.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/grassy-hills.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/grazing-cow.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/lake-spire.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/path-to-wall.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/rainbow.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/rock-above-tree.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/stone-cabins.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/sunrise-clouds.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/the-vista.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/trail-and-layers.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/wall-mountain.JPG' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Dolomite/wood-refugio.JPG' },
];

const YellowstoneImages = [
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneBisonCloseUpBW.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneBirdOnBranch.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/RoadBear.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/BuffaloFlyFishing.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/BrianFlyFish.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstonePelican.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/PrairieDog.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneMilkyWay.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneStars.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneCubs.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneMamaBear.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/AntelopeYellowstone.jpg' },
  { type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Yellowstone/YellowstoneBeaver.jpg' },
];

const AmherstImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/barn.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/berk-camp.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/berk-valley.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/tree-and-table.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/cloudy-sky.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/cow-flowers.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/ct-river-rays.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/ct-river.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/fire-lookout.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/floating-leaf.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/foliage-golden.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/greylock-cabin.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/greylock-pano.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/greylock-sunset.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/greylock-view.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/lithia-foliage.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/lithia-lens-flare.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/lone-tree.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/parachutes.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/pioneer-valley.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/riverwalk-path.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/snowy-holyoke.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/WesternMass/snowy-ski-house-cropped.jpg'},

];

const MaineImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/fire-tower-view.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/MooseDockSunset.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/wilson-morning.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/sunset-cloud.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/lake-overlook.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/dive.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/MtKValley.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/baxter.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/MtKKnifesEdge.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Maine/pond-and-hill.jpg'},
];

const VermontImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/lye-brook-trail.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/bourne-pond.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/henny-dog.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/Vermont/camel-camp.jpg'},
];

const NHImages = [
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/leaf-peeping.jpg'},

  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/cutting-clouds.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/choco-golden.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/mt-crawford.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/newfound-moon.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/newfound-beach.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/rocky-summit.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/mt-welch.jpg'},

  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/mt-dickey.jpg'},
  {type: 'image', src: 'https://biff-gallery-photos.s3.us-east-1.amazonaws.com/NewHampshire/crawford-river.jpg'},
];


const blankImageArray = [
  {type: 'image', src: ''},
  {type: 'image', src: ''},
  {type: 'image', src: ''},
];

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col max-w-screen-2xl mx-auto px-2 py-1">
        <h1 className="mb-3 mt-4 mx-2">Photography and Videography</h1>
        <h2 className="mb-4 mx-2">Joseph Holihan</h2>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/yellowstone" element={
            <>
              <HomeButton/>
              <CategoryContent
                title="Yellowstone National Park"
                desc="Yellowstone is home to incredible wildlife and big skies."
                images={YellowstoneImages}
              />
              <HomeButton/>
            </>
          }/>
          <Route path="/dolomites" element={
            <>
              <HomeButton/>
              <CategoryContent
                title="Dolomites - Hiking Alta Via 1"
                desc="The Alta Via 1 is a hiking trail in the Italian Alps. For 10 days and 80 miles, we experienced endless vistas of the landscape."
                images={DolomiteImages} 
              />
              <HomeButton/>
            </>
          }/>
          <Route path="/westernmass" element={
            <>
              <HomeButton/>
              <CategoryContent
                title="Western Massachusetts"
                desc="The Pioneer valley and Berkshires regions."
                images={AmherstImages}
              />
              <HomeButton/>
            </>
          }/>
          <Route path="newengland" element={
            <>
              <HomeButton/>
              <CategoryContent
                title="Maine"
                desc="Moosehead Lake, Rangley, and Mount Katahdin"
                images={MaineImages}
              />
              <CategoryContent
                title="Vermont"
                desc="Bourne Pond, Camels Hump, and stowe" 
                images={VermontImages}
              />
              <CategoryContent
                title="New Hampshire"
                desc="White Mountain National Park and Newfound lake"
                images={NHImages}
              />
              <HomeButton/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
