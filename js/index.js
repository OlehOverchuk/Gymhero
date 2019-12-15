isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;

document.getElementById("When")
        .addEventListener("click", function() {
  document.getElementById("clock").hidden = true;
  document.getElementById("now").hidden = false;
}, false);

const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);