import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import css from './index.module.scss'


export default function Content(props: React.HTMLAttributes<HTMLDivElement>) {
    return <RadixSelect.Portal>
        <RadixSelect.Content className={css.SelectContent}>
                <RadixSelect.ScrollUpButton className={css.SelectScrollButton}>
                    <ChevronUpIcon />
                </RadixSelect.ScrollUpButton>
                <RadixSelect.Viewport className={css.SelectViewport}>
                    {props.children}
                </RadixSelect.Viewport>
                <RadixSelect.ScrollDownButton className={css.SelectScrollButton}>
                    <ChevronDownIcon />
                </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
    </RadixSelect.Portal>
}