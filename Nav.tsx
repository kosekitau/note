import React, { useState, useEffect } from "react";
import "./Nav.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)//あらかじめ使用するアイコンを追加しておく

export const Nav = () => {
    const [show, setShow] = useState(false);
    const [hh, setHh] = useState(0);
    
    useEffect(() => {
        //一定数スクロールしたら-footer-animationクラスを付与し、
        //そのクラスにscssが反応する
        const handleShow = () => {
          //window.scrollYでどのくらいスクロールしたかを取得
          let nowh = window.scrollY;
          setHh(nowh);
          //下にスクロールしたら
          if (nowh > hh) {
            setShow(true);
            console.log(hh, nowh);
          } else {
            setShow(false);
            console.log(hh, nowh);
          }
        };
        
        //少しでもスクロールしたら
        window.addEventListener("scroll", handleShow);
        return () => {
          window.removeEventListener("scroll", handleShow);
        };
    });//この[]に引数を入れる
    return (
        <div className={`Nav ${show && "Nav-footer-animation"}`}>
            <FontAwesomeIcon icon={['fas', 'search']} className="roope" style={{color:'grey'}} size='1x'/>
            <p>ログイン</p>
            <input className="newbutton" type="button" value="新規登録"></input>
        </div>
    );
}