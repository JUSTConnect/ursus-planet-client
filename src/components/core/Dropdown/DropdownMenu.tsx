import css from './index.module.scss'


interface Item
{
    name: string
    value: string
}

interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    items: Item[]
    setValue?: (item: Item) => void
    value?: string
    active: boolean
}


export default function DropdownMenu(props: Props) {
    return <div className={[css.menu, props.active && css.menuActive].join(' ')}>
        <div className={css.menuCard}>
            {
                props.items.map(item =>
                    <div key={item.value} className={css.item} onClick={() => { props.setValue && props.setValue(item) }}>
                        {item.name}
                    </div>
                )
            }
        </div>
    </div>
}