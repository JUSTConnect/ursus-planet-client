import Image from "next/image";
import Link from "next/link";
import { Text, Flex, Box } from "@radix-ui/themes";

import Card from "@/shared/ui/Card"
import Button from "@/shared/ui/Button";
import { PiFlagBannerFill } from "react-icons/pi";


import css from './index.module.scss'
import figure from './img/figure.png'


export default function CardWalletsProjectUpdate() {

    return <Card.Root tabulated value="project">
        <Card.Head>
            <PiFlagBannerFill />Project
        </Card.Head>
        <Card.Body>
            <Flex direction='column' justify='center' className={css.wrapper}>
                <Text size='7' as='p' align='center' mb='2'>Add your project</Text>            
                <Text as='p' align='center'>
                    To display project settings, add your <Text color="blue">project.</Text>
                </Text>
                <Box mb='5'>
                    <Image
                        src={figure}
                        className={css.figure}
                        alt='figure'
                    />            
                </Box>
                <Flex justify='center' wrap='wrap' gap='2'>
                    <Link href="https://forms.gle/mzmKtGQ4mqhVP6an8">
                        <Button wideWidth hoverToWhite>Add project</Button>
                    </Link>
                    <Link href='https://docs-project.ursasplanet.com'>
                        <Button wideWidth hoverToWhite>More info</Button>
                    </Link>
                </Flex>
            </Flex>
        </Card.Body>
    </Card.Root >
}
