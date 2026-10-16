import { FaTimes } from "react-icons/fa";

export default function GalleryVideoModal({

    video,

    onClose

}) {

    return (

        <div
            className="gallery-video-modal"
            onClick={onClose}
        >

            <div
                className="gallery-video-container"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="gallery-video-close"
                    onClick={onClose}
                >

                    <FaTimes />

                </button>

                <video

                    className="gallery-video-player"

                    src={video}

                    controls

                    autoPlay

                    playsInline

                />

            </div>

        </div>

    );

}