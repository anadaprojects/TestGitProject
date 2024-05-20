function confirmExit() {
   
    let answer = confirm("Ви впевнені, що хочете покинути сайт?");


    if (answer) {
        alert("Дякуємо за відвідування!");м
        window.location = "https://www.example.com"; 
    } else {
        alert("Чудово! Залишайтесь з нами.");
    }
}




