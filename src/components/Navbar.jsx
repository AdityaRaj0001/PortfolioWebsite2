import React from "react";
import { useState } from "react";
import Navlink from "./Navlink";
import Navdata from "./datasrc";

const navbar = () => {

  const [ismenuClicked, setismenuClicked] = useState(false)

  return (
    <div>
      <nav className={"navbar target" + (ismenuClicked?" change ":"")}  onClick={()=>{setismenuClicked(!ismenuClicked)}}>
        {Navdata.map((data)=>{
          return <Navlink key={data.id} {...data}/>
        })}
      </nav>
      <div className={"menu target" + (ismenuClicked?" change ":"")} onClick={()=>{setismenuClicked(!ismenuClicked)}}></div>
    </div>
  );
};

export default navbar;
