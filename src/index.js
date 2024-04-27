import "./styles/main.css";
import img from "./assets/logo.png";

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

document.addEventListener("DOMContentLoaded", function() {
    const homeTabButton = document.getElementById("home");
    const homeTabContent = document.querySelector(".home");
  
    homeTabButton.classList.add('active');
    homeTabContent.classList.add('active');
  });

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

