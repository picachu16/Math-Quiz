function getuser(){
player1=document.getElementById("player1_input").value;
player2=document.getElementById("player2_input").value;
localStorage.setItem("player1_name", player1);
localStorage.setItem("player2_name", player2);
window.location="game_page.html";
}