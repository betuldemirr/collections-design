
function display(event, tabName) {
    var tabContent = document.getElementsByClassName("container--menu-content")
    var tabLinks = document.getElementsByClassName("container--menu-list")

    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.style.backgroundColor = "red"
}