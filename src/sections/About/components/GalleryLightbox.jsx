import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GalleryLightbox({

    image,

    onClose,

    next,

    prev

}) {

    return (

        <div
            className="gallery-lightbox"
            onClick={onClose}
        >

            <button
                className="gallery-lightbox-close"
                onClick={onClose}
            >

                <FaTimes />

            </button>

            {prev && (

                <button
                    className="gallery-lightbox-arrow left"
                    onClick={(e) => {

                        e.stopPropagation();

                        prev();

                    }}
                >

                    <FaChevronLeft />

                </button>

            )}

            <img
                src={image}
                alt=""
                className="gallery-lightbox-image"
                onClick={(e) => e.stopPropagation()}
            />

            {next && (

                <button
                    className="gallery-lightbox-arrow right"
                    onClick={(e) => {

                        e.stopPropagation();

                        next();

                    }}
                >

                    <FaChevronRight />

                </button>

            )}

        </div>

    );

}