const FormAmount = ({ onSubmit, date, amount, setDate, setAmount }) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <input
                type="date"
                value={date}
                onChange={setDate}
                required
                className="mb-2 p-2 border"
            />
            <input
                type="number"
                value={amount}
                onChange={setAmount}
                required
                placeholder="Enter amount"
                className="mb-2 p-2 border"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white">Submit</button>
        </form>
    );
};

export default FormAmount;