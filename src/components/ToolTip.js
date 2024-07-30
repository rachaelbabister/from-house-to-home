import React, { useState, useRef } from "react";
import { Tooltip, Overlay } from "react-bootstrap";

function ToolTip({ id, title, children, placement }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <span
                ref={target}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                style={{ cursor: "pointer" }}>
                {children}
            </span>
            <Overlay target={target.current} show={show} placement={placement}>
                {(props) => (
                    <Tooltip id={id} {...props}>
                        {title}
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default ToolTip;
