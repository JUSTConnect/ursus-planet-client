export interface ICopyContext
{
    copy: () => void
    copyActive: boolean
}


export interface ICopyProvider
{
    children: React.ReactNode
    text: string
    success_message?: string
}