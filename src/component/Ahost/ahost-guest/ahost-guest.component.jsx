import React, { useState } from "react";

import AguestDrop from "../aguest-drop/aguest-drop.component";
import AguestDrop2 from "../aguest-drop2/aguest-drop2.component";
import AguestDrop3 from "../aguest-drop3/aguest-drop3.component";

import './ahost-guest.styles.scss';

const AhostGuest = () => {
    const [selected1, setSelected1] = useState('')
    const [selected2, setSelected2] = useState('')
    const [selected3, setSelected3] = useState('')

    return (
        <div className="fetchdata">
            <AguestDrop selected1={selected1} setSelected1={setSelected1} />
            <AguestDrop2 selected2={selected2} setSelected2={setSelected2} />
            <AguestDrop3 selected3={selected3} setSelected3={setSelected3} />
        </div>
    )

}

export default AhostGuest;