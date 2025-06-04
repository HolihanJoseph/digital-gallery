
import MasonryGallery from './MasonryGallery';
import { MediaItem } from './MasonryGallery'

type Props = {
    title: string;
    desc: string;
    images: MediaItem[];
}

const CategoryContent = ({title, desc, images}: Props) => {
  return (
    <div>

    <h1 className='justify-self-center mb-4'>{title}</h1>
    <div className='text-xl mx-3 mb-6'>
        {desc}
    </div>
    <div className='mx-3'>
        <MasonryGallery mediaItems={images}/>
    </div>
</div>
  )
}

export default CategoryContent