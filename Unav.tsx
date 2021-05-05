import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)//あらかじめ使用するアイコンを追加しておく

export const Unav = () => {
    const [iine, setIine] = useState(false);
    const [iines, setIines] = useState(0);
    
    const hanten = () =>{
        const iine2 =  !iine;
        const iines2 = (iines+1)%2;
        setIine(iine2);
        setIines(iines2);
    };
    
    return (
        <div className="app-background">
            <div className='iine_button' onClick={() => hanten()}>
                {iine ? (
                    <FontAwesomeIcon icon={['fas', 'heart']} style={{color:'pink'}} size='2x' fixedWidth/>
                    ) : (
                    <FontAwesomeIcon icon={['far', 'heart']} style={{color:'pink'}} size='2x' fixedWidth/>
                    )
                }
                <span>{iines}</span>
                <FontAwesomeIcon icon={['fas', 'plus']} style={{color:'gray'}} size='2x'/>
                <FontAwesomeIcon icon={['far', 'clone']} style={{color:'gray'}} size='2x'/>
                <FontAwesomeIcon icon={['fab', 'twitter']} style={{color:'gray'}} size='2x'/>
                <FontAwesomeIcon icon={['fab', 'facebook']} style={{color:'gray'}} size='2x'/>
                <FontAwesomeIcon icon={['fab', 'line']} style={{color:'gray'}} size='2x'/>
            </div>
        </div>
    );
}