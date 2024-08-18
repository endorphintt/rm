import React, { createContext, useContext, useState, ReactNode } from 'react'

type MyContextType = {
    data: string
    setData: (value: string) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

type MyContextProviderProps = {
    children: ReactNode
}

export function MyContextProvider({ children }: MyContextProviderProps) {
    const [data, setData] = useState('pl')

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )
}

export function useMyContext() {
    const context = useContext(MyContext)
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyContextProvider')
    }
    return context
}
