// DarkOne4 Global Script
// Code by tedGo, using partial code by eXtremeHunter1972

var configPath = fb.FoobarPath + "themes\\DarkOne4F\\";
var imgPath = configPath + "Images\\";
var g_signs = gdi.Image(imgPath + "Signs.png");

var btn_font = gdi.Font("Arial Black", 7, 0);
var ui_type = window.InstanceType;
var ww = 0; wh = 0;

// ----- CREATE RGB(A) ----------------------------------------------
function RGBA(r, g, b, a) {
	return ((a << 24) | (r << 16) | (g << 8) | (b));
}

function RGB(r, g, b) {
	return (0xff000000 | (r << 16) | (g << 8) | (b));
}

// ----- CREATE CUSTOM COLOURS --------------------------------------
function CustomColour(colour){
	tempc = colour.split("-");
	return ((tempc[3] << 24) | (tempc[0]<<16) | (tempc[1]<<8) | (tempc[2]));
}

function setAlpha(color, a) {
	return ((color & 0x00ffffff) | (a << 24));
}

function toRGB(d){
	var d, r, g, b;
	d = d - 0xff000000; r = d >> 16; g = d >> 8 & 0xFF; b = d & 0xFF;
	return [r,g,b];
}

function combColours(c1, c2, f){
	var c1, c2;
	c1 = toRGB(c1);	c2 = toRGB(c2);

	var r, g, b;
	r = Math.round(c1[0] + f * (c2[0] - c1[0])); g = Math.round(c1[1] + f * (c2[1] - c1[1])); b = Math.round(c1[2] + f * (c2[2] - c1[2]));
	return (0xff000000 | (r << 16) | (g << 8) | (b));
}

// ----- GET UI COLOURS ---------------------------------------------
function get_colors() {
	ui_backcol = ui_type == 0 ? window.GetColorCUI(3) : window.GetColorDUI(1);
	ui_textcol = ui_type == 0 ? window.GetColorCUI(0) : window.GetColorDUI(0);
	ui_btntxtcol = ui_type == 0 ? window.GetColorCUI(2) : window.GetColorDUI(0);
}

get_colors();

function on_colors_changed() {
	get_colors();
	window.Repaint();
}