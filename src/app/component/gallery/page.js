import { motion } from 'framer-motion';

export default function ImageGallery() {
    const images = [
        { src: '/img1.jpg', alt: 'Image 1' },
        { src: '/img1.jpg', alt: 'Image 2' },
        { src: '/header.png', alt: 'Image 3' },
        { src: '/img1.jpg', alt: 'Image 4' },
        { src: '/github.png', alt: 'Image 5' },
        { src: '/img1.jpg', alt: 'Image 6' },
    ];

    return (
        <div className="px-8 mx-16 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} // Trigger animation once when in view
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
                    >
                        <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            style={{
                                aspectRatio: image.src === '/github.png' ? '16/9' : '4/3',  // Adjust aspect ratio conditionally
                            }}
                            whileHover={{ scale: 1.05 }} // Zoom in effect on hover
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}   
