import React from "react";
import Home_Content from "../Home/home_content/Home_Content";
import OuterBox from "../Home/home_content/OuterBox";
import InnerBox from "../Home/home_content/what_we_do/InnerBox";
import InnerBoxTemplate from "../Home/home_content/InnerBoxTemplate";
import whatWeDoArr from "../../utils/whatWeDoArr";
export default function WhatWeDo(){
    return (
        <>
            <div className="w-full h-auto bg-blue-500">
                <img src="https://i-probono.com/wp-content/uploads/2023/08/gf.jpg" className="px-10"/>
            </div>
            <OuterBox title="What we do">
                {
                <InnerBoxTemplate>
                    {whatWeDoArr.map((el, i) => (
                    <InnerBox img_url={el.img_url} innerText={el.innerText} key={i} />
                    ))}
                </InnerBoxTemplate>
                }
            </OuterBox>
        </>
    )
}