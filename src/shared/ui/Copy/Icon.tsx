import {useCopy} from './context'

import { LuCopy, LuCopyCheck  } from "react-icons/lu";

export default function Icon() {
    const {copyActive} = useCopy()

    return copyActive ? <LuCopyCheck/> : <LuCopy/>
}