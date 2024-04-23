const canvas =  document.querySelector('#canvas');
let canvasOptions = {
    separation: 40,
    color: '#a1a1a1',
    width: window.innerWidth,
    height: window.innerHeight,
    margin: {
        left: 20,
        top: 20
    }
};

const colours = ['#FFEBCD', '#3CB371', '#1E90FF', '#B0C4DE', '#90EE90', '#F08080', '#F8F8FF', '#BA55D3', '#F4A460'];
const sizes = [1, 2, 3];

function drawSentence() {
    prepareGird();
    const sentence = document.getElementById('sentence-input').value; 
    if (sentence == null || sentence === '') {
        return;
    }

    const ctx = getCtx();
    const words = sentence.split(' ');

    const totalNumberInLine = getWidthIterationCount();
    let startDot = {
        startDotX: 0,
        startDotY: 0
    };
    startDot = calculateLastUsedDots(totalNumberInLine, startDot, 0);
    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split('');
        letters.filter(function (x) { return x !== ''; }).forEach(function (letter) {
            ctx.strokeStyle = colours[Math.floor(Math.random() * colours.length)];
            ctx.lineWidth = sizes[Math.floor(Math.random() * sizes.length)];
            switch(letter.toUpperCase()) {
                case 'A': { drawALetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'B': { drawBLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'C': { drawCLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'D': { drawDLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'E': { drawELetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'F': { drawFLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'G': { drawGLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'H': { drawHLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'I': { drawILetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'J': { drawJLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'K': { drawKLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'L': { drawLLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'M': { drawMLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 3); break; }
                case 'N': { drawNLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'O': { drawOLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'P': { drawPLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'Q': { drawQLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'R': { drawRLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'S': { drawSLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'T': { drawTLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'U': { drawULetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'V': { drawVLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'W': { drawWLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 3); break; }
                case 'X': { drawXLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'Y': { drawYLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                case 'Z': { drawZLetter(ctx, startDot.startDotX, startDot.startDotY); startDot = calculateLastUsedDots(totalNumberInLine, startDot, 2); break; }
                default: break;
            }
        });

        startDot = calculateLastUsedDots(totalNumberInLine, startDot, 1);
    }
}

function calculateLastUsedDots(totalNumberInLine, startDot, skipping) {
    startDot.startDotX += skipping;
    if (totalNumberInLine < (startDot.startDotX + 2)) {
        startDot.startDotX = 0;
        startDot.startDotY += 3;
    }

    return startDot;
}

function drawALetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 1.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawHorizontalLine(ctx, startDotX, startDotY + 1, 1);
}

function drawBLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 0.5);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 1.25, 0.5);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY, 1, 'end', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1, 1, 'end', 'outside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1, 1, 'end', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 2, 1, 'end', 'outside');
}

function drawCLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.5);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawDLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 1.5);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY, 1, 'end', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 2, 1, 'end', 'outside');
}


function drawELetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY, 1);
    drawHorizontalLine(ctx, startDotX, startDotY + 1, 1);
    drawHorizontalLine(ctx, startDotX, startDotY + 2, 1);
}

function drawFLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY, 1);
    drawHorizontalLine(ctx, startDotX, startDotY + 1, 1);
}

function drawGLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.5);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 1, 0.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawHorizontalLine(ctx, startDotX + 0.5, startDotY + 1, 0.5);
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawHLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 1, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY + 1, 1);
}

function drawILetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX + 0.5, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY, 1);
    drawHorizontalLine(ctx, startDotX, startDotY + 2, 1);
}

function drawJLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX + 1, startDotY, 1.75);
    drawVerticalLine(ctx, startDotX, startDotY + 1, 0.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawKLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);

    drawLine(ctx, startDotX, startDotY + 1, 1, 1);
    drawLine(ctx, startDotX, startDotY + 1, 1, -1);
}

function drawLLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY + 2, 1);
}

function drawMLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 2, startDotY, 2);

    drawLine(ctx, startDotX, startDotY, 1, 1);
    drawLine(ctx, startDotX + 1, startDotY + 1, +1, -1);
}

function drawNLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 1, startDotY, 2);

    drawLine(ctx, startDotX, startDotY, 1, 2);
}

function drawOLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.5);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 1.5);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawPLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 0.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1, 1, 'both', 'outside');
}

function drawQLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.5);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 1.5);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
    drawCurvedHorizontalLine(ctx, startDotX + 1, startDotY + 1.75, 0.5, 'both', 'outside');
}

function drawRLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 1.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 0.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1, 1, 'both', 'outside');
    drawLine(ctx, startDotX, startDotY + 1, 1, 1);
}

function drawSLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY + 0.25, 0.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 1, 0.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY + 0.25, 0.25);
    drawVerticalLine(ctx, startDotX, startDotY + 1.5, 0.25);
    
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'both', 'inside');
    drawHorizontalLine(ctx, startDotX, startDotY + 1, 1);
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawTLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX + 0.5, startDotY, 2);

    drawHorizontalLine(ctx, startDotX, startDotY, 1);
}

function drawULetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY,1.75);
    drawVerticalLine(ctx, startDotX + 1, startDotY, 1.75);

    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'both', 'outside');
}

function drawVLetter(ctx, startDotX, startDotY) {
    drawLine(ctx, startDotX, startDotY, 0.5, 2);
    drawLine(ctx, startDotX + 0.5, startDotY + 2, 0.5, -2);
}

function drawWLetter(ctx, startDotX, startDotY) {
    drawVerticalLine(ctx, startDotX, startDotY, 2);
    drawVerticalLine(ctx, startDotX + 2, startDotY, 2);

    drawLine(ctx, startDotX, startDotY + 2, 1, -1);
    drawLine(ctx, startDotX + 1, startDotY + 1, +1, 1);
}

function drawXLetter(ctx, startDotX, startDotY) {
    drawLine(ctx, startDotX, startDotY, 1, 2);
    drawLine(ctx, startDotX, startDotY + 2, 1, -2);
}

function drawYLetter(ctx, startDotX, startDotY) {
    drawLine(ctx, startDotX, startDotY, 0.5, 1);
    drawLine(ctx, startDotX + 0.5, startDotY + 1, 0.5, -1);

    drawVerticalLine(ctx, startDotX + 0.5, startDotY + 1, 1);
}

function drawZLetter(ctx, startDotX, startDotY) {
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 0.25, 1, 'start', 'outside');
    drawCurvedHorizontalLine(ctx, startDotX, startDotY + 1.75, 1, 'start', 'outside');
    
    drawLine(ctx, startDotX, startDotY + 1.75, 1, -1.5);
}


function prepareGird() {
    canvas.width = window.innerWidth - canvasOptions.margin.left;
    canvas.height = window.innerHeight - canvasOptions.margin.top;
    canvasOptions.width = canvas.width;
    canvasOptions.height = canvas.height;
    if (!canvas.getContext) {
        return;
    }
    
    const ctx = getCtx();
    const heightIterationCount = getHeightIterationCount();
    const widthIterationCount = getWidthIterationCount();
    console.log(canvas.width);
    console.log(heightIterationCount);
    for (let j = 0; j < heightIterationCount; j++) {
        for (let i = 0; i < widthIterationCount; i++) {
            const x = getDotXPosition(i)
            const y = getDotYPosition(j);
            drawDot(ctx, x, y);
        }
    }

    ctx.closePath();
}

function drawDot(ctx, pointX, pointY) {
    ctx.beginPath();
    ctx.fillStyle = canvasOptions.color;
    ctx.fillRect(pointX, pointY, 2, 2);
    ctx.fill();
}

function getPointAxis(xNumber, yNumber) {
    return {
        pointX: getDotXPosition(xNumber),
        pointY: getDotYPosition(yNumber)
    };
}

