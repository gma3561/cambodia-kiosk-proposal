import React, { useState } from 'react';
import { TrendingUp, DollarSign, Shield, Clock, Target, BarChart3, Calculator, Globe, Users, CheckCircle } from 'lucide-react';
import './App.css';

const CambodiaKioskProposal = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { id: 'summary', name: '요약', icon: Target },
    { id: 'korea-data', name: '한국 실적', icon: BarChart3 },
    { id: 'business', name: '비즈니스 모델', icon: TrendingUp },
    { id: 'investment', name: '투자 구조', icon: DollarSign },
    { id: 'returns', name: '수익률 분석', icon: Calculator },
    { id: 'risks', name: '리스크 관리', icon: Shield }
  ];

  const scenarios = [
    { name: '보수적', percentage: '20%', daily: '$9,400', monthly: '2.5%', annual: '31%' },
    { name: '현실적', percentage: '35%', daily: '$16,500', monthly: '4.4%', annual: '54%' },
    { name: '적극적', percentage: '50%', daily: '$23,500', monthly: '6.3%', annual: '78%' }
  ];

  const highlights = [
    { icon: TrendingUp, title: '검증된 고수익', desc: '한국에서 연 153% 실제 수익률 달성' },
    { icon: Shield, title: '안전한 투자', desc: '보증보험으로 원금 80% 보호' },
    { icon: Clock, title: '빠른 회수', desc: '18개월 내 투자원금 완전 회수 가능' },
    { icon: DollarSign, title: '월 현금흐름', desc: '월 4.4% 안정적 현금 수익' },
    { icon: Globe, title: '성장 시장', desc: '캄보디아 관광산업 회복 및 성장세' },
    { icon: CheckCircle, title: '검증된 모델', desc: '한국 2억원 펀딩 구조 그대로 적용' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            캄보디아 환전 키오스크 투자 사업 제안서
          </h1>
          <p className="text-xl text-gray-600">한국 검증 모델 - 연 153% 수익률 달성</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {activeTab === 'summary' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                Executive Summary
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">한국 검증된 고수익 비즈니스 모델</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>투자 규모:</strong> 200,000 USD (약 한화 2억원 시드머니)</p>
                    <p><strong>한국 실제 성과:</strong> 일 거래액 7천만원, <span className="text-green-600 font-bold">연간 수익률 153%</span></p>
                    <p><strong>투자 구조:</strong> 한국과 동일한 시드머니 펀딩 방식을 캄보디아에 적용</p>
                    <p><strong>보증 시스템:</strong> 원금 손실 보증으로 리스크 최소화</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">핵심 투자 매력</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">월 수익률:</span>
                      <span className="font-bold text-green-600">12.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">연간 수익률:</span>
                      <span className="font-bold text-green-600">153%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">투자금 회수:</span>
                      <span className="font-bold text-blue-600">8개월</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">안전성:</span>
                      <span className="font-bold text-purple-600">원금 보증</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="w-6 h-6 text-blue-600" />
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'korea-data' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                한국 환전 키오스크 고수익 실적
              </h2>
              
              {/* Korean Business Structure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">한국 사업 구조 및 형태</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">투자 방식:</span>
                      <span className="font-medium">다수 투자자가 2억원 공동 펀딩</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">시드머니:</span>
                      <span className="font-medium">2억원 (키오스크 내 환전용 현금)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">수익 구조:</span>
                      <span className="font-medium">환전 스프레드 1.2% 수수료</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">보증 시스템:</span>
                      <span className="font-medium">한국 보증보험사 원금 손실 보증</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">운영 방식:</span>
                      <span className="font-medium">24시간 무인 자동 운영</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Returns */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">검증된 실제 수익률</h3>
                
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">7천만원</div>
                    <div className="text-gray-600">일 거래액</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">21억원</div>
                    <div className="text-gray-600">월 거래액</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">255억원</div>
                    <div className="text-gray-600">연간 거래액</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-red-600">1.2%</div>
                    <div className="text-gray-600">수수료율</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left font-bold">구분</th>
                        <th className="px-6 py-3 text-center font-bold">거래액</th>
                        <th className="px-6 py-3 text-center font-bold">수익금액</th>
                        <th className="px-6 py-3 text-center font-bold text-green-600">수익률</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-medium">월간</td>
                        <td className="px-6 py-4 text-center">21억원</td>
                        <td className="px-6 py-4 text-center">2,520만원</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">12.6%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">연간</td>
                        <td className="px-6 py-4 text-center">255억원</td>
                        <td className="px-6 py-4 text-center">3억 660만원</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">153.3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Investment Recovery Speed */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8개월</div>
                  <div className="text-gray-600">투자원금 완전 회수</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12개월</div>
                  <div className="text-gray-600">원금 + 53% 수익 달성</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24개월</div>
                  <div className="text-gray-600">총 306% 수익 달성</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                비즈니스 모델 및 수익 구조
              </h2>

              {/* Success Formula */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">한국 검증된 고수익 모델</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="font-bold text-blue-600">시드머니</div>
                    <div className="text-sm text-gray-600">2억원 (100% 환전용 현금)</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="font-bold text-green-600">수수료율</div>
                    <div className="text-sm text-gray-600">1.2% (은행-개인간거래 중간)</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="font-bold text-purple-600">일 거래액</div>
                    <div className="text-sm text-gray-600">7천만원</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="font-bold text-red-600">결과</div>
                    <div className="text-sm text-gray-600">연 153% 수익률</div>
                  </div>
                </div>
              </div>

              {/* Revenue Structure */}
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-800">수익 창출 구조</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-3">1. 환전 스프레드 수익</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 매매기준율과 고객환율의 차이에서 발생</li>
                      <li>• 은행보다 저렴, 개인거래보다 안전한 중간 포지션</li>
                      <li>• 24시간 무인 운영으로 최대 활용률</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">2. 높은 자본 회전율</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 시드머니 대비 거래량 비율이 핵심</li>
                      <li>• 한국: 2억 시드머니로 연 255억 거래 (127배 회전)</li>
                      <li>• 캄보디아 목표: 35% 수준만 달성해도 44배 회전</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-3">3. 복리 효과</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 월 4.4% 수익률의 복리 적용</li>
                      <li>• 3년 후 총 162% 누적 수익 가능</li>
                      <li>• 지속적인 재투자로 수익률 극대화</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Competitive Advantages */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">캄보디아 적용 시 경쟁 우위</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-medium">24시간 서비스</div>
                        <div className="text-sm text-gray-600">기존 환전소 영업시간 제한 극복</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Globe className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="font-medium">관광지 접근성</div>
                        <div className="text-sm text-gray-600">호텔, 공항, 관광지 설치로 편의성 극대화</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Users className="w-6 h-6 text-purple-600" />
                      <div>
                        <div className="font-medium">다국가 화폐</div>
                        <div className="text-sm text-gray-600">16개국 화폐 지원으로 다양한 관광객 유치</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-red-600" />
                      <div>
                        <div className="font-medium">즉시 환전</div>
                        <div className="text-sm text-gray-600">은행 대기시간 없이 즉시 처리</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
                투자 구조 및 예상 수익률
              </h2>

              {/* Investment Structure */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">총 투자 규모: $150,000 (시드머니 중심)</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">한국식 투자 구조 적용</h4>
                    <div className="bg-white p-6 rounded-lg">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="font-medium">시드머니 (환전자금)</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">$150,000</div>
                          <div className="text-sm text-gray-500">100%</div>
                        </div>
                      </div>
                      <div className="pt-3 text-sm text-gray-600">
                        키오스크 내 환전용 현금
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        *하드웨어, 시스템 개발비 등은 별도 운영사 부담
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">투자자 모집 구조</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">최소 투자금:</span>
                        <span className="font-medium">$3,750 (30명 투자자)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">투자 방식:</span>
                        <span className="font-medium">시드머니 공동 투자</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">수익 배분:</span>
                        <span className="font-medium">투자 비율에 따른 수익 분배</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">운영 관리:</span>
                        <span className="font-medium">전문 운영사 위탁</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cambodia Scenarios */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">캄보디아 예상 수익률</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left font-bold">시나리오</th>
                        <th className="px-6 py-3 text-center font-bold">한국 대비 거래량</th>
                        <th className="px-6 py-3 text-center font-bold">일 거래액</th>
                        <th className="px-6 py-3 text-center font-bold">월 수익률</th>
                        <th className="px-6 py-3 text-center font-bold text-green-600">연간 수익률</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scenarios.map((scenario, index) => (
                        <tr key={index} className={`border-b ${index === 1 ? 'bg-green-50' : ''}`}>
                          <td className="px-6 py-4 font-medium">{scenario.name}</td>
                          <td className="px-6 py-4 text-center">{scenario.percentage}</td>
                          <td className="px-6 py-4 text-center">{scenario.daily}</td>
                          <td className="px-6 py-4 text-center font-bold text-blue-600">{scenario.monthly}</td>
                          <td className="px-6 py-4 text-center font-bold text-green-600">{scenario.annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recovery Plan */}
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">투자 회수 계획 (현실적 시나리오 기준)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">18개월</div>
                    <div className="text-gray-600">투자원금 완전 회수</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">24개월</div>
                    <div className="text-gray-600">원금 + 54% 수익</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">36개월</div>
                    <div className="text-gray-600">총 162% 누적 수익</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'returns' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                재무 전망 및 수익률 분석
              </h2>

              {/* Korea vs Cambodia Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">한국 실제 성과 (검증된 데이터)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">일 거래액:</span>
                      <span className="font-bold">7천만원 (₩70M)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">월 수익:</span>
                      <span className="font-bold text-green-600">2,520만원 (₩25.2M)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">월 수익률:</span>
                      <span className="font-bold text-green-600">12.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">연간 수익률:</span>
                      <span className="font-bold text-green-600">153.3%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">캄보디아 예상 성과 (보수적 추정)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">구분</th>
                          <th className="text-center py-2">보수적</th>
                          <th className="text-center py-2">현실적</th>
                          <th className="text-center py-2">적극적</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="py-2 text-gray-600">일 거래액</td>
                          <td className="py-2 text-center">$9,400</td>
                          <td className="py-2 text-center font-medium">$16,500</td>
                          <td className="py-2 text-center">$23,500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-gray-600">월 수익</td>
                          <td className="py-2 text-center">$950</td>
                          <td className="py-2 text-center font-medium text-green-600">$1,650</td>
                          <td className="py-2 text-center">$2,350</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-gray-600">월 수익률</td>
                          <td className="py-2 text-center">2.5%</td>
                          <td className="py-2 text-center font-bold text-green-600">4.4%</td>
                          <td className="py-2 text-center">6.3%</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">연간 수익률</td>
                          <td className="py-2 text-center">31%</td>
                          <td className="py-2 text-center font-bold text-green-600">54%</td>
                          <td className="py-2 text-center">78%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 3-Year Simulation */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">3년 누적 수익률 시뮬레이션</h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">현실적 시나리오 (연 54% 수익률)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left font-bold">연도</th>
                          <th className="px-6 py-3 text-center font-bold">투자원금</th>
                          <th className="px-6 py-3 text-center font-bold">연간수익</th>
                          <th className="px-6 py-3 text-center font-bold">누적수익</th>
                          <th className="px-6 py-3 text-center font-bold">총자산</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4">1년차</td>
                          <td className="px-6 py-4 text-center">$150,000</td>
                          <td className="px-6 py-4 text-center text-green-600">$81,000</td>
                          <td className="px-6 py-4 text-center">$81,000</td>
                          <td className="px-6 py-4 text-center font-bold">$231,000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-6 py-4">2년차</td>
                          <td className="px-6 py-4 text-center">$150,000</td>
                          <td className="px-6 py-4 text-center text-green-600">$81,000</td>
                          <td className="px-6 py-4 text-center">$162,000</td>
                          <td className="px-6 py-4 text-center font-bold">$312,000</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">3년차</td>
                          <td className="px-6 py-4 text-center">$150,000</td>
                          <td className="px-6 py-4 text-center text-green-600">$81,000</td>
                          <td className="px-6 py-4 text-center">$243,000</td>
                          <td className="px-6 py-4 text-center font-bold text-purple-600">$393,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-purple-600">3년 총 수익률: 162%</span>
                  </div>
                </div>
              </div>

              {/* Monthly Cash Flow */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">월별 현금 흐름 (현실적 시나리오)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">$1,650</div>
                    <div className="text-gray-600">월 투자 수익</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">$165</div>
                    <div className="text-gray-600">개인 투자자 배당 (3.75만달러 투자시)</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">$1,980</div>
                    <div className="text-gray-600">연간 개인 배당 (투자금 대비 5.3%/월)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'risks' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                리스크 관리 및 보증 구조
              </h2>

              {/* Guarantee Structure */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">보증보험 구조</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">1차 보증</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>• 캄보디아 현지 보증보험사</p>
                      <p>• 원금의 80% 보증</p>
                      <p>• 보증료: 연 2-3%</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-3">2차 안전장치</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>• 키오스크 하드웨어 담보 (가격 협의 중)</p>
                      <p>• 환전용 시드머니 담보 ($150,000)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">주요 리스크 및 대응방안</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-3">1. 정치적/규제 리스크</h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>리스크:</strong> 정부 정책 변화, 외환 규제 강화
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>대응:</strong> 정부 승인 사전 취득, 현지 파트너십 강화
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-3">2. 환율 변동 리스크</h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>리스크:</strong> USD/KHR 환율 급변동
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>대응:</strong> 헤징 계약, 다국가 화폐 포트폴리오
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-3">3. 기술적 리스크</h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>리스크:</strong> 시스템 오류, 해킹, 하드웨어 고장
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>대응:</strong> 24시간 모니터링, 보안 시스템, 보험 가입
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-3">4. 운영 리스크</h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>리스크:</strong> 현금 도난, 부정 사용, 관리 부실
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>대응:</strong> CCTV, 보안업체 계약, 전문 운영팀
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Investment Terms */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">최종 투자 조건</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">최소 투자금:</span>
                      <span className="font-bold text-blue-600">$3,750</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">예상 수익률:</span>
                      <span className="font-bold text-green-600">월 4.4% / 연 54%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">투자 기간:</span>
                      <span className="font-bold">3년</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">보증 범위:</span>
                      <span className="font-bold text-purple-600">원금의 80% 보증</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">배당 주기:</span>
                      <span className="font-bold">매월 현금 배당</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">투자 회수:</span>
                      <span className="font-bold text-orange-600">18개월 내</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CambodiaKioskProposal;
