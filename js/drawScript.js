function colorRect(left,right,width,height,drawColor){
      canvasContext.fillStyle = drawColor;
      canvasContext.fillRect(left,right,width,height);
      return;
}
function colorCirc(centerX,centerY,radius,drawColor){
      canvasContext.fillStyle = drawColor;
      canvasContext.beginPath();
      canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
      canvasContext.fill();
      return;
}
function colorText(showWords, textX,textY, fillColor, canvasfont) {
    canvasContext.font = canvasfont;
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
}