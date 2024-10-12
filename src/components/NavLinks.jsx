
import React from "react";

const NavLinks = ({ name, url_link }) => {
  return (
    <ul>
    <li className="list-none mb-[20px] flex items-center cursor-pointer">
    <a href={url_link} className="rounded-md w- [200px] h-[20px]">{name}
        </a>
  </li>
    </ul>
  );
}

export default NavLinks;
