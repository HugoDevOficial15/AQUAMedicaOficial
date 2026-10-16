import {
    FaChevronLeft,
    FaChevronRight,
    FaExpand,
    FaImages
} from "react-icons/fa";

export default function GalleryMain({

    image,

    current,

    total,

    next,

    prev,

    open

}) {

    return (

        <div className="gallery-main">

            <img
                src={image}
                alt=""
                className="gallery-main-image"
            />

            <div className="gallery-overlay"></div>

            <button
                className="gallery-arrow gallery-arrow-left"
                onClick={prev}
            >

                <FaChevronLeft />

            </button>

            <button
                className="gallery-arrow gallery-arrow-right"
                onClick={next}
            >

                <FaChevronRight />

            </button>

            <div className="gallery-counter">

                {current + 1}

                <span>

                    / {total}

                </span>

            </div>

            <div className="gallery-actions">

                <button
                    className="gallery-action"
                    onClick={open}
                >

                    <FaExpand />

                    Ampliar

                </button>

                <button
                    className="gallery-action"
                >

                    <FaImages />

                    Galería

                </button>

            </div>

        </div>

    );

}