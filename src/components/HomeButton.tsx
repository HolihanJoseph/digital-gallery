import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const HomeButton = () => {
  return (
    <Link to="/" className='w-45 h-12 items-center card flex flex-row gap-3 ml-1 rounded-2xl hover:underline'>
        <FaArrowLeftLong color='white' size={25} />
        <h3 className='text-xl'>Return home</h3>
  </Link>
  )
}

export default HomeButton