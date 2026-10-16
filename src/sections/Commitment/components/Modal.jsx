import { FaTimes } from "react-icons/fa";

export default function Modal({

    title,

    subtitle,

    children,

    close

}) {

    return (

        <div
            className="commitment-modal-overlay"
            onClick={close}
        >

            <div
                className="commitment-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button

                    className="commitment-modal-close"

                    onClick={close}

                >

                    <FaTimes />

                </button>

                <div className="commitment-modal-header">

                    <span>

                        AQUA MÉDICA

                    </span>

                    <h2>

                        {title}

                    </h2>

                    <p>

                        {subtitle}

                    </p>

                </div>

                <div className="commitment-modal-body">

                    {children}

                </div>

            </div>

        </div>

    );

}