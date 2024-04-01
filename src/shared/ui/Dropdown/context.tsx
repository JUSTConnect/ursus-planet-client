import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react"


interface IDropdownContext
{
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}


const DropdownContext = createContext<IDropdownContext>({
    active:false,
    setActive: () => {} 
})


interface IDropdownProvider
{
    children: React.ReactNode
    disabled?: boolean
    active?: boolean
}


export function DropdownProvider(props: IDropdownProvider) {
    const [active, setActive] = useState(false)

    if (props.disabled) return props.children

    return <DropdownContext.Provider value={{
        active: props.active ? true : active,
        setActive: setActive
    }}>
        {props.children}
    </DropdownContext.Provider>
}


export function useDropdown() {
    return useContext(DropdownContext)
}