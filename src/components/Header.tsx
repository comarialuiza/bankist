import logo from '../assets/logo.png';
import { ReactComponent as RightIcon } from '../assets/right.svg';

const Header: React.FC = () => {
    return (
        <header className="container mx-auto py-2 grid grid-cols-3">
            <p className="flex items-center text-gray-700">Log in to get started</p>

            <h1 className="flex items-center justify-center">
                <img src={ logo } alt="Bankist" title="Bankist" className="h-16" />
            </h1>

            <div className="flex flex-row justify-center items-center">
                <input type="text" placeholder="user" className="mr-2 p-2 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                <input type="text" placeholder="pin" className="mr-2 p-2 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

                <button className="p-2">
                    <RightIcon className="fill-current text-gray-700 h-6"/>
                </button>
            </div>
        </header>
    );
}

export default Header;