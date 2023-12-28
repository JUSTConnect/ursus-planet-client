import css from './index.module.scss'
import Container from '@/components/core/Container'
import Scroller from '@/components/core/Scroller'
import Button from '@/components/core/Button'


interface IPanelPlayerTabs {
    activeTab: string
    setActiveTab: (tab: string) => void
    tabs: IPanelPlayerTab[]
}

export type IPanelPlayerTab = {
    icon: React.ReactNode
    name: string
    value: string
}

export default function PanelPlayerTabs(props: IPanelPlayerTabs) {
    return <Scroller>
        <div className={css.bgDrop}></div>
        <Container className={css.navigation}>
            {
                props.tabs.map(tab =>
                    <div key={tab.value}>
                        <Button
                            variant={ props.activeTab !== tab.value ? 'blank' : 'regular' }
                            color={ props.activeTab === tab.value ? 'gray' : 'primary' }
                            className={[
                                css.button,
                                props.activeTab === tab.value && css.buttonActive
                            ].join(' ')}
                            onClick={ () => props.setActiveTab(tab.value) }
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