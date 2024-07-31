import React from "react"
import cl from "./DefaultButton.module.css"

interface IButtonProps {
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    children: React.ReactNode
}

const DefaultButton = ({ type = "button", onClick, children }: IButtonProps) => {
    return (
        <button className={cl["default-button"]} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default DefaultButton