import React, { useState } from 'react'
import styles from './CustomSelect.module.scss'

interface Option {
    id: number
    namePL: string
    nameEN: string
}

interface CustomSelectProps {
    options: Option[]
    onSelect: (optionId: number) => void
    data: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    onSelect,
    data,
}) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option)
        onSelect(option.id)
        setIsOpen(false)
    }

    return (
        <div className={styles['custom-select']}>
            <div
                className={`${styles['select-header']} ${
                    isOpen ? styles['open'] : ''
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {data === 'pl'
                    ? selectedOption != null
                        ? selectedOption.namePL
                        : options[0].namePL
                    : selectedOption != null
                    ? selectedOption.nameEN
                    : options[0].nameEN}
            </div>
            {isOpen && (
                <div className={styles['options-list']}>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={styles['option']}
                            onClick={() => handleOptionClick(option)}
                        >
                            {data === 'pl' ? option.namePL : option.nameEN}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CustomSelect
