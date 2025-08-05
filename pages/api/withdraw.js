import { ethers } from 'ethers';
import { BiconomyPaymaster } from '@biconomy/paymaster';

export default async function handler(req, res) {
  try {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org'); // Use your RPC
    const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Replace with Paymaster Admin Wallet
    const paymaster = new BiconomyPaymaster({ paymasterApiKey: 'YOUR_PAYMASTER_API_KEY' });

    const withdrawTx = await paymaster.withdrawFunds(signer, 'DESTINATION_WALLET_ADDRESS');
    await withdrawTx.wait();

    res.status(200).json({ message: 'Funds Withdrawn Successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}