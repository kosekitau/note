import React, { useState, useEffect } from "react";
import "./Unav.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)//あらかじめ使用するアイコンを追加しておく

export const Unav = () => {
    const [good, setIine] = useState(false);
    const [count_good, setIines] = useState(0);
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

    const hanten = () =>{
        const good2 = !good;
        const count_good2 = (count_good+1)%2;
        setIine(good2);
        setIines(count_good2);
    };
    const list = [];
    for(var i=0;i<100;i++){
        list.push(<p>٩(^‿^)۶٩( ᐛ )و</p>)
    }
    
    return (
        <div className='main'>
            <div className='text'>
                <img className='react_logo' src='logo512.png'/>
                <div className='title'>
                    【React】Noteみたいなやつ
                </div>
                <p>
                    {good ? (
                        <FontAwesomeIcon icon={['fas', 'heart']} style={{color:'pink'}} size='1x' fixedWidth/>
                        ) : (
                        <FontAwesomeIcon icon={['far', 'heart']} style={{color:'gray'}} size='1x' fixedWidth/>
                        )
                    }
                    <span>{count_good}</span>
                </p>
                <div className='user_data'>
                    <FontAwesomeIcon icon={['far', 'user']} style={{color:'green'}} size='2x' fixedWidth/>
                    <div className='user_name'>
                        kosekitau<br />
                        1111/11/11 22:22
                    </div>
                </div>
                
                {/*　↓TEXT入れたい　*/}
                <p>{list}</p>

                <div className='user_profile'>
                    <div className='icon'>
                        {good ? (
                            <FontAwesomeIcon icon={['fas', 'heart']} style={{color:'pink'}} size='2x' fixedWidth/>
                            ) : (
                            <FontAwesomeIcon icon={['far', 'heart']} style={{color:'gray'}} size='2x' fixedWidth/>
                            )
                        }
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} style={{color:'gray'}} size='2x' fixedWidth/>
                        <FontAwesomeIcon icon={['fab', 'twitter']} style={{color:'skyblue'}} size='2x'/>
                        <FontAwesomeIcon icon={['fab', 'facebook']} style={{color:'blue'}} size='2x'/>
                        <FontAwesomeIcon icon={['fab', 'line']} style={{color:'green'}} size='2x'/>
                        <FontAwesomeIcon icon={['far', 'user']} style={{color:'green'}} size='2x' fixedWidth/>
                        <div className='user_name'>
                            kosekitau<br />
                        </div>
                    </div>
                    <div className='profile'></div>
                </div>

            </div>

            <div className={`Unav ${show && "Unav-footer-animation"}`}>
                <div className='iine_button' onClick={() => hanten()}>
                    {good ? (
                        <FontAwesomeIcon icon={['fas', 'heart']} style={{color:'pink'}} size='2x' fixedWidth/>
                        ) : (
                        <FontAwesomeIcon icon={['far', 'heart']} style={{color:'gray'}} size='2x' fixedWidth/>
                        )
                    }
                    <span>{count_good}</span>
                    <FontAwesomeIcon icon={['fas', 'plus']} style={{color:''}} size='2x'/>
                    <FontAwesomeIcon icon={['far', 'clone']} style={{color:'gray'}} size='2x'/>
                    <FontAwesomeIcon icon={['fab', 'twitter']} style={{color:'gray'}} size='2x'/>
                    <FontAwesomeIcon icon={['fab', 'facebook']} style={{color:'gray'}} size='2x'/>
                    <FontAwesomeIcon icon={['fab', 'line']} style={{color:'gray'}} size='2x'/>
                </div>
            </div>
        </div>
    );
}