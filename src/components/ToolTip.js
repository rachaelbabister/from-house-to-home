import React, { useState, useRef } from "react";
import { Tooltip, Overlay } from "react-bootstrap";

function ToolTip({ id, title, children, placement }) {
    const [show] = useState(false);
    const target = useRef(null);

    return (
        <>
            <span ref={target} style={{ cursor: "pointer" }}>
                {children}
            </span>
            boolean ?
            <Overlay target={target.current} show={show} placement="top">
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
