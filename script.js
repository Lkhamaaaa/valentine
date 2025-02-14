var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error('Failed to send email');
          button.textContent = "Error 😞";
        }
      })
      .catch(error => {
        // Handle network errors or other issues
        console.error('Error:', error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = `${fontSize}px Comic Sans MS`;
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if (frameNumber < 150) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("🎀ZAGARAA'S Surprice🎉", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    // fades out the text by decreasing the opacity
    if (frameNumber >= 150 && frameNumber < 300) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("🎀ZAGARAA'S Surprice🎉", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 150) {
        opacity = 0;
    }

    if (frameNumber > 300 && frameNumber < 450) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {  // shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars", canvas.width / 2, canvas.height / 2);
        }

        opacity += 0.01;
    }

    if (frameNumber >= 450 && frameNumber < 600) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars", canvas.width / 2, canvas.height / 2);
        }

        opacity -= 0.01;
    }

    if (frameNumber == 1000) {
        opacity = 0;
    }

    if (frameNumber > 600 && frameNumber < 750) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("You have a really cute smile🥰.", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    if (frameNumber >= 750 && frameNumber < 900) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("You have a really cute smile🥰.", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 1500) {
        opacity = 0;
    }

    if (frameNumber > 1050 && frameNumber < 1200) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("so knowledgeable", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    if (frameNumber >= 1200 && frameNumber < 1350) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("so knowledgeable", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 2000) {
        opacity = 0;
    }

    if (frameNumber > 1350 && frameNumber < 1500) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Very beautiful eyes"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Very beautiful eyes", canvas.width / 2, canvas.height / 2);
        }

        opacity += 0.01;
    }

    if (frameNumber >= 1500 && frameNumber < 1650) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Very beautiful eyes🤩"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Very beautiful eyes🤩", canvas.width / 2, canvas.height / 2);
        }

        opacity -= 0.01;
    }

    if (frameNumber == 2500) {
        opacity = 0;
    }

    if (frameNumber > 1650 && frameNumber < 1800) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["You really like me. {YESUU}"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("You really like me. {YESUU}", canvas.width / 2, canvas.height / 2);
        }

        opacity += 0.01;
    }

    if (frameNumber >= 1800 && frameNumber < 1950) {
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["❤️Mundag zaluu shvv❤️"], canvas.width / 2, (canvas.height / 2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("❤️Mundag zaluu shvv❤️", canvas.width / 2, (canvas.height / 2 + 50));
        }

        secondOpacity += 0.01;
    }

    if (frameNumber >= 1950 && frameNumber < 2100) {
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day ❤", canvas.width / 2, (canvas.height / 2 + 120));
        thirdOpacity += 0.01;

        button.style.display = "block";
    }

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
