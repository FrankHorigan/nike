const SVGIcons = {
  "nike-4-logo-svgrepo-com.svg": {
    draw: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba(0,0,0,0)";
      ctx.miterLimit = 4;
      ctx.font = "15px ''";
      ctx.scale(0.1, 0.1);
      ctx.scale(4.150324762912698, 4.150324762912698);
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(192.756, 0);
      ctx.lineTo(192.756, 192.756);
      ctx.lineTo(0, 192.756);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(42.741, 71.477);
      ctx.bezierCurveTo(32.86, 83.081, 23.386, 97.471, 23.291, 108.227);
      ctx.bezierCurveTo(23.254, 112.274, 24.546, 115.807, 27.645, 118.483);
      ctx.bezierCurveTo(32.105, 122.337, 37.019, 123.696, 41.909, 123.704);
      ctx.bezierCurveTo(49.055, 123.714, 56.151, 120.831, 61.707, 118.608);
      ctx.bezierCurveTo(71.064, 114.866, 174.497, 69.949, 174.497, 69.949);
      ctx.bezierCurveTo(175.495, 69.449, 175.308, 68.826, 174.059, 69.137);
      ctx.bezierCurveTo(173.555, 69.263, 61.456, 99.642, 61.456, 99.642);
      ctx.translate(54.71468582831338, 75.80595325901092);
      ctx.rotate(0);
      ctx.arc(0, 0, 24.771, 1.2951744244375323, 1.562023287379716, false);
      ctx.rotate(0);
      ctx.translate(-54.71468582831338, -75.80595325901092);
      ctx.bezierCurveTo(46.317, 100.627, 38.651, 95.845, 38.713, 85.768);
      ctx.bezierCurveTo(38.737, 81.825, 39.944, 77.07, 42.741, 71.477);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
  }
};

window.onload = function () {
  const canvas = document.getElementById("nikeCanvas");
  const ctx = canvas.getContext("2d");

  if (ctx && SVGIcons["nike-4-logo-svgrepo-com.svg"]) {
    SVGIcons["nike-4-logo-svgrepo-com.svg"].draw(ctx);
  }
};
