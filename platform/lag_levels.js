export function lagNivå() {
    
    return[
        {
            plattformer: [
                
            ],
            sjekkpunkter: [
                { x: 450, y: 320, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: []
        },
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
            motstandere: []
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
            motstandere: []
        },
        // Trinnvise økninger i vanskelighetsgrad
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
            ]
        },
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 100, y: canvas.height - 120, width: 150, height: 20 },
                { x: 400, y: canvas.height - 220, width: 150, height: 20 }
            ],
            sjekkpunkter: [
                { x: 450, y: canvas.height - 240, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: []
        },
        // Nivå 6-10: Trapper og hinderløype
        {
            plattformer: [
                { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
                { x: 150, y: canvas.height - 100, width: 100, height: 20 },
                { x: 350, y: canvas.height - 150, width: 100, height: 20 },
                { x: 550, y: canvas.height - 200, width: 100, height: 20 },
                { x: 750, y: canvas.height - 250, width: 100, height: 20 }
            ],
            sjekkpunkter: [
                { x: 800, y: canvas.height - 270, width: 10, height: 10, aktiveres: false }
            ],
            motstandere: [
                { x: 300, y: canvas.height - 50, width: 40, height: 60, alive: true }
            ]
        },
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
        },
         // Morsomt nivå 1: Spiral
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
        ]
    },
    // Vanskelig nivå 2: Hinderløype
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
        ]
    },
    // Morsomt nivå 3: Tårn
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
        motstandere: []
    },
    // Vanskelig nivå 4: Gjennombrudd
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
        ]
    },
    // Morsomt nivå 5: Bølge
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
        ]
    },
    
    // Morsomt nivå 6: Zigzag
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
        ]
    },
    // Vanskelig nivå 7: Hopp over hinder
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 120, width: 100, height: 20 },
            { x: 450, y: canvas.height - 200, width: 150, height: 20 },
            { x: 750, y: canvas.height - 300, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 800, y: canvas.height - 320, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 300, y: canvas.height - 100, width: 40, height: 60, alive: true },
            { x: 600, y: canvas.height - 220, width: 40, height: 60, alive: true }
        ]
    },
    // Morsomt nivå 8: Plattformklynge
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
        ]
    },
    // Vanskelig nivå 9: Spiraltrapp
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
        ]
    },
    // Morsomt nivå 10: Trapper med smale plattformer
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
        ]
    },
    // Vanskelig nivå 11: Plattformkaos
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
        ]
    },
    // Vanskelig nivå 12: Hinder med sjekkpunkt
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
        ]
    },
    
        // Morsomt nivå 13: Trampolinformasjon
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 100, y: canvas.height - 100, width: 100, height: 20 },
            { x: 300, y: canvas.height - 200, width: 100, height: 20 },
            { x: 500, y: canvas.height - 100, width: 100, height: 20 },
            { x: 700, y: canvas.height - 200, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 220, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 600, y: canvas.height - 250, width: 40, height: 60, alive: true }
        ]
    },
    // Vanskelig nivå 14: Vertikal hopping
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 100, width: 100, height: 20 },
            { x: 200, y: canvas.height - 200, width: 100, height: 20 },
            { x: 200, y: canvas.height - 300, width: 100, height: 20 },
            { x: 200, y: canvas.height - 400, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 220, y: canvas.height - 420, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 250, y: canvas.height - 350, width: 40, height: 60, alive: true }
        ]
    },
    // Morsomt nivå 15: Brokonstruksjon
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: 200, height: 20 },
            { x: 300, y: canvas.height - 50, width: 200, height: 20 },
            { x: 600, y: canvas.height - 100, width: 200, height: 20 }
        ],
        sjekkpunkter: [
            { x: 750, y: canvas.height - 120, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 400, y: canvas.height - 70, width: 40, height: 60, alive: true }
        ]
    },
    // Vanskelig nivå 16: Plattformhav
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: canvas.height - 150, width: 100, height: 20 },
            { x: 300, y: canvas.height - 250, width: 100, height: 20 },
            { x: 450, y: canvas.height - 350, width: 100, height: 20 },
            { x: 600, y: canvas.height - 450, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 650, y: canvas.height - 470, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 400, y: canvas.height - 380, width: 40, height: 60, alive: true }
        ]
    },
    // Morsomt nivå 17: Balansebanen
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 300, y: canvas.height - 80, width: 200, height: 20 },
            { x: 600, y: canvas.height - 160, width: 200, height: 20 }
        ],
        sjekkpunkter: [
            { x: 650, y: canvas.height - 180, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 500, y: canvas.height - 120, width: 40, height: 60, alive: true }
        ]
    },
    // Vanskelig nivå 18: Farlige høyder
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: 200, height: 20 },
            { x: 300, y: canvas.height - 200, width: 100, height: 20 },
            { x: 450, y: canvas.height - 350, width: 150, height: 20 },
            { x: 650, y: canvas.height - 500, width: 150, height: 20 }
        ],
        sjekkpunkter: [
            { x: 700, y: canvas.height - 520, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 400, y: canvas.height - 300, width: 40, height: 60, alive: true }
        ]
    },
    // Morsomt nivå 19: Zigzag tårn
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 200, y: canvas.height - 100, width: 100, height: 20 },
            { x: 100, y: canvas.height - 200, width: 100, height: 20 },
            { x: 300, y: canvas.height - 300, width: 100, height: 20 },
            { x: 200, y: canvas.height - 400, width: 100, height: 20 }
        ],
        sjekkpunkter: [
            { x: 250, y: canvas.height - 420, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: 150, y: canvas.height - 250, width: 40, height: 60, alive: true }
        ]
    },
    // Vanskelig nivå 20: Tett plattformbane
    {
        plattformer: [
            { x: 0, y: canvas.height - 20, width: canvas.width / 3, height: 20 },
            { x: canvas.width / 3, y: canvas.height - 100, width: canvas.width / 3, height: 20 },
            { x: (2 * canvas.width) / 3, y: canvas.height - 180, width: canvas.width / 3, height: 20 }
        ],
        sjekkpunkter: [
            { x: canvas.width - 50, y: canvas.height - 200, width: 10, height: 10, aktiveres: false }
        ],
        motstandere: [
            { x: canvas.width / 2, y: canvas.height - 120, width: 40, height: 60, alive: true }
        ]
    }
    ]
}