
function display(event, tabName) {
    var tabContent = document.getElementsByClassName("container--menu-content")
    //var tabLinks = document.getElementsByClassName("container--menu-list")

    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}