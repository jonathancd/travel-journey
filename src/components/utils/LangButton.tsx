import { LangButtonProps } from "../../types/langButton"

export const LangButton = ({ lang, currentLang, onClick } : LangButtonProps) => {
    const isActive = currentLang === lang

    return (
        <button
        onClick={() => onClick(lang)}
        className={`cursor-pointer px-2 font-medium ${isActive ? 'text-red-500 underline' : 'text-gray-600'}`}>
            { lang.toUpperCase()}
        </button>
    )
}