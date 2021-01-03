import Action from './base/Action';
import Input from './base/Input';
import Transaction from './base/Transaction';
import UnitType from '../types/UnitType';
import TransactionType from '../types/TransactionType';

const Transactions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto flex items-stretch justify-between">
            <div className="bg-white px-8 rounded-md w-7/12 mr-4 divide-y divide-light-gray-200 text-gray-700 max-h-full overflow-y-auto h-96">
                <Transaction 
                    type={ TransactionType.Deposit }
                    date="02/03/2021"
                    value="1.300,00"
                    unit={ UnitType.BRL }
                />

                <Transaction 
                    type={ TransactionType.Deposit }
                    date="02/03/2021"
                    value="1.300,00"
                    unit={ UnitType.BRL }
                />

                <Transaction 
                    type={ TransactionType.Deposit }
                    date="02/03/2021"
                    value="1.300,00"
                    unit={ UnitType.BRL }
                />

                <Transaction 
                    type={ TransactionType.Deposit }
                    date="02/03/2021"
                    value="1.300,00"
                    unit={ UnitType.BRL }
                />

                <Transaction 
                    type={ TransactionType.Deposit }
                    date="02/03/2021"
                    value="1.300,00"
                    unit={ UnitType.BRL }
                />
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
                        label="Amount"
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