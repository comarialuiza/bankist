import { ReactComponent as RightIcon } from '../assets/right.svg';

const Transactions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto flex items-stretch justify-between">
            <div className="bg-white px-8 rounded-md w-7/12 mr-4 divide-y divide-light-gray-200 text-gray-700">
                <div className="py-6 flex items-center justify-between">
                    <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm">Deposit</p>
                    <p className="text-xs">12/03/2020</p>
                    <p className="text-sm">R$ 1.300,00</p>
                </div>

                <div className="py-6 flex items-center justify-between">
                    <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm">Deposit</p>
                    <p className="text-xs">12/03/2020</p>
                    <p className="text-sm">R$ 1.300,00</p>
                </div>

                <div className="py-6 flex items-center justify-between">
                    <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm">Deposit</p>
                    <p className="text-xs">12/03/2020</p>
                    <p className="text-sm">R$ 1.300,00</p>
                </div>

                <div className="py-6 flex items-center justify-between">
                    <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm">Deposit</p>
                    <p className="text-xs">12/03/2020</p>
                    <p className="text-sm">R$ 1.300,00</p>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 w-5/12">
                <div className="bg-yellow-400 p-8 rounded-md">
                    <h3 className="font-semibold text-white">Transfer money</h3>
                    
                    <form className="flex items-start justify-between mt-4">
                        <div className="mr-4 flex flex-col items-center">
                            <input type="text" id="transferTo" className="w-24 rounded p-2"/>
                            <label htmlFor="transferTo" className="text-gray-700 text-xs mt-2">Transfer to</label>
                        </div>

                        <div className="mr-4 flex flex-col items-center">
                            <input type="text" id="amount" className="w-24 rounded p-2"/>
                            <label htmlFor="amount" className="text-gray-700 text-xs mt-2">Amount</label>
                        </div>

                        <button type="submit" className="rounded p-2 bg-white">
                            <RightIcon className="fill-current text-gray-700 h-6"/>
                        </button>
                    </form>
                </div>

                <div className="bg-red-500 p-8 rounded-md">
                    <h3>Request loan</h3>
                </div>

                <div className="bg-green-600 p-8 rounded-md">
                    <h3>Close account</h3>
                </div>
            </div>
        </div>
    );
}

export default Transactions;