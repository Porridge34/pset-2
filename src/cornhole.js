const cornhole_width = 24;
const cornhole_height = 48;
const hole_diameter = 6;
const hole_area = Math.pow(hole_diameter/2,2)*Math.PI;
const cornhole_area = cornhole_height*cornhole_width-hole_area;
console.log("The surface area of a standard Cornhole board is "+cornhole_area.toLocaleString(undefined, {maximumFractionDigits:2})+" square inch(es).")
