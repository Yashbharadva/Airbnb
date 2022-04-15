import React from "react";

import './main-language.styles.scss';

import Language from "../../component/launguage/language.component";
import { useState } from "react";
import LANGUAGE_DATA from "../../languagedata";
import LANGUAGE_DATAA from "../../languagedata2";
import { BsTranslate } from "react-icons/bs";

const MainLanguage = () => {
    const [languagedata] = useState(LANGUAGE_DATA);
    const [languagedata2] = useState(LANGUAGE_DATAA);
    return (
        <div className="box4">
            <div className="tra-span">
                
            <div className="translation">Translation <BsTranslate /></div>
            <span className="span">Automatically translate descrptions and review to English</span>
            </div>
            <div className="main-three">Suggested languages and regions</div>
            <div className="english">
                {
                    languagedata2.map((item) => (<Language key={item.id} item={item}  />))
                }
            </div>
            <div className="region">
                Choose a language and region
            </div>


            <div className="main-region">

                {
                    languagedata.map((item) => (<Language key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

export default MainLanguage;