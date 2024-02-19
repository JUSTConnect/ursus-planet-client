import Image from 'next/image';

import iconPng from './icons/png.png'

import { Input, InputSize } from "@/components/core/Input";
import Container from "@/components/core/Container";
import Box from '@/components/core/Box';
import Typography from '@/components/core/Typography';


const sizes: InputSize[] = ['sm', 'md', 'lg']


export default function InputKit() {
    return <Container>
        <Box mb={4}>
            <Typography variant='h3'>
                Sizes
            </Typography>
            {
                sizes.map(size =>
                    <Box key={size} mt={2} mb={2}>
                        <Typography variant='h4'>
                            {size}
                        </Typography>
                        <Input
                            placeholder="Some placeholder"
                            size={size}
                            error="Some error message"
                            label="Some label value"
                        />
                    </Box>
                )
            }
        </Box>
        <Box mb={4}>
            <Typography variant='h3'>
                With icon (img)
            </Typography>
            {
                sizes.map(size =>
                    <Box key={size} mt={2} mb={2}>
                        <Typography variant='h4'>
                            {size}
                        </Typography>
                        <Input
                            iconStart={
                                <Image src={iconPng} alt='icon' />
                            }
                            placeholder="Some placeholder"
                            size={size}
                            error="Some error message"
                            label="Some label value"
                        />
                    </Box>
                )
            }
        </Box>
    </Container>
}