function login() {
  let emailDigitado = document.getElementById("email").value;
  let senhaDigitada = document.getElementById("senha").value;

  let emailSalvo = localStorage.getItem("email");
  let senhaSalva = localStorage.getItem("senha");

  if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html"; // aqui vai sua página de produtos
  } else {
    alert("Email ou senha incorretos!");
  }
}
