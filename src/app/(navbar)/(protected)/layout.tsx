import { ReactNode } from 'react'

const ProctectedLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProctectedLayout