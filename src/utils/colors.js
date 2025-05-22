const colorUtils = {
  areColorsTooSimilar: ({color1, color2}) => {
    const rgb1 = color1.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).slice(1);
    const rgb2 = color2.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).slice(1);
    const delta = 150;
    return rgb1.every((value, index) => {
      return Math.abs(parseInt(value, 16) - parseInt(rgb2[index], 16)) <= delta;
    });
  }
}

export default colorUtils;