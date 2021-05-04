import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)//あらかじめ使用するアイコンを追加しておく

const App = () => {
    const [iine, setIine] = useState(false);
    
    const hanten = () =>{
        const iine2 =  !iine;
        setIine(iine2);
    };
    
    return (
      <div className='iine_button' onClick={() => hanten()}>
          {iine ? (
              <FontAwesomeIcon icon={['fas', 'heart']} />
            ) : (
              <FontAwesomeIcon icon={['far', 'heart']} />
          )
          }
      </div>
    );
}
  
  export default App;
  