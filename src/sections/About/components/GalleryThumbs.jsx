import { FaPlay } from "react-icons/fa";

export default function GalleryThumbs({

    images,

    current,

    setCurrent,

    openVideo

}) {

    return (

        <div className="gallery-thumbs">

            <div
                className="gallery-thumb video-thumb"
                onClick={openVideo}
            >

                <img
                    src={images[0]}
                    alt="Video"
                />

                <div className="video-thumb-overlay">

                    <FaPlay />

                    <span>VIDEO</span>

                </div>

            </div>



            {images.map((image, index) => (

                <div

                    key={index}

                    className={`gallery-thumb ${current === index ? "active" : ""}`}

                    onClick={() => setCurrent(index)}

                >

                    <img

                        src={image}

                        alt={`Planta ${index + 1}`}

                    />

                </div>

            ))}


        </div>

    );

}