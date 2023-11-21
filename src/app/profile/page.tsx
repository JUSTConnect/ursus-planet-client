import Container from "@/components/core/Container"

import css from './index.module.scss'
import Top from './Top'
import TabsNavigation from './TabsNavigation'
import TabProfile from "@/app/profile/TabProfile"


export default function Profile() {
    return <>
        <Container>
            <Top/>
        </Container>
        <div className={css.tabs}>
            <TabsNavigation/>
            <TabProfile/>
        </div>
    </>
}