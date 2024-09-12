const baseSize = 37.5;

const setRem = () => {
    const scale = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 1)}px`;
}

setRem();

window.onresize = () => {
    setRem();
}

export default baseSize;