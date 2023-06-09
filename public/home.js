// home.js
async function checkAdminStatus() {
  try {
    const response = await fetch('/admin', {
      credentials: 'same-origin' // 쿠키 전송 설정
    });
    const { isAdmin, username } = await response.json();
    console.log(isAdmin);

    const usernameElement = document.getElementById('username');
    usernameElement.textContent = `${username}`; // Set the username dynamically

    const editWordButton = document.getElementById('edit-word');
    if (isAdmin == true) {
      editWordButton.addEventListener('click', () => {
        window.location.href = 'word-list-edit.html'; // Redirect to the word edit page
      });
    } else {
      editWordButton.style.display = 'none'; // Hide the button if not an admin
    }
  } catch (error) {
    console.error('Error checking admin status:', error);
  }
}

checkAdminStatus();

    // 로그아웃 버튼 클릭 시
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', logout);

    async function logout() {
        try {
          const response = await fetch('/logout', {
            method: 'POST',
            credentials: 'same-origin' // 쿠키 전송 설정
          });
    
          if (response.ok) {
            alert('로그아웃 되었습니다.');
            window.location.href = 'login.html'; // Redirect to the login page
          } else {
            alert('로그아웃 중 오류가 발생했습니다.');
          }
        } catch (error) {
          console.error('로그아웃 요청 중 오류:', error);
        }
      }

  // 단어 리스트 버튼 클릭 시
  const wordListButton = document.getElementById('word-list-button');
  wordListButton.addEventListener('click', () => {
    window.location.href = 'word-list.html'; // 단어 리스트 페이지로 이동
  });

  // 단어 그룹 버튼 클릭 시
  const wordGroupButton = document.getElementById('word-group-button');
  wordGroupButton.addEventListener('click', () => {
    window.location.href = 'group.html'; // 단어 그룹 페이지로 이동
  });

  // Daily Test 목표 점수 버튼 클릭 시
  const dailyTestGoalButton = document.getElementById('daily-test-goal-button');
  dailyTestGoalButton.addEventListener('click', () => {
    window.location.href = 'targetGoal.html'; // Daily Test 목표 점수 페이지로 이동
  });

  // Daily Test 버튼 클릭 시
  const dailyTestButton = document.getElementById('daily-test-button');
  dailyTestButton.addEventListener('click', () => {
    window.location.href = 'daily-test-group.html'; // Daily Test 페이지로 이동
  });

  // 능력 점검 Test 버튼 클릭 시
  const abilityTestButton = document.getElementById('ability-test-button');
  abilityTestButton.addEventListener('click', () => {
    window.location.href = 'ability-test.html'; // 능력 점검 Test 페이지로 이동
  });

  // 건의사항 게시판 버튼 클릭 시
  const suggestionBoardButton = document.getElementById('suggestion-board-button');
  suggestionBoardButton.addEventListener('click', () => {
    window.location.href = 'suggestion-board.html'; // 건의사항 게시판 페이지로 이동
  });

;
