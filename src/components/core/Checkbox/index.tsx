import css from './index.module.scss'


interface Props
{
    active: boolean
    setActive: CallableFunction
}


export default function Checkbox(props: Props) {

    return <>
        <input
            type="checkbox"
            hidden
            defaultChecked={props.active}
        />
        <div className={css.checkbox} onClick={ () => props.setActive() }>
            {
                props.active &&
                    <div className={css.checkboxInner}></div>
            }
        </div>
    </>
}