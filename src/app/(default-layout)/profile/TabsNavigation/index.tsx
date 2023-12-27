import css from './index.module.scss'
import Container from '@/components/core/Container'
import Scroller from '@/components/core/Scroller'
import Button from '@/components/core/Button'


interface Props {
    tab: string
    setTab: (tab: string) => void
    tabs: Tab[]
}

export type Tab = {
    icon: React.ReactNode
    name: string
    value: string
}

export default function TabsNavigation(props: Props) {
    return <Scroller>
        <Container className={css.navigation}>
            {
                props.tabs.map(tab =>
                    <div key={tab.value}>
                        <Button
                            variant={ props.tab !== tab.value ? 'blank' : 'regular' }
                            color={ props.tab === tab.value ? 'gray' : 'primary' }
                            className={[
                                css.button,
                                props.tab === tab.value && css.buttonActive
                            ].join(' ')}
                            onClick={ () => props.setTab(tab.value) }
                            iconStart={ tab.icon }
                        >
                            { tab.name }
                        </Button>
                    </div>
                )
            }
        </Container>
    </Scroller>
}