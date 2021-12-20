const reportDiv = document.getElementById("lb_report");
const menuBar = document.getElementById("lb_menubar");
const parentDiv = reportDiv.parentElement;
const displayWidth = window.innerWidth;
const sectionTitles = document.getElementsByClassName("lb_part_title_actions");

const maxWidth = 1000;

parentDiv.style.position = "absolute";
parentDiv.style.width = "100%";
parentDiv.style.display = "flex";
parentDiv.style.flexDirection = "column";
parentDiv.style.alignItems = "center";

reportDiv.style.width = "95%";
reportDiv.style.maxWidth = maxWidth + 'px';
reportDiv.style.margin = "0 15px";

menuBar.style.width = "100%";
menuBar.style.maxWidth = maxWidth + 15 + 'px';

for (let i = 0; i < sectionTitles.length; i++) {
    const element = sectionTitles[i];
    element.removeAttribute = "100%";
    element.style.width = "100%";
    console.log(element)
}