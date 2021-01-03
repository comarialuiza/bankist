const Balance: React.FC = () => {
    return (
        <main className="max-w-6xl mx-auto my-8 flex items-start justify-between text-gray-700">
            <div>
                <p className="text-2xl">Current balance</p>
                <p className="text-xs mt-1">As of 01/01/2021, 23:57</p>
            </div>

            <div>
                <h2 className="text-4xl">R$ 25.952,93</h2>
            </div>
        </main>
    );
}

export default Balance;