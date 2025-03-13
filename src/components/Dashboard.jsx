import React, { useEffect, useState } from "react";
import FormAmount from "./FormAmount";
import AreaChart from "./AreaChart";
import amountService from '../services/amountService';

const Dashboard = () => {
    const [amounts, setAmounts] = useState([]);
    const [newDate, setNewDate] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const setDate = (event) => setNewDate(event.target.value);
    const setAmount = (event) => setNewAmount(event.target.value);

    useEffect(() => {
        amountService.getAll()
            .then(initialAmounts => {
                setAmounts(initialAmounts);
            })
            .catch(error => {
                console.error("Error fetching amounts:", error);
            });
    }, []);

    const addAmount = async (event) => {
        event.preventDefault();
        const newEntry = { date: newDate, amount: parseFloat(newAmount) };

        setAmounts(prev => [...prev, newEntry]);

        // try {
        //     const returnedAmount = await amountService.create(newEntry);
        //     setAmounts(prev => [...prev, returnedAmount]); // Asegurar persistencia en BD
        // } catch (error) {
        //     console.error("Error adding amount:", error);
        // }

        setNewDate('');
        setNewAmount('');
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 flex justify-center items-center">
                    <FormAmount onSubmit={addAmount} date={newDate} amount={newAmount} setDate={setDate} setAmount={setAmount} />
                </div>
                <div className="col-span-2 flex justify-center">
                    <AreaChart chartData={amounts} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
