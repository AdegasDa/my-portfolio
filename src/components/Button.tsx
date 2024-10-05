import '../../../index.css'

import {ReactNode} from 'react'

interface ButtonInterface {
    children: ReactNode
}

const Button: React.FC<ButtonInterface> = ({ children }) => {

    return (
        <>
            <button>
                {children}
            </button>
        </>
    )
}

export default Button;