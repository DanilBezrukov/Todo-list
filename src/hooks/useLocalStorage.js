import { useState } from "react"

export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {

        try {
            const item = localStorage.getItem(key)
            return (
                item ? JSON.parse(item) : initialValue
            )
        } catch {
            return initialValue
        }
    })

    const stateChange = (arg) => {

        try {
            const checkArg = typeof arg === "function"
                ? arg(value)
                : arg
            setValue(checkArg)
        } catch(error) {
            console.error("useLocalStorage > ", error)
        }
    }


    return [value, stateChange]
}