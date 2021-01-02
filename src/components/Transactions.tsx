import Action from './base/Action';

const Transactions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto flex items-stretch justify-between">
            <div className="bg-white px-8 rounded-md w-7/12 mr-4 divide-y divide-light-gray-200 text-gray-700 max-h-full overflow-y-auto h-96">
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

                <div className="py-6 flex items-center justify-between">
                    <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm">Deposit</p>
                    <p className="text-xs">12/03/2020</p>
                    <p className="text-sm">R$ 1.300,00</p>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 w-5/12">
                <Action title="Transfer money" color="bg-yellow-400">
                    <div className="mr-4 flex flex-col items-center">
                        <input type="text" id="transferTo" className="w-24 rounded p-2"/>
                        <label htmlFor="transferTo" className="text-gray-700 text-xs mt-2">Transfer to</label>
                    </div>

                    <div className="mr-4 flex flex-col items-center">
                        <input type="text" id="amount" className="w-24 rounded p-2"/>
                        <label htmlFor="amount" className="text-gray-700 text-xs mt-2">Amount</label>
                    </div>
                </Action>

                <Action title="Request loan" color="bg-red-500">
                    <div className="mr-4 flex flex-col items-center">
                        <input type="text" id="transferTo" className="w-24 rounded p-2"/>
                        <label htmlFor="transferTo" className="text-gray-700 text-xs mt-2">Amount</label>
                    </div>
                </Action>

                <Action title="Close account" color="bg-green-600">
                    <div className="mr-4 flex flex-col items-center">
                        <input type="text" id="transferTo" className="w-24 rounded p-2"/>
                        <label htmlFor="transferTo" className="text-gray-700 text-xs mt-2">Confirm user</label>
                    </div>

                    <div className="mr-4 flex flex-col items-center">
                        <input type="text" id="amount" className="w-24 rounded p-2"/>
                        <label htmlFor="amount" className="text-gray-700 text-xs mt-2">Confirm pin</label>
                    </div>
                </Action>
            </div>
        </div>
    );
}

export default Transactions;