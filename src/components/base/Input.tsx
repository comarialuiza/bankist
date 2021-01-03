interface InputProps {
    type: string;
    label?: string;
    id: string;
}

const Input = ({ type, label, id }: InputProps) => {
    const labelElement = label && (
        <label htmlFor={ id } className="text-gray-700 text-xs mt-2">{ label }</label>
    )

    return (
        <div className="mr-4 flex flex-col items-center flex-auto">
            <input 
                type={ type } 
                id={ id } 
                className="rounded p-2 bg-white bg-opacity-25 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
            />
            { labelElement }
        </div>
    );
}

export default Input;