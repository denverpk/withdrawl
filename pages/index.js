import { useState } from 'react';

export default function Home() {
  const [log, setLog] = useState('');

  const handleWithdraw = async () => {
    setLog('Withdrawing funds...');
    const response = await fetch('/api/withdraw', { method: 'POST' });
    const data = await response.json();
    if (response.ok) {
      setLog('Withdraw Success: ' + data.message);
    } else {
      setLog('Error: ' + data.message);
    }
  };

  const handleCheckBalance = async () => {
    setLog('Checking Paymaster Balance...');
    const response = await fetch('/api/check-balance', { method: 'GET' });
    const data = await response.json();
    if (response.ok) {
      setLog('Paymaster Balance: ' + data.balance + ' ETH');
    } else {
      setLog('Error: ' + data.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Biconomy Paymaster Withdraw</h1>
      <button onClick={handleCheckBalance}>Check Paymaster Balance</button>
      <br /><br />
      <button onClick={handleWithdraw}>Withdraw Funds</button>
      <pre>{log}</pre>
    </div>
  );
}