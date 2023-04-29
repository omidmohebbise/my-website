
import React from 'react';

function MainLayout(props: any) {
    return (<div className="container">
        <div className="header"></div>
        <div className="main-body">{props.children}</div>
        <div className="footer"></div>
    </div>)
}

export default MainLayout;