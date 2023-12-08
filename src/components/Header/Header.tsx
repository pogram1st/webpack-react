import {Link} from "react-router-dom";
import React from "react";

export const Header = () => {
    return (
        <div className={'header'}>
            <Link to={`/`}>Home</Link>
            <Link to={`/posts`}>Posts</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/shop`}>Shop</Link>
        </div>
    );
};
