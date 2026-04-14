<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plus X 사내양식 보관함</title>
    <style>
        /* [디자인 설정 - CSS] */
        body {
            font-family: 'Pretendard', -apple-system, sans-serif;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #ffffff;
            border-bottom: 2px solid #eeeeee;
            text-align: center;
            padding: 40px 20px;
        }

        h1 { margin-bottom: 10px; color: #222; }

        .search-container {
            margin-top: 20px;
        }

        #searchInput {
            width: 100%;
            max-width: 500px;
            padding: 12px 20px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }

        #searchInput:focus {
            border-color: #ff6b00; /* 주황색 포인트 */
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            padding: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .card {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 25px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            position: relative;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            border-color: #ff6b00;
        }

        .card h3 {
            margin-top: 10px;
            font-size: 1.2rem;
            color: #111;
        }

        .card p {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.6;
            margin: 5px 0;
        }

        .tag {
            display: inline-block;
            background-color: #f0f0f0;
            color: #666;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <header>
        <h1>Plus X Document Hub</h1>
        <p>플러스엑스에서 사용중인 사내 표준 서식 보관함입니다.</p>
        <div class="search-container">
            <input type="text" id="searchInput" onkeyup="filterForms()" placeholder="신청서 서식명을 검색하세요.">
        </div>
    </header>

    <main class="card-grid" id="formGrid">
        <div class="card" onclick="location.href='form1.html'">
            <div class="tag">최초 신청</div>
            <h3>전세대출 이자지원 최초 신청</h3>
            <p><strong>대상자:</strong> 만 2년 이상 근속한 임직원</p>
            <p><strong>작성일시:</strong> 대출 실행 전</p>
            <p><strong>개요:</strong> 최초로 해당 복지를 실행하고자 할 때</p>
        </div>

        <div class="card" onclick="location.href='form2.html'">
            <div class="tag">분기별</div>
            <h3>전세대출 이자지원금 신청 (분기별)</h3>
            <p><strong>대상자:</strong> 이자지원 대상자로 선정된 임직원</p>
            <p><strong>작성일시:</strong> 매 분기 종료 후 10일 이내</p>
            <p><strong>개요:</strong> 실제 납부한 분기별 이자 내역 증빙 및 청구할 때</p>
        </div>

        <div class="card" onclick="location.href='form4.html'">
            <div class="tag">변경 신청</div>
            <h3>전세대출 이자지원 변경 신청</h3>
            <p><strong>대상자:</strong> 이자지원 대상자 중 변경사항 발생한 임직원</p>
            <p><strong>작성일시:</strong> 변경사항 발생분 포함된 분기별 신청 시</p>
            <p><strong>개요:</strong> 기존 진행중인 전세자금대출 내역 변경되었을 때</p>
        </div>

        <div class="card" onclick="location.href='form3.html'">
            <div class="tag">인사/복지</div>
            <h3>근속수당 / REFRESH 휴가 신청서</h3>
            <p><strong>대상자:</strong> 만 2년 이상 근속한 임직원</p>
            <p><strong>작성일시:</strong> 해당 근속 연수 도래 시</p>
            <p><strong>개요:</strong> 근속수당 및 REFRESH휴가를 신청하고자 할 때</p>
        </div>
        
        <div class="card" onclick="location.href='form5.html'">
            <div class="tag">인사/복지</div>
            <h3>경조사비 신청서</h3>
            <p><strong>대상자:</strong> 모든 임직원</p>
            <p><strong>작성일시:</strong> 경조사 발생 시</p>
            <p><strong>개요:</strong> 경조사 관련 복지 신청할 때</p>
        </div>
        
    </main>

    <script>
        function filterForms() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const grid = document.getElementById('formGrid');
            const cards = grid.getElementsByClassName('card');

            for (let i = 0; i < cards.length; i++) {
                let title = cards[i].getElementsByTagName("h3")[0];
                if (title.innerText.toLowerCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        }
    </script>
</body>
</html>
