import css from './index.module.scss'


interface IItem
{
    name: string
    value: string
}

interface IDropdownMenu extends React.HTMLAttributes<HTMLButtonElement>
{
    items: IItem[]
    active: boolean
}


export default function DropdownMenu(props: IDropdownMenu) {
    return <div className={[css.menu, props.active && css.menuActive].join(' ')}>
        <div className={css.menuCard}>
            {
                props.items?.map(item =>
                    <div key={item.value} className={css.item}>
                        {item.name}
                    </div>
                )
            }
        </div>
    </div>
}