import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)//あらかじめ使用するアイコンを追加しておく

const App = () => {
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
                    <FontAwesomeIcon icon={['fas', 'heart']} style={{color:'pink'}} fixedWidth/>
                    ) : (
                    <FontAwesomeIcon icon={['far', 'heart']} style={{color:'pink'}} fixedWidth/>
                    )
                }
                <span>{iines}</span>
            </div>
        </div>
    );
}
  
  export default App;
  