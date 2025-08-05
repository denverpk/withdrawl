import { ethers } from 'ethers';
import { BiconomyPaymaster } from '@biconomy/paymaster';

export default async function handler(req, res) {
  try {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org'); // Use your RPC
    const paymaster = new BiconomyPaymaster({ paymasterApiKey: 'YOUR_PAYMASTER_API_KEY' });
    const balance = await paymaster.getPaymasterBalance(provider);
    res.status(200).json({ balance: ethers.utils.formatEther(balance) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}