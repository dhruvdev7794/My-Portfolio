function openTab(tabName){
  var tabContent = document.getElementsByClassName("mainContent")
  for(i=0; i<tabContent.length; i++){
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block"
}

openTab('mainHead');
