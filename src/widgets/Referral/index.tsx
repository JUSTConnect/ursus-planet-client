import { Grid } from "@radix-ui/themes"

import { FaLink } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"

import CardUserReferralCode from "@/entities/referral_program/ui/CardReferralCode"
import CardUserReferralInfo from "@/entities/referral_program/ui/CardReferralInfo"
import Card from "@/shared/ui/Card"
import Container from "@/shared/ui/Container"

import css from './index.module.scss'


export default function Referral() {
    return <Container>
        <Card.TabsProvider size='md' defaultValue='code'>
            <Card.Tabs tabulated>
                <Card.Tab value='code'>
                    <FaLink/>
                    Referral code
                </Card.Tab>
                <Card.Tab value='info'>
                    <FaInfoCircle/>
                    Referral info
                </Card.Tab>
            </Card.Tabs>
            <Grid
                className={css.cards}
                columns={{
                    md: '2'
                }}
                gap='5'
            >
                <CardUserReferralCode/>
                <CardUserReferralInfo/>
            </Grid>
        </Card.TabsProvider>
    </Container> 
}
