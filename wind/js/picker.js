// DOM 요소 가져오기
const addButton = document.getElementById("addMember");
const inputField = document.getElementById("teamMemberInput");
const membersListDiv = document.getElementById("teamMembersList");
const boxContainer = document.getElementById("boxContainer");

let teamMembers = []; // 팀원 목록

// 팀원 추가
addButton.addEventListener("click", () => {
  const memberName = inputField.value.trim();
  if (memberName) {
    teamMembers.push(memberName); // 팀원 목록에 추가
    updateTeamMembersList(); // 팀원 목록 갱신
    inputField.value = ""; // 입력창 초기화
  } else {
    alert("팀원 이름을 입력하세요!"); // 입력값이 없을 경우 경고
  }
});

// 엔터 키 입력 시 팀원 추가
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addButton.click(); // "추가" 버튼 클릭 이벤트 실행
  }
});

// 팀원 목록 업데이트
function updateTeamMembersList() {
  membersListDiv.innerHTML = teamMembers
    .map((name, index) => `<p>${index + 1}. ${name}</p>`)
    .join(""); // HTML로 팀원 목록 표시
}

// 팀장 선택
function pickLeaders() {
  if (teamMembers.length < 2) {
    alert("최소 2명 추가하세요!"); // 팀원이 2명 미만일 경우 경고
    return;
  }

  const box = document.getElementById("teamBox");
  const shuffledMembers = [...teamMembers].sort(() => Math.random() - 0.5); // 랜덤 정렬
  const leaders = shuffledMembers.slice(0, 2); // 상위 2명 선택

  // 폭발 애니메이션 적용
  box.classList.add("exploded");
  setTimeout(() => {
    box.textContent = `${leaders[0]} & ${leaders[1]}`; // 팀장 표시
    box.style.backgroundColor = "green"; // 팀장 색상
  }, 500);

  // 박스 재생성
  setTimeout(() => {
    alert(`팀장: ${leaders[0]} & ${leaders[1]}`); // 팀장 알림
    resetBox(); // 박스 초기화
  }, 1500);
}

// 박스 재생성
function resetBox() {
  boxContainer.innerHTML = `
    <div class="box" id="teamBox">클릭!</div>
  `;
  const newBox = document.getElementById("teamBox");
  newBox.addEventListener("click", pickLeaders); // 새로운 박스 클릭 이벤트 등록
}

// 초기 박스 클릭 이벤트 등록
document.getElementById("teamBox").addEventListener("click", pickLeaders);
