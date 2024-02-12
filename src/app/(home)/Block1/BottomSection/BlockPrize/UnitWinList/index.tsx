import { memo } from "react";
import { useSelector } from "react-redux";

import { FaTrophy } from "react-icons/fa";

import { RootState } from "@/store";

import UnitValue from "../../UnitValue";


function UnitWinList() {
    const seasonActive = useSelector((state: RootState) => state.tmp.seasonActive)

    return <UnitValue
        title='Win list'
        value={
            seasonActive === 1 ? '100' : seasonActive === 2 ? '1' : '100'
        }
        icon={<FaTrophy />}
    />
}


export default memo(UnitWinList)