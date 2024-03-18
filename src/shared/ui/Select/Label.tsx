import * as RadixSelect from '@radix-ui/react-select';

import css from './index.module.scss'


export default function Label(props: React.HTMLAttributes<HTMLDivElement>) {
    return <RadixSelect.Label className={css.SelectLabel}>{props.children}</RadixSelect.Label>
}