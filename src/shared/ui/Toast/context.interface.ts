import IMessage from './Message.props'


export default interface IToastContext
{
    messages: IMessage[]
    fire: (_: IMessage) => void
}
