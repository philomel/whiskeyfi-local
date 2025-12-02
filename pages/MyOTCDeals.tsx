import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Eye, Edit2, Trash2, ArrowUpRight } from 'lucide-react';
import { OTCDeal } from '../types';

const MyOTCDeals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'offers_sent' | 'offers_received'>('listings');

  // Mock Data
  const myListings: OTCDeal[] = [
    {
      id: 'otc-1',
      project: 'Port Ellen 40yo 1979',
      logo: 'https://picsum.photos/60?random=88',
      type: 'sell',
      amount: '1 Bottle',
      price: 35000,
      fdv: 'N/A',
      status: 'active',
      listedDate: '2025-11-20',
      vesting: 'Ready for delivery'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-serif font-bold text-whisky-light">My OTC Deals</h1>
                <p className="text-gray-400 mt-1">Manage your off-market listings and offers.</p>
            </div>
            <Link to="/otc/deal/create-otc" className="flex items-center gap-2 bg-whisky-gold text-whisky-dark px-6 py-2 rounded-lg font-bold hover:opacity-90 shadow-lg">
                <Briefcase className="w-4 h-4" /> Create New Deal
            </Link>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-whisky-gold/10 mb-8 overflow-x-auto">
            <button 
                onClick={() => setActiveTab('listings')}
                className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === 'listings' ? 'text-whisky-gold' : 'text-gray-500 hover:text-gray-300'}`}
            >
                My Listings
                {activeTab === 'listings' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
            </button>
            <button 
                onClick={() => setActiveTab('offers_sent')}
                className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === 'offers_sent' ? 'text-whisky-gold' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Offers Sent
                {activeTab === 'offers_sent' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
            </button>
            <button 
                onClick={() => setActiveTab('offers_received')}
                className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === 'offers_received' ? 'text-whisky-gold' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Received Offers
                {activeTab === 'offers_received' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
            </button>
        </div>

        {/* Content */}
        {activeTab === 'listings' && (
            <div className="space-y-4">
                {myListings.length > 0 ? myListings.map(deal => (
                     <div key={deal.id} className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-whisky-gold/30 transition-all">
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-whisky-gold/20 flex-shrink-0">
                            <img src={deal.logo} alt="project" className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <h3 className="font-bold text-white text-lg">{deal.project}</h3>
                                <span className="text-xs text-green-400 bg-green-900/20 px-2 py-0.5 rounded border border-green-900/50">Active Listing</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Amount</p>
                                <p className="text-gray-200 font-mono">{deal.amount}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Listed Date</p>
                                <p className="text-gray-200">{deal.listedDate}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Type</p>
                                <p className="text-gray-200">{deal.vesting}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 border-whisky-gold/10 pt-4 md:pt-0">
                            <Link to={`/otc/deal/${deal.id}`} className="p-2 text-gray-400 hover:text-whisky-gold hover:bg-whisky-main rounded-lg transition-colors" title="View">
                                <Eye className="w-5 h-5" />
                            </Link>
                            <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-whisky-main rounded-lg transition-colors" title="Edit">
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-whisky-main rounded-lg transition-colors" title="Delete">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                     </div>
                )) : (
                    <div className="text-center py-20 bg-whisky-card/30 rounded-xl border border-dashed border-whisky-gold/10">
                        <p className="text-gray-400 mb-4">You haven't listed any OTC deals yet.</p>
                        <Link to="/otc/deal/create-otc" className="text-whisky-gold hover:underline">Create your first deal</Link>
                    </div>
                )}
            </div>
        )}

        {activeTab !== 'listings' && (
            <div className="text-center py-20 bg-whisky-card/30 rounded-xl border border-dashed border-whisky-gold/10">
                <p className="text-gray-500">No activity found in this section.</p>
            </div>
        )}
    </div>
  );
};

export default MyOTCDeals;