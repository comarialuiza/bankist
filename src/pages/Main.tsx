import Header from '../components/Header';
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import Total from '../components/Total';

const Main: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 min-h-screen">
            <Header />
            <Balance />
            <Transactions />
            <Total />
        </div>
    );
}

export default Main;