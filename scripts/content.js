const searchBox = document.getElementById('q');

if (searchBox && searchBox.value.trim() !== "") {
    document.title = searchBox.value + " - StartPage";
}
