import React, { useState } from "react";


import AguestDrop from "../aguest-drop/aguest-drop.component";

import './ahost-guest.styles.scss';

const AhostGuest = () => {
    const [selected, setSelected, selectedd, setSelectedd] = useState('')

    return (
        <div className="fetchdata">
            <AguestDrop
                selected={selected} setSelected={setSelected} selectedd={selectedd} setSelectedd={setSelectedd}
            />

        </div>
    )

}

export default AhostGuest;