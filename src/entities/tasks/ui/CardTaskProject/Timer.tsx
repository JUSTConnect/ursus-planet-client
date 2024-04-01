import { useTimer } from "react-timer-hook"


export default function Timer(props: {date: string}) {
    const {
        seconds,
        minutes,
        hours
    } = useTimer({expiryTimestamp: (new Date(props.date))})

    return <>{hours}:{minutes}:{seconds}</>

}