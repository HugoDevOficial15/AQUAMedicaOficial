import { useState } from "react";

import GalleryMain from "./GalleryMain";
import GalleryThumbs from "./GalleryThumbs";
import GalleryLightbox from "./GalleryLightbox";
import GalleryVideoModal from "./GalleryVideoModal";

import planta1 from "../../../assets/images/about/planta-1.jpeg";
import planta2 from "../../../assets/images/about/planta-2.jpeg";
import planta3 from "../../../assets/images/about/planta-3.jpeg";
import planta4 from "../../../assets/images/about/planta-4.jpeg";
import planta5 from "../../../assets/images/about/planta-5.jpeg";
import planta6 from "../../../assets/images/about/planta-6.jpeg";
// import planta7 from "../../../assets/images/about/planta-7.jpeg";
// import planta8 from "../../../assets/images/about/planta-8.jpeg";

import plantaVideo from "../../../assets/videos/about/aqua.mp4";

const images = [
    planta5,
    planta2,
    planta3,
    planta4,
    planta1,
    planta6,
    // planta7,
    // planta8
];

export default function AboutGallery() {

    const [current, setCurrent] = useState(0);

    const [lightbox, setLightbox] = useState(false);

    const [videoOpen, setVideoOpen] = useState(false);

    const next = () => {

        setCurrent((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );

    };

    const prev = () => {

        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    };

    return (

        <div className="about-gallery">

            <GalleryMain

                image={images[current]}

                current={current}

                total={images.length}

                next={next}

                prev={prev}

                open={() => setLightbox(true)}

            />

            <GalleryThumbs

                images={images}

                current={current}

                setCurrent={setCurrent}

                openVideo={() => setVideoOpen(true)}

            />

            {lightbox && (

                <GalleryLightbox

                    image={images[current]}

                    onClose={() => setLightbox(false)}

                    next={next}

                    prev={prev}

                />

            )}

            {videoOpen && (

                <GalleryVideoModal

                    video={plantaVideo}

                    onClose={() => setVideoOpen(false)}

                />

            )}

        </div>

    );

}