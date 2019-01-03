import React from "react";
import { Link } from 'react-router-dom'

export default function SocialLinks() {
  return (
    <div className="logo">
      <Link className="navbar-link" to={"/"}>
        <img src="/imgs/logo.png" alt="" className="logo-img" />
      </Link>
    </div>
  );
}
