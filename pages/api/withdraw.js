import { ethers } from 'ethers';
import { BiconomyPaymaster } from '@biconomy/paymaster';

export default async function handler(req, res) {
  try {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org'); // Use your RPC
    const signer = new ethers.Wallet('0x8a95fefd533ab0d2e5249e0a16b08df3dfc5a8be0996cc72a7ef406f5d9ae3a7', provider); // Replace with Paymaster Admin Wallet
    const paymaster = new BiconomyPaymaster({ paymasterApiKey: 'TbS1iirlF.a1bad543-0e96-44d9-bc55-6d9e833f88a4' });

    const withdrawTx = await paymaster.withdrawFunds(signer, '0x73Bd6A6150Ff2527358d21e6bb5E93f287E01f96');
    await withdrawTx.wait();

    res.status(200).json({ message: 'Funds Withdrawn Successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
