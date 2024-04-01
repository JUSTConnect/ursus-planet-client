import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import css from './index.module.scss'


export default function Icon() {
    return <RadixSelect.Icon className={css.SelectIcon}>
        <ChevronDownIcon />
    </RadixSelect.Icon>
}