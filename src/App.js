import React, { useState } from 'react';
import { TrendingUp, DollarSign, Shield, MapPin, BarChart3, Clock, Globe } from 'lucide-react';
import './App.css';

const KoreanKioskCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Korean Currency Exchange Kiosk Case Study
          </h1>
          <p className="text-xl text-gray-600">Real Operating Currency Exchange Kiosk Business Model</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            Korean Currency Exchange Kiosk Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Business Model</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Operation Method:</span>
                  <span className="font-medium">24/7 Unmanned Automatic Operation</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Investment Structure:</span>
                  <span className="font-medium">Multiple Investor Joint Funding</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Seed Money:</span>
                  <span className="font-medium">200 Million KRW (Exchange Cash)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Revenue Structure:</span>
                  <span className="font-medium">1.2% Exchange Spread Commission</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Actual Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily Transaction:</span>
                  <span className="font-bold text-blue-600">70 Million KRW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Transaction:</span>
                  <span className="font-bold text-green-600">2.1 Billion KRW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Transaction:</span>
                  <span className="font-bold text-purple-600">25.5 Billion KRW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Commission Rate:</span>
                  <span className="font-bold text-red-600">1.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Returns */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            Return Rate Status
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">12.6%</div>
              <div className="text-gray-600">Monthly Return</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">153%</div>
              <div className="text-gray-600">Annual Return</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">8 Months</div>
              <div className="text-gray-600">Investment Recovery</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">25.2 Million KRW</div>
              <div className="text-gray-600">Monthly Profit</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">Category</th>
                  <th className="px-6 py-3 text-center font-bold">Transaction Volume</th>
                  <th className="px-6 py-3 text-center font-bold">Profit Amount</th>
                  <th className="px-6 py-3 text-center font-bold text-green-600">Return Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-6 py-4 font-medium">Monthly</td>
                  <td className="px-6 py-4 text-center">2.1 Billion KRW</td>
                  <td className="px-6 py-4 text-center">25.2 Million KRW</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">12.6%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Annual</td>
                  <td className="px-6 py-4 text-center">25.5 Billion KRW</td>
                  <td className="px-6 py-4 text-center">306.6 Million KRW</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">153.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Insurance Structure */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            Korean Guarantee Insurance Structure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Guarantee Insurance Structure</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Korean Guarantee Insurance Principal Loss Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">80% of Principal Guarantee Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Guarantee Fee: 2-3% annually</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Seed Money Collateral Setting</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Risk Management</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">24/7 Real-time Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">CCTV and Security System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Cash Management Specialist Company</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Daily Settlement and Reporting System</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Operations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-8 h-8 text-red-600 mr-3" />
            Kiosk Locations and Operations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-3">Installation Locations</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Incheon International Airport Terminal</li>
                <li>• Gimpo Airport Domestic/International</li>
                <li>• Myeongdong Tourist District</li>
                <li>• Gangnam Station Underground Shopping</li>
                <li>• Hongdae Commercial Area</li>
                <li>• Major University Campuses</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Supported Currencies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• USD (US Dollar)</li>
                <li>• EUR (Euro)</li>
                <li>• JPY (Japanese Yen)</li>
                <li>• CNY (Chinese Yuan)</li>
                <li>• GBP (British Pound)</li>
                <li>• 12 Other Country Currencies</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Operation Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 Unmanned Operation</li>
                <li>• Real-time Exchange Rate Application</li>
                <li>• Instant Exchange Processing</li>
                <li>• Multi-language Interface</li>
                <li>• Mobile Integration Service</li>
                <li>• Automatic Receipt Issuance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Business Model</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">High Capital Turnover Rate</div>
                    <div className="text-sm text-gray-600">25.5 billion KRW transactions with 200 million KRW seed money (127x turnover)</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">Optimal Commission Setting</div>
                    <div className="text-sm text-gray-600">Cheaper than banks, safer than individual trading - middle position</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">Strategic Location Selection</div>
                    <div className="text-sm text-gray-600">Airports, tourist areas with concentrated foreign visitor traffic</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Operational Efficiency</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">Unmanned Operation System</div>
                    <div className="text-sm text-gray-600">Labor cost savings and 24/7 service provision</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">Real-time Management</div>
                    <div className="text-sm text-gray-600">Remote monitoring and immediate response system</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">Stable Revenue Structure</div>
                    <div className="text-sm text-gray-600">Risk minimization through guarantee insurance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanKioskCaseStudy;
