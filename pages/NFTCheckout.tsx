import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, CreditCard, ChevronRight, Lock, DollarSign, Wallet } from 'lucide-react';

const NFTCheckout: React.FC = () => {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState<'usdc' | 'eth'>('usdc');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Mock Data
  const nft = {
    name: 'Sherry Oak Cask #2891',
    collection: 'The Macallan',
    image: `https://picsum.photos/300/300?random=${id || 1}`,
    price: 4500, // USDC
  };

  const fees = {
    service: 112.50, // 2.5%
    gas: 15.00,
  };

  const total = nft.price + fees.service + fees.gas;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
        <div className="container mx-auto px-4 py-20 animate-fade-in flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/50">
                <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Purchase Successful!</h1>
            <p className="text-gray-400 mb-8 max-w-md">
                You are now the proud owner of <span className="text-whisky-gold">{nft.name}</span>. The asset has been transferred to your wallet.
            </p>
            <div className="flex gap-4">
                <Link to="/profile/my-nfts" className="px-8 py-3 bg-whisky-gold text-whisky-dark font-bold rounded-xl hover:opacity-90 transition-opacity">
                    View in Wallet
                </Link>
                <Link to="/explore" className="px-8 py-3 border border-whisky-gold/30 text-whisky-gold rounded-xl hover:bg-whisky-gold/10 transition-colors">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-3xl font-serif font-bold text-whisky-light mb-8 flex items-center gap-2">
        <Shield className="w-8 h-8 text-whisky-gold" /> Secure Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Payment & Review */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Item Review */}
            <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-whisky-gold text-whisky-dark rounded-full flex items-center justify-center text-xs">1</span>
                    Review Item
                </h3>
                <div className="flex items-center gap-4 bg-whisky-main p-4 rounded-lg border border-whisky-gold/5">
                    <img src={nft.image} alt={nft.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                        <p className="text-xs text-whisky-gold uppercase tracking-wider mb-1">{nft.collection}</p>
                        <h4 className="font-bold text-xl text-white">{nft.name}</h4>
                        <p className="text-gray-400 text-sm">Quantity: 1</p>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-whisky-gold text-whisky-dark rounded-full flex items-center justify-center text-xs">2</span>
                    Payment Method
                </h3>
                
                <div className="space-y-3">
                    <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'usdc' ? 'bg-whisky-gold/10 border-whisky-gold' : 'bg-whisky-main border-whisky-gold/10 hover:border-whisky-gold/30'}`}>
                        <div className="flex items-center gap-4">
                            <input 
                                type="radio" 
                                name="payment" 
                                checked={paymentMethod === 'usdc'}
                                onChange={() => setPaymentMethod('usdc')}
                                className="text-whisky-gold focus:ring-whisky-gold bg-whisky-dark border-gray-600" 
                            />
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-bold text-white">USDC (USD Coin)</span>
                                <span className="block text-xs text-gray-400">Balance: 12,500.00 USDC</span>
                            </div>
                        </div>
                        {paymentMethod === 'usdc' && <div className="text-whisky-gold text-sm font-bold flex items-center gap-1"><Shield className="w-3 h-3" /> Recommended</div>}
                    </label>

                    <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'eth' ? 'bg-whisky-gold/10 border-whisky-gold' : 'bg-whisky-main border-whisky-gold/10 hover:border-whisky-gold/30'}`}>
                        <div className="flex items-center gap-4">
                            <input 
                                type="radio" 
                                name="payment" 
                                checked={paymentMethod === 'eth'}
                                onChange={() => setPaymentMethod('eth')}
                                className="text-whisky-gold focus:ring-whisky-gold bg-whisky-dark border-gray-600" 
                            />
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-bold text-white">ETH (Ethereum)</span>
                                <span className="block text-xs text-gray-400">Balance: 5.42 ETH</span>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
            <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6 sticky top-24 shadow-2xl">
                <h3 className="font-serif font-bold text-xl text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-whisky-gold/10">
                    <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span className="text-white">{nft.price.toLocaleString()} USDC</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Service Fee (2.5%)</span>
                        <span className="text-white">{fees.service.toFixed(2)} USDC</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Estimated Gas</span>
                        <span className="text-white">{fees.gas.toFixed(2)} USDC</span>
                    </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                    <span className="font-bold text-lg text-white">Total</span>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-whisky-gold">{total.toLocaleString()} USDC</span>
                        <span className="text-xs text-gray-500">≈ ${total.toLocaleString()} USD</span>
                    </div>
                </div>

                <button 
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-whisky-gold to-whisky-light text-whisky-dark font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(212,165,116,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isProcessing ? (
                        <>Processing Payment...</>
                    ) : (
                        <>
                            <Lock className="w-4 h-4" /> Confirm Purchase
                        </>
                    )}
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                    By confirming this purchase, you agree to the Terms of Service. Funds will be deducted from your connected wallet.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCheckout;