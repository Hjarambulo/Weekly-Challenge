import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>MY BLOG</h1>
            <div className="btn-group">
                <Link to="/" className="btn">Home</Link>
                <Link to="/addArticle" className="btn">Agregar post</Link>
            </div>
        </div>
    )
}
