import React from "react";

import './main-language.styles.scss';

import Language from '../../Main/launguage/language.component';
import { useState } from "react";
import LANGUAGE_DATA from "../../../languagedata";
import LANGUAGE_DATAA from "../../../languagedata2";
import CURRENCT_DATA from "../../../currencydata";
import { BsTranslate } from "react-icons/bs";
import { IoIosSwitch } from 'react-icons/io';

const MainLanguage = ({ setOpenModal }) => {
    const [languagedata] = useState(LANGUAGE_DATA);
    const [languagedata2] = useState(LANGUAGE_DATAA);
    const [currencydata] = useState(CURRENCT_DATA);
    const [index, setIndex] = useState(1);
    return (
        <div className="box4">
            <div className="close">
                <button onClick={() => {
                    setOpenModal(false);
                }}>X
                </button>
            </div>
            <div className="main-tab">
                <div className="men-fath" onClick={() => { setIndex(1) }} >
                    <h4 className="lang"> Language </h4>
                </div>
                <div className="men-aifi" onClick={() => { setIndex(2) }} >
                    <h4 className="cur">Currency </h4>
                </div>
            </div>
            <hr />
            <div className="main-tra" hidden={index !== 1}>
                <div className="tra-span">
                    <div className="translation">Translation <BsTranslate /></div>
                    <span className="span">Automatically translate descrptions and review to English</span>
                    <div className="switch">
                        <a href="/">
                            <IoIosSwitch size="2em" /></a></div>
                </div>

                <div className="main-three">Suggested languages and regions</div>
                <div className="english">
                    {
                        languagedata2.map((item) => (<Language key={item.id} item={item} />))
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
            <div className="main-cur" hidden={index !== 2}>
                <div className="cur">
                    Choose a currency
                </div>
                <div className="cur-data">
                    {
                        currencydata.map((item) => (<Language key={item.id} item={item} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default MainLanguage;