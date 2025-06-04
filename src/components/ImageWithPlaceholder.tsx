import {useState} from 'react'

type Props = {
    src: string;
    alt?: string;
    placeholder?: string;
    className?: string;
}

const ImageWithPlaceholder = ({src, placeholder, alt, className}: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    return (
        <div className={`relative ${className}`}>
            {!isLoaded && (
                placeholder ? (
                    <img
                        src={placeholder}
                        className="absolute inset-0 w-full h-full object-cover animate-pulse"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-700 animate-pulse">
                    
                    </div>
                )
            )}
                 <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)} // fallback to hide placeholder
                    className={`transition-opacity duration-300 ease-in-out object-cover w-full h-full ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
        </div>
  )
}

export default ImageWithPlaceholder