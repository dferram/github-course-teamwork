/*
    AVATARS.JS — Sistema de avatares 8-bit
    ========================================
    Cada avatar es una cuadricula de 12x12 pixeles.
    Los datos se guardan como un string de 144 caracteres
    donde cada caracter es un indice de color (hex).

    PALETA:
    0 = transparente
    1 = negro/outline
    2 = piel
    3 = primario (pelo - personalizable)
    4 = ropa oscura
    5 = secundario (corbata/acento - personalizable)
    6 = blanco (ojos)
    7 = piel sombra
    8 = zapatos
    9 = labios/detalle

    Para usar un preset, en team.js escribe:
    avatar: "classic"

    Presets disponibles:
    classic, spike, punk, bob, longhair, robot, ninja, alien, cat, wizard
*/

var AVATAR_PALETTE = [
    'transparent',  // 0
    '#1a1a2e',      // 1 negro
    '#e8c8a0',      // 2 piel
    '#5c3a1e',      // 3 pelo (default)
    '#2d2d44',      // 4 ropa
    '#cc0000',      // 5 acento (default)
    '#ffffff',      // 6 blanco
    '#c9a87c',      // 7 piel sombra
    '#333344',      // 8 zapatos
    '#ff8888',      // 9 labios
];

var AVATAR_GRID = 12;

var AVATAR_PRESETS = {
    classic: {
        data:
            '000333300000' +
            '003333333000' +
            '033322233300' +
            '002222222200' +
            '002612261200' +
            '002222222200' +
            '000229920000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Classic'
    },
    spike: {
        data:
            '030030030000' +
            '033333333000' +
            '033322233300' +
            '002222222200' +
            '002612261200' +
            '002222222200' +
            '000229920000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Spike'
    },
    punk: {
        data:
            '000003300000' +
            '000033330000' +
            '003332233300' +
            '002222222200' +
            '002612261200' +
            '002222222200' +
            '000229920000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Punk'
    },
    bob: {
        data:
            '000333300000' +
            '003333333000' +
            '033322233300' +
            '032222222300' +
            '032612261230' +
            '032222222300' +
            '000229920000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '004444444400' +
            '000110011000',
        name: 'Bob'
    },
    longhair: {
        data:
            '000333300000' +
            '003333333000' +
            '033322233300' +
            '332222222330' +
            '332612261230' +
            '332222222330' +
            '032292920300' +
            '000222220000' +
            '000445544000' +
            '004444444400' +
            '004444444400' +
            '000110011000',
        name: 'Long'
    },
    robot: {
        data:
            '044444444400' +
            '041111111400' +
            '041611161400' +
            '041111111400' +
            '044444444400' +
            '000414140000' +
            '000445544000' +
            '004444444400' +
            '004555554400' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Robot'
    },
    ninja: {
        data:
            '000333300000' +
            '003333333000' +
            '001111111000' +
            '001116111000' +
            '001116111000' +
            '001111111000' +
            '000011100000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Ninja'
    },
    alien: {
        data:
            '000333300000' +
            '003333333000' +
            '033333333300' +
            '032222222300' +
            '036612266300' +
            '032222222300' +
            '000222220000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Alien'
    },
    cat: {
        data:
            '300000000030' +
            '330000000330' +
            '033222223300' +
            '002222222200' +
            '002612261200' +
            '002272272200' +
            '000229920000' +
            '000022220000' +
            '000445544000' +
            '004444444400' +
            '000440044000' +
            '000110011000',
        name: 'Cat'
    },
    wizard: {
        data:
            '000003000000' +
            '000033300000' +
            '003333330000' +
            '033222233000' +
            '002612261200' +
            '002222222200' +
            '000229920000' +
            '000022220000' +
            '005555555500' +
            '005555555500' +
            '000550055000' +
            '000110011000',
        name: 'Wizard'
    }
};

function renderAvatar(canvas, avatarData, size, customColors) {
    var data = avatarData;
    if (AVATAR_PRESETS[avatarData]) {
        data = AVATAR_PRESETS[avatarData].data;
    }
    data = data.replace(/\s/g, '');

    size = size || 72;
    canvas.width = size;
    canvas.height = size;

    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    var gridSize = AVATAR_GRID;
    var pixelSize = size / gridSize;

    var palette = AVATAR_PALETTE.slice();
    if (customColors) {
        if (customColors.primary) palette[3] = customColors.primary;
        if (customColors.secondary) palette[5] = customColors.secondary;
    }

    ctx.clearRect(0, 0, size, size);

    for (var i = 0; i < gridSize * gridSize; i++) {
        var colorIndex = parseInt(data[i], 16);
        if (isNaN(colorIndex) || colorIndex === 0) continue;

        var x = (i % gridSize) * pixelSize;
        var y = Math.floor(i / gridSize) * pixelSize;

        ctx.fillStyle = palette[colorIndex] || '#ff00ff';
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
}
