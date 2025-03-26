const canvas = document.getElementById('spillCanvas');
const ctx = canvas.getContext('2d');

let sceneIndex = 0; // Nivå indikator
let nivåer = []; // Array for nivåer
let direction_m = true;
let level = 1;
let spillAktivt = true; // Variabel for å sjekke om spillet er aktivt

function lagNivå() {
    
    return[
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 200, y: canvas.height - 100, width: 100, height: 20 },
                { x: 400, y: canvas.height - 200, width: 100, height: 20 },
                { x: 600, y: canvas.height - 300, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 450, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: canvas.height - 60, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 150, width: 150, height: 20 },
                { x: 350, y: canvas.height - 250, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 400, y: canvas.height - 270, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 350, y: canvas.height - 100, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 100, width: 100, height: 20 },
                { x: 250, y: canvas.height - 200, width: 150, height: 20 },
                { x: 450, y: canvas.height - 300, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 500, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 200, y: canvas.height - 60, width: 40, height: 60, alive: true },
                { x: 350, y: canvas.height - 140, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 100, width: 100, height: 20 },
                { x: 300, y: canvas.height - 220, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 350, y: canvas.height - 240, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: []
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 250, y: canvas.height - 150, width: 100, height: 20 },
                { x: 450, y: canvas.height - 250, width: 100, height: 20 },
                { x: 700, y: canvas.height - 350, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 750, y: canvas.height - 370, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 400, y: canvas.height - 100, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 150, y: canvas.height - 120, width: 150, height: 20 },
                { x: 350, y: canvas.height - 220, width: 150, height: 20 },
                { x: 550, y: canvas.height - 320, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 600, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 400, y: canvas.height - 200, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 150, width: 150, height: 20 },
                { x: 350, y: canvas.height - 250, width: 150, height: 20 },
                { x: 550, y: canvas.height - 350, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 600, y: canvas.height - 370, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 250, y: canvas.height - 170, width: 40, height: 60, alive: true },
                { x: 450, y: canvas.height - 270, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 150, y: 300, width: 100, height: 20 },
                { x: 400, y: 250, width: 150, height: 20 },
                { x: 700, y: 200, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 750, y: 180, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 350, y: 280, width: 40, height: 60, alive: true },
                { x: 600, y: 220, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 200, y: 300, width: 100, height: 20 },
                { x: 350, y: 250, width: 150, height: 20 },
                { x: 550, y: 150, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 600, y: 130, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 250, y: 270, width: 40, height: 60, alive: true },
                { x: 500, y: 170, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: 350, width: 150, height: 20 },
                { x: 400, y: 250, width: 150, height: 20 },
                { x: 700, y: 150, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 750, y: 130, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: 370, width: 40, height: 60, alive: true },
                { x: 650, y: 170, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 150, y: canvas.height - 150, width: 100, height: 20 },
                { x: 350, y: canvas.height - 250, width: 150, height: 20 },
                { x: 600, y: canvas.height - 300, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 650, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 400, y: canvas.height - 200, width: 40, height: 60, alive: true }
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: 400, width: 100, height: 20 },
                { x: 350, y: 300, width: 150, height: 20 },
                { x: 600, y: 200, width: 150, height: 20 },
                { x: 850, y: 100, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 900, y: 80, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: 380, width: 40, height: 60, alive: true },
                { x: 750, y: 120, width: 40, height: 60, alive: true }
            ]
        }
    ]
}

nivåer = lagNivå();

let karakter = {
    x: 50,
    y: canvas.height - 60,
    width: 40,
    height: 50,
    velocityY: 0,
    gravity: 0.35,
    isJumping: false,
    speed: 7,
    sjekkpunkt: null,
    direction: 0
};

// Spillkontroller
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !karakter.isJumping) {
        karakter.velocityY = -10;
        karakter.isJumping = true;
    }

    if (event.code === 'KeyA') {
        karakter.direction = -1;
    } else if (event.code === 'KeyD') {
        karakter.direction = 1;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'KeyA' || event.code === 'KeyD') {
        karakter.direction = 0;
    }
});

// Funksjon for å vise meldinger
function visMelding(melding) {
    document.getElementById("du døde").innerHTML = melding;
}

