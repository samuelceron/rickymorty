export const buildSlider = (count) => {
    const slider = document.createElement("container_slider");
    slider.setAttribute('id', 'container_slider')
    slider.innerHTML = `
        <input type="range" value="${count/2}" min="2" max="${count}" oninput="this.nextElementSibling.value = this.value">
        <output id="output">${count/2}</output>
    `;
    return slider;
}
