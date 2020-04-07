(() => {
    const hours = selector(".hours");
    const min = selector(".min");
    const sec = selector(".sec");
 
    const checkbox = document.getElementById('switch');
    const img = document.getElementById('shops');
    //setinterval method
    setInterval(()=>{
        const time = new Date();
        hours.textContent = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        min.textContent = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        sec.textContent = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

    },1000);
    //checkbox light
    checkbox.onchange = (event) => {
        if (event.target.checked) {
            img.src ="assets/Night_5.png";
        } else {
            img.src ="assets/Night_4.png";
        }
    }




})();

function selector(element) {
    return document.querySelector(element);
}