
const canvas = document.getElementById('spillCanvas');
const ctx = canvas.getContext('2d');
let best_score=localStorage.getItem("best_level");
let sceneIndex = 0; // Nivå indikator
let nivåer = []; // Array for nivåer
let direction_m = true;
let level = 1;
let spillAktivt = true; // Variabel for å sjekke om spillet er aktivt

function lagNivå() {
    
    return[
        
        //1
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 }
            ],
            sjekkpunkter: [
                { x: 450, y: 320, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [],
            motstandere2: []

        },
        //2
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
            motstandere: [],
            motstandere2: []
        },
        //3
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 150, width: 150, height: 20 },
                { x: 350, y: canvas.height - 250, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 400, y: canvas.height - 270, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [],
            motstandere2: []
        },
        //4
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 100, width: 100, height: 20 },
                { x: 250, y: canvas.height - 200, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 450, y: canvas.height - 300, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: canvas.height - 250, width: 40, height: 60, alive: true }
            ],
            motstandere2: []
        },
        //5
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 120, width: 150, height: 20 },
                { x: 400, y: canvas.height - 220, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 450, y: canvas.height - 240, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [],
            motstandere2: []
        },
        //6
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 150, y: canvas.height - 100, width: 100, height: 20 },
                { x: 350, y: canvas.height - 150, width: 100, height: 20 },
                { x: 550, y: canvas.height - 200, width: 100, height: 20 },
                { x: 750, y: canvas.height - 250, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 780, y: canvas.height - 270, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: canvas.height - 50, width: 40, height: 60, alive: true }
            ],
            motstandere2: []
        },
        //7
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
            ],
            motstandere2: []
        },
        //8
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
            ],
            motstandere2: []
        },
        //9
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
            ],
            motstandere2: []
        },
        //10
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 100, width: 100, height: 20 },
                { x: 300, y: canvas.height - 220, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 350, y: canvas.height - 240, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [],
            motstandere2: []
        },
        //11
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
            ],
            motstandere2: []
        },
        //12
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
            ],
            motstandere2: []
        },
        //13
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
            ],
            motstandere2: []
        },
        //14
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
            ],
            motstandere2: []
        },
        //15
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
            ],
            motstandere2: []
        },
        //16
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
            ],
            motstandere2: []
        },
        //17
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
            ],
            motstandere2: []
        },
        //18
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: 400, width: 100, height: 20 },
                { x: 350, y: 300, width: 150, height: 20 },
                { x: 600, y: 200, width: 150, height: 20 },
                { x: 850, y: 100, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 780, y: 80, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: 380, width: 40, height: 60, alive: true },
                { x: 500, y: 120, width: 40, height: 60, alive: true }
            ],
            motstandere2: []
        },
         //19
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 100, y: canvas.height - 50, width: 150, height: 20 },
            { x: 300, y: canvas.height - 150, width: 150, height: 20 },
            { x: 500, y: canvas.height - 250, width: 150, height: 20 },
            { x: 700, y: canvas.height - 350, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 370, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 600, y: canvas.height - 300, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //20
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: 300, width: 100, height: 20 },
            { x: 400, y: 220, width: 100, height: 20 },
            { x: 600, y: 140, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 650, y: 120, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 500, y: 250, width: 40, height: 60, alive: true },
            { x: 350, y: 350, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //21
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: canvas.height - 100, width: 100, height: 20 },
            { x: 150, y: canvas.height - 200, width: 100, height: 20 },
            { x: 150, y: canvas.height - 300, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 170, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [],
        motstandere2: []
    },
    //22
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 50, y: canvas.height - 80, width: 50, height: 20 },
            { x: 150, y: canvas.height - 160, width: 150, height: 20 },
            { x: 400, y: canvas.height - 250, width: 200, height: 20 }
        ],
        sjekkpunkter: [
            { x: 450, y: canvas.height - 270, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 300, y: canvas.height - 100, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //23
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 100, width: canvas.width / 2, height: 20 },
            { x: 0, y: canvas.height - 180, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 260, width: canvas.width / 2, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2 + 100, y: canvas.height - 280, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2 - 50, y: canvas.height - 100, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //24
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: canvas.height - 80, width: 100, height: 20 },
            { x: 300, y: canvas.height - 160, width: 150, height: 20 },
            { x: 500, y: canvas.height - 240, width: 100, height: 20 },
            { x: 650, y: canvas.height - 320, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 700, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 400, y: canvas.height - 180, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //25
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 120, width: 100, height: 20 },
            { x: 450, y: canvas.height - 200, width: 150, height: 20 },
            { x: 750, y: canvas.height - 300, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 780, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 300, y: canvas.height - 100, width: 40, height: 60, alive: true },
            { x: 600, y: canvas.height - 220, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //26
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 100, y: canvas.height - 50, width: 100, height: 20 },
            { x: 300, y: canvas.height - 50, width: 100, height: 20 },
            { x: 500, y: canvas.height - 150, width: 100, height: 20 },
            { x: 700, y: canvas.height - 150, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 170, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 200, y: canvas.height - 70, width: 40, height: 60, alive: true },
            { x: 600, y: canvas.height - 160, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //27
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 100, y: canvas.height - 100, width: 100, height: 20 },
            { x: 250, y: canvas.height - 200, width: 150, height: 20 },
            { x: 500, y: canvas.height - 300, width: 100, height: 20 },
            { x: 700, y: canvas.height - 380, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 400, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 450, y: canvas.height - 220, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //28
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: canvas.height - 150, width: 75, height: 20 },
            { x: 300, y: canvas.height - 250, width: 75, height: 20 },
            { x: 450, y: canvas.height - 350, width: 75, height: 20 },
            { x: 600, y: canvas.height - 450, width: 75, height: 20 }
        ],
        sjekkpunkter: [
            { x: 650, y: canvas.height - 470, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 300, y: canvas.height - 270, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //29
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: 200, height: 20 },
            { x: 250, y: canvas.height - 50, width: 100, height: 20 },
            { x: 400, y: canvas.height - 120, width: 200, height: 20 },
            { x: 650, y: canvas.height - 200, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 220, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 350, y: canvas.height - 100, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //30
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: 200, height: 20 },
            { x: 300, y: canvas.height - 150, width: 100, height: 20 },
            { x: 450, y: canvas.height - 250, width: 150, height: 20 },
            { x: 650, y: canvas.height - 350, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 700, y: canvas.height - 370, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 350, y: canvas.height - 180, width: 40, height: 60, alive: true },
            { x: 500, y: canvas.height - 300, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //31
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 100, width: canvas.width / 3, height: 20 },
            { x: (canvas.width / 3) * 2, y: canvas.height - 200, width: canvas.width / 3, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 50, y: canvas.height - 220, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 150, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //32
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 150, width: 150, height: 20 },
            { x: 450, y: canvas.height - 300, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 470, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 300, y: canvas.height - 50, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //33
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 4, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 100, width: canvas.width / 2, height: 20 },
            { x: (canvas.width / 4) * 3, y: canvas.height - 200, width: canvas.width / 4, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 100, y: canvas.height - 220, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [],
        motstandere2: []
    },
    //34
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 100, width: canvas.width / 4, height: 20 },
            { x: canvas.width / 2 + 150, y: canvas.height - 200, width: canvas.width / 4, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 70, y: canvas.height - 220, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 100, y: canvas.height - 50, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //35
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 120, width: canvas.width / 3, height: 20 },
            { x: (canvas.width / 3) * 2, y: canvas.height - 240, width: canvas.width / 3, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 260, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 200, y: canvas.height - 80, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //36
    {
        plattformer: [
            { x: canvas.width / 4, y: canvas.height - 20, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 100, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 2.5, y: canvas.height - 200, width: canvas.width / 5, height: 20 },
            { x: canvas.width / 2.3, y: canvas.height - 300, width: canvas.width / 6, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 150, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //37
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 100, width: canvas.width / 3, height: 20 },
            { x: (canvas.width / 3) * 2, y: canvas.height - 180, width: canvas.width / 3, height: 20 },
            { x: 0, y: canvas.height - 260, width: canvas.width / 3, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 280, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 4, y: canvas.height - 120, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //38
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 80, width: canvas.width / 2, height: 20 },
            { x: 0, y: canvas.height - 160, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 240, width: canvas.width / 2, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 50, y: canvas.height - 260, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2 - 100, y: canvas.height - 140, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //39
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 120, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 220, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 2.5, y: canvas.height - 320, width: canvas.width / 5, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 250, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //40
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 120, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 220, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 320, width: canvas.width / 4, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2 + 50, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 4, y: canvas.height - 150, width: 40, height: 60, alive: true }
        ],
        motstandere2: []
    },
    //41
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 120, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 220, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 320, width: canvas.width / 4, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2 + 50, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 4, y: canvas.height - 150, width: 40, height: 50, alive: true } // Plassert på nivå 2 for utfordring
        ],
        motstandere2: []
    },
    //42
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 100, width: canvas.width / 3, height: 20 },
            { x: (canvas.width / 3) * 2, y: canvas.height - 180, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 260, width: canvas.width / 2, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 280, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 3, y: canvas.height - 120, width: 40, height: 50, alive: true } // Angriper fra høyre
        ],
        motstandere2: []
    },
    //43
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 80, width: canvas.width / 2, height: 20 },
            { x: 0, y: canvas.height - 160, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 2, y: canvas.height - 240, width: canvas.width / 2, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 50, y: canvas.height - 260, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 140, width: 40, height: 50, alive: true } // Utfordring i midten av nivået
        ],
        motstandere2: []
    },
    //44
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 150, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 260, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 2.5, y: canvas.height - 370, width: canvas.width / 5, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 390, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 250, width: 40, height: 50, alive: true } // Vanskelig å unngå
        ],
        motstandere2: []
    },
    //45
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 120, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 4, y: canvas.height - 220, width: canvas.width / 2, height: 20 },
            { x: canvas.width / 5, y: canvas.height - 320, width: canvas.width / 2, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width / 2, y: canvas.height - 340, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 4, y: canvas.height - 150, width: 40, height: 50, alive:true}
        ],
        motstandere2: []
    },
    //46
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 100, width: 100, height: 20 },
            { x: 400, y: canvas.height - 200, width: 100, height: 20 },
            { x: 600, y: canvas.height - 300, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 450, y: 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere:[
            { x: 340, y: canvas.height - 250, width: 40, height: 60, alive: true }
        ],
        motstandere2: [
            { x: 280, y: canvas.height - 225, width: 60, height: 40, alive: true },
            { x: 380, y: canvas.height - 225, width: 60, height: 40, alive: true }
        ]
    }
    ]
}
function reset_Best(){
    best_score=1
    localStorage.clear("beste_level")
    localStorage.setItem("beste_level", best_score)
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
    document.getElementById("best_lev").innerHTML="Din beste level:   "+best_score+"/46"
    visMelding(".........level: " + level);
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
    for (let motstander of nåværendeNivå.motstandere2) {
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
            }
        
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
                best_score=localStorage.getItem("best_level")
                if (level>best_score){
                    best_score=level
                }
                localStorage.setItem("best_level", best_score)
                document.getElementById("best_lev").innerHTML="Din beste level:   "+best_score+"/45"
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
            ctx.fillStyle = 'yellow';
            ctx.fillRect(motstander.x, motstander.y, motstander.width, canvas.height);
            

        }
    }
    for (let motstander of nåværendeNivå.motstandere2) {
        if (motstander.alive) {
            ctx.fillStyle = 'green';
            ctx.fillRect(motstander.x, motstander.y, motstander.width, motstander.height);
            

        }
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(karakter.x, karakter.y, karakter.width, karakter.height);

    requestAnimationFrame(oppdater);
    
}

oppdater()
