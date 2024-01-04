// Đoạn mã để chuyển đổi giữa các tab
let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        let target = tab.getAttribute("data-target");
        tabContents.forEach(tc => {
            if (tc.getAttribute("id") == target) {
                tc.classList.add("active");
            } else {
                tc.classList.remove("active");
            }
        });
    });
});



let select = document.querySelector(".select");
let rows = document.querySelectorAll(".large-table tr");
select.addEventListener("change", function() {
    let value = select.value;
    rows.forEach(row => {
        let cell = row.querySelector("td:last-child");
        if (cell) {
            cell.textContent = value;
        }
    });
});