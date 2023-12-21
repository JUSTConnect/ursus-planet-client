import Layout from "@/components/Layout";

export default function DefaultLayout(props: {
    children: React.ReactNode
}) {
    return <Layout>
        {props.children}
    </Layout>
}