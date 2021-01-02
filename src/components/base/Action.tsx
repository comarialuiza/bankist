import { ReactComponent as RightIcon } from '../../assets/right.svg';

interface ActionProps {
    title: string;
    color: string;
    children: React.ReactNode;
}

const Action = ({ title, children, color }: ActionProps) => {
    return (
        <div className={ `${ color } p-8 rounded-md` }>
            <h3 className="font-semibold text-white">{ title }</h3>
            
            <form className="flex items-start justify-between mt-4">
                { children }

                <button type="submit" className="rounded p-2 bg-white">
                    <RightIcon className="fill-current text-gray-700 h-6"/>
                </button>
            </form>
        </div>
    );
}

export default Action;