function getDotYPosition(number) {
    return (number * getDotSpaceSize()) + canvasOptions.margin.top;
}

function getDotXPosition(number) {
    return (number * getDotSpaceSize()) + canvasOptions.margin.left;
}

function getWidthIterationCount() {
    return canvasOptions.width / getDotSpaceSize();
}

function getHeightIterationCount() {
    return canvasOptions.height / getDotSpaceSize();
}

function getDotSpaceSize() {
    return Math.floor(canvas.width / canvasOptions.separation);
}

function getCtx() {
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = canvasOptions.color;
    ctx.lineWidth = 2;
    return ctx;
}

function drawHorizontalLine(ctx, pointX, pointY, shifting) {
    ctx.beginPath();
    ctx.moveTo(getDotXPosition(pointX), getDotYPosition(pointY));
    ctx.lineTo(getDotXPosition(pointX + shifting), getDotYPosition(pointY));
    ctx.stroke();
}

function drawVerticalLine(ctx, pointX, pointY, shifting) {
    ctx.beginPath();
    ctx.moveTo(getDotXPosition(pointX), getDotYPosition(pointY));
    ctx.lineTo(getDotXPosition(pointX), getDotYPosition(pointY + shifting));
    ctx.stroke();
}

function drawLine(ctx, pointX, pointY, xShifting, yShifting) {
    ctx.beginPath();
    ctx.moveTo(getDotXPosition(pointX), getDotYPosition(pointY));
    ctx.lineTo(getDotXPosition(pointX + xShifting), getDotYPosition(pointY + yShifting));
    ctx.stroke();
}

function drawCurvedHorizontalLine(ctx, pointX, pointY, shifting, curvePosition, curveDirection) {
    ctx.beginPath();
    const curvingAmount = curveDirection === 'inside' ? 12 : -12;
    ctx.moveTo(getDotXPosition(pointX), getDotYPosition(pointY));

    let startY;
    let middleX;
    let endY;
    if (curvePosition === 'both') {
        startY = getDotYPosition(pointY) - curvingAmount;
        middleX = getDotYPosition(pointY) - curvingAmount;
        endY = getDotYPosition(pointY);
    } else if (curvePosition === 'start') {
        startY = getDotYPosition(pointY) + curvingAmount;
        middleX = getDotYPosition(pointY);
        endY = getDotYPosition(pointY);
        
    } else {
        startY = getDotYPosition(pointY);
        middleX = getDotYPosition(pointY);
        endY = getDotYPosition(pointY) + curvingAmount;
    }

    ctx.bezierCurveTo(getDotXPosition(pointX), startY,
                     getDotXPosition(pointX + shifting), middleX,
                     getDotXPosition(pointX+ shifting), endY);
    ctx.stroke();
}

function drawCurvedVerticalLine(ctx, pointX, pointY, shifting, curvePosition, curveDirection) {
    ctx.beginPath();

    const curvingAmount = curveDirection === 'inside' ? 12 : -12;
    ctx.moveTo(getDotXPosition(pointX), getDotYPosition(pointY));

    let startX;
    let middleX;
    let endX;
    if (curvePosition === 'both') {
        startX = getDotXPosition(pointX) - curvingAmount;
        middleX = getDotXPosition(pointX) - curvingAmount;
        endX = getDotXPosition(pointX);
    } else if (curvePosition === 'start') {
        startX = getDotXPosition(pointX) + curvingAmount;
        middleX = getDotXPosition(pointX);
        endX = getDotXPosition(pointX);

    } else {
        startX = getDotXPosition(pointX);
        middleX = getDotXPosition(pointX);
        endX = getDotXPosition(pointX) + curvingAmount;
    }

    ctx.bezierCurveTo(startX, getDotYPosition(pointY),
                        middleX, getDotYPosition(pointY + shifting),
                        endX, getDotYPosition(pointY + shifting));
    ctx.stroke();
}