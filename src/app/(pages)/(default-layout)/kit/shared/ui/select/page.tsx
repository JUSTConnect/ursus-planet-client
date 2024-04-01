'use client'
import Button from '@/shared/ui/Button';
import Container from "@/shared/ui/Container"

import Select from '@/shared/ui/Select';


export default function Kit() {

    return (
        <>
            <Container>
                <Select.Root>
                    <Select.Trigger>
                        <Button>
                            <Select.Value placeholder="Select a fruit…" />
                            <Select.Icon />
                        </Button>
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>
                                Fruits
                            </Select.Label>
                            <Select.Item value="apple">Apple</Select.Item>
                            <Select.Item value="banana">Banana</Select.Item>
                            <Select.Item value="blueberry">Blueberry</Select.Item>
                            <Select.Item value="grapes">Grapes</Select.Item>
                            <Select.Item value="pineapple">Pineapple</Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                            <Select.Label>Vegetables</Select.Label>
                            <Select.Item value="aubergine">Aubergine</Select.Item>
                            <Select.Item value="broccoli">Broccoli</Select.Item>
                            <Select.Item value="carrot" disabled>
                                Carrot
                            </Select.Item>
                            <Select.Item value="courgette">Courgette</Select.Item>
                            <Select.Item value="leek">Leek</Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                            <Select.Label>Meat</Select.Label>
                            <Select.Item value="beef">Beef</Select.Item>
                            <Select.Item value="chicken">Chicken</Select.Item>
                            <Select.Item value="lamb">Lamb</Select.Item>
                            <Select.Item value="pork">Pork</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Container>
        </>
    )
}