function oppdater() {
    if (!spillAktivt) {
        visMelding(".........Spillet er over!");
        return; // Stopp spill-loopen
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    karakter.x += karakter.direction * karakter.speed;
    karakter.velocityY += karakter.gravity;
    karakter.y += karakter.velocityY;

    let nåværendeNivå = nivåer[sceneIndex];
    let kollidererMedPlattform = false;

    for (let plattform of nåværendeNivå.plattformer) {
        if (karakter.x < plattform.x + plattform.width &&
            karakter.x + karakter.width > plattform.x &&
            karakter.y + karakter.height >= plattform.y &&
            karakter.y + karakter.height <= plattform.y + karakter.velocityY + karakter.gravity) {

            karakter.y = plattform.y - karakter.height;
            karakter.velocityY = 0;
            karakter.isJumping = false;
            kollidererMedPlattform = true;
            break;
        }
    }

    for (let sjekkpunkt of nåværendeNivå.sjekkpunkter) {
        if (!sjekkpunkt.aktiveres && karakter.x < sjekkpunkt.x + sjekkpunkt.width &&
            karakter.x + karakter.width > sjekkpunkt.x &&
            karakter.y < sjekkpunkt.y + sjekkpunkt.height &&
            karakter.y + karakter.height > sjekkpunkt.y) {

            sjekkpunkt.aktiveres = true;
            karakter.sjekkpunkt = sjekkpunkt;
            visMelding(".........Sjekkpunkt aktivert!");
        }
    }

    for (let motstander of nåværendeNivå.motstandere) {
        if (motstander.alive) {
            if (motstander.x < 0) {
                direction_m = true;
            } else if (motstander.x > canvas.width) {
                direction_m = false;
            }
            if (direction_m) {
                motstander.x += 1;
            } else {
                motstander.x -= 1;
            }
            if (karakter.x < motstander.x + motstander.width &&
                karakter.x + karakter.width > motstander.x &&
                karakter.y + karakter.height <= motstander.y + motstander.height &&
                karakter.y + karakter.height + karakter.velocityY >= motstander.y) {

                motstander.alive = false;
                karakter.velocityY = -10;
                visMelding(".........Motstander drept!");
            } else if (
                karakter.x < motstander.x + motstander.width &&
                karakter.x + karakter.width > motstander.x &&
                karakter.y + karakter.height > motstander.y) {

                if (!(karakter.y + karakter.height <= motstander.y)) {
                    visMelding(".........Du døde! Spillet er over.");
                    spillAktivt = false; // Sett spillet som inaktivt
                    return; // Stopp spill-loopen
                }
            }
        }
    }

    if (karakter.x >= canvas.width) {
        visMelding(".........Forsøker å gå til neste nivå...");
        if (karakter.sjekkpunkt && karakter.sjekkpunkt.aktiveres) {
            visMelding(".........Sjekkpunkt aktivert! Går videre.");
            if (sceneIndex < nivåer.length - 1) {
                nivåer[sceneIndex].plattformer = [];

                sceneIndex++;
                karakter.x = 50;
                karakter.y = canvas.height - 60;
                karakter.sjekkpunkt = null;
                level = sceneIndex + 1;

                visMelding(".........level: " + level);
            } else {
                visMelding(".........Du har fullført spillet!");
                return;
            }
        } else {
            visMelding(".........Sjekkpunkt ikke aktivert! Kan ikke gå videre.");
        }
    }

    if (karakter.y + karakter.height >= canvas.height) {
        karakter.y = canvas.height - karakter.height;
        karakter.velocityY = 0;
        karakter.isJumping = false;
    }

    for (let plattform of nåværendeNivå.plattformer) {
        ctx.fillStyle = 'green';
        ctx.fillRect(plattform.x, plattform.y, plattform.width, plattform.height);
    }

    for (let sjekkpunkt of nåværendeNivå.sjekkpunkter) {
        ctx.fillStyle = sjekkpunkt.aktiveres ? 'yellow' : 'blue';
        ctx.fillRect(sjekkpunkt.x, sjekkpunkt.y, sjekkpunkt.width, sjekkpunkt.height);
    }

    for (let motstander of nåværendeNivå.motstandere) {
        if (motstander.alive) {
            ctx.fillStyle = 'purple';
            ctx.fillRect(motstander.x, motstander.y, motstander.width, motstander.height);
        }
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(karakter.x, karakter.y, karakter.width, karakter.height);

    requestAnimationFrame(oppdater);
}

oppdater();


