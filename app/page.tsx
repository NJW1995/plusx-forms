"use client";
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState("");

  const forms = [
    { id: 1, tag: "최초 신청", title: "전세대출 이자지원 최초 신청", target: "만 2년 이상 근속한 임직원", date: "대출 실행 전", desc: "최초로 해당 복지를 실행하고자 할 때", link: "/form1.html" },
    { id: 2, tag: "분기별", title: "전세대출 이자지원금 신청 (분기별)", target: "이자지원 대상자로 선정된 임직원", date: "매 분기 종료 후 10일 이내", desc: "실제 납부한 분기별 이자 내역 증빙 및 청구할 때", link: "/form2.html" },
    { id: 3, tag: "변경 신청", title: "전세대출 이자지원 변경 신청", target: "이자지원 대상자 중 변경사항 발생한 임직원", date: "변경사항 발생분 포함된 분기별 신청 시", desc: "기존 진행중인 전세자금대출 내역 변경되었을 때", link: "/form4.html" },
    { id: 4, tag: "인사/복지", title: "근속수당 / REFRESH 휴가 신청서", target: "만 2년 이상 근속한 임직원", date: "해당 근속 연수 도래 시", desc: "근속수당 및 REFRESH휴가를 신청하고자 할 때", link: "/form3.html" },
    { id: 5, tag: "인사/복지", title: "경조사비 신청서", target: "모든 임직원", date: "경조사 발생 시", desc: "경조사 관련 복지 신청할 때", link: "/form5.html" },
  ];

  const filteredForms = forms.filter(f => f.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white border-b-2 border-gray-100 text-center py-10 px-5">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Plus X Document Hub</h1>
        <p className="text-gray-600 mb-5">플러스엑스에서 사용중인 사내 표준 서식 보관함입니다.</p>
        <div className="max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="신청서 서식명을 검색하세요."
            style={{
              width: '100%',
              padding: '12px 20px',
              border: '2px solid #ddd',
              borderRadius: '25px',
              fontSize: '16px',
              outline: 'none'
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 max-w-7xl mx-auto">
        {filteredForms.map((form) => (
          <div 
            key={form.id} 
            onClick={() => window.location.href = form.link}
            style={{
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              borderLeft: '4px solid #ff6b00'
            }}
          >
            <span style={{
              display: 'inline-block',
              backgroundColor: '#f0f0f0',
              color: '#666',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>{form.tag}</span>
            <h3 className="text-xl font-bold mb-2">{form.title}</h3>
            <p className="text-sm text-gray-600"><strong>대상자:</strong> {form.target}</p>
            <p className="text-sm text-gray-600"><strong>작성일시:</strong> {form.date}</p>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{form.desc}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
