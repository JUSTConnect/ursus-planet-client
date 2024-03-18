type MessageType = 'primary'|'success'|'error'


export default interface IMessage
{
    text: string
    type?: MessageType
}
