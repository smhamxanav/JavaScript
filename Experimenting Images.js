//For images we need to import the Duke Library named "SimpleImage"
//or just run the code on the Duke's IDE created
// https://www.dukelearntoprogram.com//course1/example/index.php


//Experimenting with Images

var img = new SimpleImage('smallpanda.png');
print(img);

var width = img.getWidth();
var height = img.getHeight();
var pixel = img.getPixel(200,150);
var red = pixel.getRed();
var green = pixel.getGreen();
var blue = pixel.getBlue();

print('Width:', width);
print('Height:', height);
print('Pixel:', pixel);
print('RGB Value of pixel is ('+ red.toString()+','+ green.toString() +','+ blue.toString() + ')');
