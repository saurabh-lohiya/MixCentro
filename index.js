const xylons = document.getElementsByClassName("xylons");
const sound = document.getElementsByClassName("sound");
// console.log(sound);

[...xylons].forEach((xylon, index) => {
    xylon.addEventListener("click", () => {
        sound[index].currentTime = 0;
        sound[index].play();
    });
});
