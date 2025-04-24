function checkLogin(event) {
    event.preventDefault(); 
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    const validEmail = "admin@gmail.com";
    const validPassword = "admin123";
  
    if (email === validEmail && password === validPassword) {
      message.style.color = "white";
      message.textContent = "Login berhasil! Mengalihkan...";
      setTimeout(() => {
        window.location.href = "https://kyonkyon0.github.io/DODO_STORE/";
      }, 1000);
    } else {
      message.style.color = "white";
      message.textContent = "Email atau Password salah!";
    }
  }