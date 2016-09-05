var rectOne   = {width: 10, height: 20};
var rectTwo   = {width: 32, height: 13};
var rectThree = {width: 20, height: 10};

var equal = function(rect1, rect2) {
  return ( (rect1.width  == rect2.width && rect1.height == rect2.height ) ||
           (rect1.height == rect2.width && rect1.width  == rect2.height ) );
};

var area = function(rect) {
  return rect.width * rect.height;
};

var perimeter = function(rect) {
  return (rect.width * 2) + (rect.height * 2);
};

var diagonal = function(rect) {
  var sqrtOf = Math.pow(rect.width, 2) + Math.pow(rect.height, 2);
  return Math.sqrt(sqrtOf);
};

var isSquare = function(rect) {
  if (rect.width === rect.height) {
    return true;
  } else {
    return false;
  }
};