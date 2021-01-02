import Header from '../components/Header';
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';

const Main: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4">
            <Header />
            <Balance />
            <Transactions />
        </div>
    );
}

export default Main;