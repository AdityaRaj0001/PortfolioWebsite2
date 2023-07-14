import React from 'react'

const navlink = ({url,icon_class,url_text}) => {
  return (
    <a href={url} className="navbar-link">
          <i className={icon_class}></i>
          <span>{url_text}</span>
        </a>
  )
}

export default navlink