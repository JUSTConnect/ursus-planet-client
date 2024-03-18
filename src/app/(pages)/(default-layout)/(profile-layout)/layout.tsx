import PanelPlayer from "@/widgets/PanelPlayer"


export default function PlayerLayout(props: {
    children: React.ReactNode
}) {

    return <>
        <PanelPlayer/>
        {props.children}
    </>
}