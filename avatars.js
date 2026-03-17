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
    classic, spike, punk, bob, longhair, robot, ninja, alien, cat, wizard,
    spiderman, pirate, zombie, viking, cyborg, witch, superhero, demon
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
    '#4a90e2',      // A azul brillante
    '#2ecc71',      // B verde brillante
    '#f39c12',      // C naranja
    '#9b59b6',      // D morado
    '#e74c3c',      // E rojo brillante
    '#34495e',      // F gris oscuro
];

var AVATAR_GRID = 12;

var AVATAR_PRESETS = {
    classic: {
        data:
            '000000000000' +
            '000333300000' +
            '003333333000' +
            '033322233300' +
            '002222222200' +
            '002612261200' +
            '002222222200' +
            '000229920000' +
            '000022220000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
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
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
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
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Punk'
    },
    bob: {
        data:
            '000000000000' +
            '000333300000' +
            '003333333000' +
            '033322233300' +
            '032222222300' +
            '032612261230' +
            '032222222300' +
            '000229920000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
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
            '003222223000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Long'
    },
    robot: {
        data:
            '000000000000' +
            '044444444400' +
            '041111111400' +
            '041611161400' +
            '041111111400' +
            '044444444400' +
            '004141414000' +
            '000444440000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Robot'
    },
    ninja: {
        data:
            '000000000000' +
            '000333300000' +
            '003333333000' +
            '001111111000' +
            '001116111000' +
            '001116111000' +
            '001111111000' +
            '000011100000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Ninja'
    },
    alien: {
        data:
            '000000000000' +
            '000BBB000000' +
            '00BBBBBBB000' +
            '0BBBBBBBBB00' +
            '0BB111111B00' +
            '0B11661166B0' +
            '0BB111111B00' +
            '00BBBBBBB000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
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
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
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
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Wizard'
    },
    spiderman: {
        data:
            '000000000000' +
            '000EEE000000' +
            '00EEEEE00000' +
            '0EEEEEEE0000' +
            '0E1661E10000' +
            '0E1661E10000' +
            '0EEEEEEE0000' +
            '00E1E1E00000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Spiderman'
    },
    pirate: {
        data:
            '000000000000' +
            '000111100000' +
            '001111111000' +
            '011222221100' +
            '002222222200' +
            '002612111200' +
            '002222222200' +
            '000229920000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Pirate'
    },
    zombie: {
        data:
            '000000000000' +
            '000BBB000000' +
            '00BBBBBBB000' +
            '0BBBBBBBB000' +
            '0BB2B2BB0000' +
            '0BB161BB0000' +
            '0BBBBBBBB000' +
            '00BB99BB0000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Zombie'
    },
    viking: {
        data:
            'F00333300F00' +
            'FF03333330FF' +
            '0F3322233F00' +
            '002222222200' +
            '002612261200' +
            '002222222200' +
            '033399933300' +
            '000333330000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Viking'
    },
    cyborg: {
        data:
            '000000000000' +
            '00044F440000' +
            '004FFFFF4000' +
            '04F226622F40' +
            '04F222222F40' +
            '04FA12A12F40' +
            '04F222222F40' +
            '00F229922F00' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Cyborg'
    },
    witch: {
        data:
            '000001100000' +
            '000011110000' +
            '000D111D0000' +
            '00D222222D00' +
            '00D261261D00' +
            '00D222222D00' +
            '000D2992D000' +
            '0000222D0000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Witch'
    },
    superhero: {
        data:
            '000000000000' +
            '000AAA000000' +
            '00AAAAA00000' +
            '0AA222AA0000' +
            '0A2222222A00' +
            '0A2612261A00' +
            '0A2222222A00' +
            '00A22992A000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Hero'
    },
    demon: {
        data:
            'E00000000E00' +
            'EE0000000EE0' +
            '0EE1111EE000' +
            '00E111111E00' +
            '00E616161E00' +
            '00E111111E00' +
            '000E1991E000' +
            '0000EEEE0000' +
            '000000000000' +
            '000000000000' +
            '000000000000' +
            '000000000000',
        name: 'Demon'
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
