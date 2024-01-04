import css from './index.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function Layout(props: React.HTMLAttributes<HTMLDivElement>) {

    return <main className={css.page}>
        <Header/>
        { props.children }
        <Footer/>
    </main>
}