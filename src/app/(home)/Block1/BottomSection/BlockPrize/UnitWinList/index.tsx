import { memo } from "react";

import { FaTrophy } from "react-icons/fa";

import UnitValue from "../../UnitValue";


function UnitWinList() {
    return <UnitValue
        title='Win list'
        value='1'
        icon={<FaTrophy />}
    />
}


export default memo(UnitWinList)