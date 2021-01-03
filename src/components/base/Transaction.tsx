import UnitType from '../../types/UnitType';
import TransactionType from '../../types/TransactionType';

interface TransactionProps {
    type: TransactionType;
    date: string;
    value: string;
    unit: UnitType;
}

const Transaction = ({ type, date, value }: TransactionProps) => {
    return (
        <div className="py-6 flex items-center justify-between">
            <p className="bg-blue-500 py-1 px-2 rounded-full text-white text-xs">{ type }</p>
            <p className="text-xs">{ date }</p>
            <p className="text-sm">{ value }</p>
        </div>
    );
}

export default Transaction;