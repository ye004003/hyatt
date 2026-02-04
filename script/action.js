// 1. 토글 함수 (이 함수는 전역 범위에 있어야 HTML에서 호출 가능합니다)
function toggleContent(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const currentDisplay = window.getComputedStyle(content).display;

    if (currentDisplay === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
