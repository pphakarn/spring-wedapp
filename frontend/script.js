const API_URL = "http://localhost:4000/api/users";

// ✅ Register
// ฟังก์ชันเก็บข้อมูลจากฟอร์ม Sign Up และบันทึกลงใน localStorage
function storeInputValues() {
    // ดึงข้อมูลจากฟอร์ม Sign Up
    const name = document.getElementById('signup-name').value;
    const username = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วน
    if (!name || !username || !password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return; // หากข้อมูลไม่ครบ จะไม่ทำการบันทึก
    }

    
}

// ✅ Login
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    let result = await response.text();
    alert(result);
});


function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    // สลับการแสดงผลของฟอร์ม Login และ Sign Up
    loginForm.classList.toggle('d-none');
    signupForm.classList.toggle('d-none');
}