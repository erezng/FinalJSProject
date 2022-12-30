export class Color {
    red;
    green;
    blue;
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    hex() {
        const redHex = this.red.toString(16).padStart(2, "0");
        const greenHex = this.green.toString(16).padStart(2, "0");
        const blueHex = this.blue.toString(16).padStart(2, "0");
        const hexColor = `#${redHex}${greenHex}${blueHex}`;
        return hexColor;
    }
    rgb() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}
//test the value of color
export function capTest(value) {
    //   let r = Math.max(0, value);
    //   r = Math.min(value, 255);
    //   return r;
    console.log(Math.max(0, value) && Math.min(255, value));
    return Math.max(0, value) && Math.min(255, value);
}
//get values
export function capRGB(r, g, b) {
    let red = capTest(r);
    let green = capTest(g);
    let blue = capTest(b);
    return [red, green, blue];
}
