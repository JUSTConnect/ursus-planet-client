export default function username(value?: string|null): string {
    if (value === null) return ''
    return value as string
}