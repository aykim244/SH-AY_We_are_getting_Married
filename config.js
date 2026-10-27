/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
hero: {
    showLabel: false,         // WEDDING INVITATION 문구 표시 여부
    nameSeparator: "   "      // 이름 사이 구분자 (공백 3칸)
  },

  groom: {
    name: "김성현",
    phone: "010-8602-2269",
    nameEn: "Groom",
    father: "김호동",
    mother: "박찬옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김아연",
    phone: "010-2783-0579",
    nameEn: "Bride",
    father: "김현규",
    mother: "윤진선",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2027-03-20",
    time: "11:00",
    venue: "서울대학교 연구공원 웨딩홀",
    address: "서울 관악구 관악로 1 연구공원 본관 1층",
    tel: "02-878-0465"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "한 권의 만화보다, 한 편의 게임보다,\n서로를 바라볼 때 가장 환하게 웃는 두 사람이\n영원을 약속하기로 했습니다.\n\n귀한 발걸음 하셔서 축복해 주시면\n큰 기쁨이 되겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "차가운 겨울을 시작으로\n4번의 사계절을 겪고\n봄을 맞이하였습니다.\n\n봄꽃처럼 피어날\n두 사람의 시작을\n축복해 주시면 감사드리겠습니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/8634826",
    naver: "https://naver.me/xgNS8Uf4"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김성현", bank: "농협은행", number: "302-0941-6334-11" },
      { role: "아버지", name: "김호동", bank: "농협은행", number: "079-02-495004" },
      { role: "어머니", name: "박찬옥", bank: "농협은행", number: "079-02-495004" }
    ],
    bride: [
      { role: "신부", name: "김아연", bank: "하나은행", number: "453-910434-11107" },
      { role: "어머니", name: "윤진선", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김성현 ♥ 김아연 결혼합니다",
    description: "2027년 3월 20일, 소중한 분들을 초대합니다."
  }
};
