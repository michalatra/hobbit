import React from "react";

const ContentContainer = (props: any) => {
    return <div className="container">
        {props.children}
    </div>
}

export default ContentContainer;