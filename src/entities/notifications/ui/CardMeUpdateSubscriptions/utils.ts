export function getValueName(value: string) {
    switch(value)
    {
        case 'fast': return 'As fast as possible'
        case 'hour' : return 'Every hour'
        case 'day' : return 'Every day'
        case 'week' : return 'Every week'
        case 'month' : return 'Every month'
        default : return 'None selected'
    }
}