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
        <div className="mr-4 flex flex-col items-center">
            <input type={ type } id={ id } className="w-24 rounded p-2 bg-white bg-opacity-25"/>
            { labelElement }
        </div>
    );
}

export default Input;