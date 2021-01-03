import { ReactComponent as DownIcon } from '../assets/down.svg';

const Total: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto my-8 flex items-center justify-between">
            <div className="w-7/12 flex items-center justify-between">
                <div className="flex items-end justify-center">
                    <p className="mr-2 uppercase text-gray-900 text-xs">In</p>
                    <h4 className="text-2xl text-green-500 leading-none">R$ 27.182,98</h4>
                </div>

                <div className="flex items-end justify-center">
                    <p className="mr-2 uppercase text-gray-900 text-xs">Out</p>
                    <h4 className="text-2xl text-red-500 leading-none">R$ 10.987,24</h4>
                </div>

                <div className="flex items-end justify-center">
                    <p className="mr-2 uppercase text-gray-900 text-xs">Interest</p>
                    <h4 className="text-2xl text-green-500 leading-none">R$ 325,75</h4>
                </div>

                <button className="flex items-center justify-center">
                    <DownIcon className="fill-current text-gray-700 h-4 mr-2" />
                    <span className="uppercase text-xs text-gray-700">Sort</span>
                </button>
            </div>

            <div>
                <p className="text-right text-gray-700 text-sm">You will be logged out in <span className="bold">09:32</span></p>
            </div>
        </div>
    );
}

export default Total;