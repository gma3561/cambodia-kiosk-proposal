import React from 'react';
import { TrendingUp, DollarSign, Shield, MapPin, BarChart3, Clock } from 'lucide-react';
import './App.css';

const KoreanKioskCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            한국 환전 키오스크 사례
          </h1>
          <p className="text-xl text-gray-600">실제 운영 중인 환전 키오스크 비즈니스 모델</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            한국 환전 키오스크 개요
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">사업 형태</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">운영 방식:</span>
                  <span className="font-medium">24시간 무인 자동 운영</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">투자 구조:</span>
                  <span className="font-medium">다수 투자자 공동 펀딩</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">시드머니:</span>
                  <span className="font-medium">2억원 (환전용 현금)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">수익 구조:</span>
                  <span className="font-medium">환전 스프레드 1.2% 수수료</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">실제 성과</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">일 거래액:</span>
                  <span className="font-bold text-blue-600">7천만원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">월 거래액:</span>
                  <span className="font-bold text-green-600">21억원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">연간 거래액:</span>
                  <span className="font-bold text-purple-600">255억원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">수수료율:</span>
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
            수익률 현황
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">12.6%</div>
              <div className="text-gray-600">월 수익률</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">153%</div>
              <div className="text-gray-600">연간 수익률</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">8개월</div>
              <div className="text-gray-600">투자금 회수</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">2,520만원</div>
              <div className="text-gray-600">월 수익금</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">구분</th>
                  <th className="px-6 py-3 text-center font-bold">거래액</th>
                  <th className="px-6 py-3 text-center font-bold">수익금액</th>
                  <th className="px-6 py-3 text-center font-bold text-green-600">수익률</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-6 py-4 font-medium">월간</td>
                  <td className="px-6 py-4 text-center">21억원</td>
                  <td className="px-6 py-4 text-center">2,520만원</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">12.6%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">연간</td>
                  <td className="px-6 py-4 text-center">255억원</td>
                  <td className="px-6 py-4 text-center">3억 660만원</td>
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
            한국 보증보험 형태
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">보증보험 구조</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">한국 보증보험사 원금 손실 보증</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">원금의 80% 보증 범위</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">보증료: 연 2-3%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">시드머니 담보 설정</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">리스크 관리</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">24시간 실시간 모니터링</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">CCTV 및 보안 시스템</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">현금 관리 전문업체 위탁</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">일일 정산 및 보고 시스템</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Operations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-8 h-8 text-red-600 mr-3" />
            키오스크 위치 및 운영
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-3">설치 위치</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 인천국제공항 터미널</li>
                <li>• 김포공항 국내선/국제선</li>
                <li>• 명동 관광특구</li>
                <li>• 강남역 지하상가</li>
                <li>• 홍대 상권 지역</li>
                <li>• 주요 대학교 캠퍼스</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">지원 화폐</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• USD (미국 달러)</li>
                <li>• EUR (유로)</li>
                <li>• JPY (일본 엔)</li>
                <li>• CNY (중국 위안)</li>
                <li>• GBP (영국 파운드)</li>
                <li>• 기타 12개국 화폐</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">운영 특징</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24시간 무인 운영</li>
                <li>• 실시간 환율 적용</li>
                <li>• 즉시 환전 처리</li>
                <li>• 다국어 인터페이스</li>
                <li>• 모바일 연동 서비스</li>
                <li>• 영수증 자동 발행</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">성공 요인</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">비즈니스 모델</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">높은 자본 회전율</div>
                    <div className="text-sm text-gray-600">2억 시드머니로 연 255억 거래 (127배 회전)</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">최적 수수료 설정</div>
                    <div className="text-sm text-gray-600">은행보다 저렴, 개인거래보다 안전한 중간 포지션</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">전략적 위치 선정</div>
                    <div className="text-sm text-gray-600">공항, 관광지 등 외국인 유동인구 집중 지역</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">운영 효율성</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">무인 운영 시스템</div>
                    <div className="text-sm text-gray-600">인건비 절약 및 24시간 서비스 제공</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">실시간 관리</div>
                    <div className="text-sm text-gray-600">원격 모니터링 및 즉시 대응 체계</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">안정적 수익 구조</div>
                    <div className="text-sm text-gray-600">보증보험으로 리스크 최소화</div>
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
