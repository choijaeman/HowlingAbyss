const addButton = document.getElementById("addMember");
const divideButton = document.getElementById("divideTeams");
const inputField = document.getElementById("teamMemberInput");
const membersListDiv = document.getElementById("teamMembersList");
const team1List = document.getElementById("team1List");
const team2List = document.getElementById("team2List");

let teamMembers = []; // 전체 팀원 목록

// 팀원 추가
addButton.addEventListener("click", () => {
  const memberName = inputField.value.trim();
  if (memberName) {
    teamMembers.push(memberName); // 팀원 목록에 추가
    updateTeamMembersList(); // 팀원 목록 갱신
    inputField.value = ""; // 입력 필드 초기화
  } else {
    alert("팀원 이름을 입력하세요!");
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
    .join("");
}

// 팀 나누기
divideButton.addEventListener("click", () => {
  if (teamMembers.length < 2) {
    alert("팀원을 최소 2명 이상 추가하세요!");
    return;
  }

  // 랜덤 섞기
  const shuffledMembers = [...teamMembers].sort(() => Math.random() - 0.5);

  // 두 팀으로 나누기
  const half = Math.ceil(shuffledMembers.length / 2);
  const team1 = shuffledMembers.slice(0, half);
  const team2 = shuffledMembers.slice(half);

  // 팀 목록 업데이트
  team1List.innerHTML = team1.map((name) => `<li>${name}</li>`).join("");
  team2List.innerHTML = team2.map((name) => `<li>${name}</li>`).join("");
});
