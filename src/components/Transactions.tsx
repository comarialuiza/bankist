import Action from './base/Action';
import Input from './base/Input';

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
                    <Input
                        type="text"
                        label="Transfer to"
                        id="transferTo"
                    />

                    <Input 
                        type="text"
                        label="Amount"
                        id="amount"
                    />
                </Action>

                <Action title="Request loan" color="bg-red-500">
                    <Input 
                        type="text"
                        label="amount"
                        id="amount"
                    />
                </Action>

                <Action title="Close account" color="bg-green-600">
                    <Input 
                        type="text"
                        label="Confirm user"
                        id="confirmUser"
                    />

                    <Input 
                        type="text"
                        label="Confirm pin"
                        id="confirmPin"
                    />
                </Action>
            </div>
        </div>
    );
}

export default Transactions;