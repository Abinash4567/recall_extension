const slider = document.getElementById('numberSlider');
const output = document.getElementById('sliderValue');

slider.oninput = function() {
    output.textContent = this.value;
    window.stage = this.value;
}
