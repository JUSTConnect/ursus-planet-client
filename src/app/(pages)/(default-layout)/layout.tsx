import Header from "@/widgets/Header"
import Footer from "@/widgets/Footer"


export default function DefaultLayout(props: {
    children: React.ReactNode
}) {
    return <>
        <Header/>
        {props.children}
        <Footer/>
    </> 
}