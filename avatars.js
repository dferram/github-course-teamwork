/*
    AVATARS.JS — Sistema de avatares 8-bit
    ========================================
    Cada avatar es una cuadrícula de 16x16 píxeles.
    Los datos se guardan como un string de 256 caracteres
    donde cada caracter es un índice de color (hex 0-9, A-V).

    PALETA EXPANDIDA (32 colores):
    0 = transparente
    1 = negro
    2 = piel clara
    3 = primario (personalizable - pelo por defecto)
    4 = ropa oscura
    5 = secundario (personalizable - acento por defecto)
    6 = blanco
    7 = piel sombra
    8 = gris muy oscuro
    9 = rosa claro
    A = azul brillante
    B = verde brillante
    C = naranja
    D = morado
    E = rojo brillante
    F = gris oscuro
    G = amarillo
    H = cyan
    I = naranja oscuro
    J = marrón
    K = azul gris
    L = verde lima
    M = naranja medio
    N = azul índigo
    O = rosa fuerte
    P = verde azulado
    Q = ámbar
    R = púrpura profundo
    S = lima brillante
    T = naranja profundo
    U = verde esmeralda
    V = rojo oscuro

    Para usar un preset, en team.js escribe:
    avatar: "spiderman"

    Presets disponibles (18 avatares):
    classic, spike, punk, bob, longhair, robot, ninja, alien, cat, wizard,
    spiderman, pirate, zombie, viking, cyborg, witch, superhero, demon
*/

var AVATAR_PALETTE = [
    'transparent',  // 0
    '#1a1a2e',      // 1 negro
    '#e8c8a0',      // 2 piel clara
    '#5c3a1e',      // 3 pelo castaño (default)
    '#2d2d44',      // 4 ropa oscura
    '#cc0000',      // 5 rojo (default)
    '#ffffff',      // 6 blanco
    '#c9a87c',      // 7 piel sombra
    '#333344',      // 8 gris muy oscuro
    '#ff8888',      // 9 rosa claro
    '#4a90e2',      // A azul brillante
    '#2ecc71',      // B verde brillante
    '#f39c12',      // C naranja
    '#9b59b6',      // D morado
    '#e74c3c',      // E rojo brillante
    '#34495e',      // F gris oscuro
    '#ffeb3b',      // G amarillo
    '#00bcd4',      // H cyan
    '#ff5722',      // I naranja oscuro
    '#795548',      // J marrón
    '#607d8b',      // K azul gris
    '#8bc34a',      // L verde lima
    '#ff9800',      // M naranja medio
    '#3f51b5',      // N azul índigo
    '#e91e63',      // O rosa fuerte
    '#009688',      // P verde azulado
    '#ffc107',      // Q ámbar
    '#673ab7',      // R púrpura profundo
    '#cddc39',      // S lima brillante
    '#ff6f00',      // T naranja profundo
    '#00897b',      // U verde esmeralda
    '#d32f2f',      // V rojo oscuro
];

var AVATAR_GRID = 16;

var AVATAR_PRESETS = {
    classic: {
        data:
            '0000000000000000' +
            '0000033330000000' +
            '0003333333300000' +
            '0033333333330000' +
            '0333222222333000' +
            '0022222222222000' +
            '0022661226612000' +
            '0022222222222000' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Classic'
    },
    spike: {
        data:
            '0300003000300000' +
            '0330033303330000' +
            '0333333333333000' +
            '0333333333333000' +
            '0333222222333000' +
            '0022222222222000' +
            '0022661226612000' +
            '0022222222222000' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Spike'
    },
    punk: {
        data:
            '0000000033300000' +
            '0000003333330000' +
            '0000333333330000' +
            '0033333222333000' +
            '0033332222233300' +
            '0022222222222000' +
            '0022661226612000' +
            '0022222222222000' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Punk'
    },
    bob: {
        data:
            '0000000000000000' +
            '0000033330000000' +
            '0003333333300000' +
            '0033333333330000' +
            '0333222222333000' +
            '0332222222223300' +
            '0332661226612330' +
            '0332222222223300' +
            '0003229999223000' +
            '0000033333300000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Bob'
    },
    longhair: {
        data:
            '0000033330000000' +
            '0003333333300000' +
            '0033333333330000' +
            '0333222222333000' +
            '3332222222223330' +
            '3332661226612330' +
            '3332222222223330' +
            '0332299999223300' +
            '0033222222223300' +
            '0003333333330000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Long'
    },
    robot: {
        data:
            '0000000000000000' +
            '0000444444440000' +
            '0044444444444000' +
            '0441111111111400' +
            '0441166111661400' +
            '0441111111111400' +
            '0441111111111400' +
            '0044444444444000' +
            '0004411441144000' +
            '0000444444440000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Robot'
    },
    ninja: {
        data:
            '0000000000000000' +
            '0000033330000000' +
            '0003333333300000' +
            '0033333333330000' +
            '0011111111111000' +
            '0011111111111000' +
            '0011166116611000' +
            '0011111111111000' +
            '0011111111111000' +
            '0000111111100000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Ninja'
    },
    alien: {
        data:
            '0000000000000000' +
            '0000BBBBBB000000' +
            '00BBBBBBBBBB0000' +
            '0BBBBBBBBBBBB000' +
            '0BBBB111111BB000' +
            '0BBB11111111BB00' +
            '0BB1166666611BB0' +
            '0BBB11111111BB00' +
            '0BBBB111111BB000' +
            '00BBBBBBBBBB0000' +
            '0000BBBBBB000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Alien'
    },
    cat: {
        data:
            '3000000000000030' +
            '3300000000000330' +
            '0330000000003300' +
            '0033222222233300' +
            '0022222222222200' +
            '0022222222222200' +
            '0022661226612200' +
            '0022772772772200' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Cat'
    },
    wizard: {
        data:
            '0000000030000000' +
            '0000003330000000' +
            '0000333333000000' +
            '0033333333300000' +
            '0333222222330000' +
            '0332222222233000' +
            '0022661226612000' +
            '0022222222222000' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Wizard'
    },
    spiderman: {
        data:
            '0000000000000000' +
            '0000EEEEEE000000' +
            '000EEEEEEEE00000' +
            '00EEEEEEEEEE0000' +
            '0EEEE1111EEEE000' +
            '0EE1166666611EE0' +
            '0EE1666666661EE0' +
            '0EE1666666661EE0' +
            '0EE1166666611EE0' +
            '0EEEE1111EEEE000' +
            '00EE1EEE1EEE0000' +
            '000E1EEE1EE00000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Spiderman'
    },
    pirate: {
        data:
            '0000000000000000' +
            '0000011110000000' +
            '0001111111100000' +
            '0011111111110000' +
            '0111222222211100' +
            '0022222222222000' +
            '0022661211112000' +
            '0022222222222000' +
            '0002229999220000' +
            '0000222222000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Pirate'
    },
    zombie: {
        data:
            '0000000000000000' +
            '0000BBBB0000000' +
            '00BBBBBBBBB00000' +
            '0BBBBBBBBBBB0000' +
            '0BBBB2B2BBBB0000' +
            '0BBB222222BBB000' +
            '0BBB161161BBB000' +
            '0BBBBBBBBBBB0000' +
            '00BBB9999BBB0000' +
            '0000BBBBBB000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Zombie'
    },
    viking: {
        data:
            'F000033330000F00' +
            'FF0033333300FF00' +
            '0FF033333330FF00' +
            '00F3322222233F00' +
            '0022222222222200' +
            '0022222222222200' +
            '0022661226612200' +
            '0022222222222200' +
            '0333399999933300' +
            '0003333333330000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Viking'
    },
    cyborg: {
        data:
            '0000000000000000' +
            '000044FF44000000' +
            '0004FFFFFF400000' +
            '004FFFFFFFF40000' +
            '04FF22666622FF40' +
            '04FF22222222FF40' +
            '04FFA112A112FF40' +
            '04FF22222222FF40' +
            '00FF22999922FF00' +
            '0000FF2222FF0000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Cyborg'
    },
    witch: {
        data:
            '0000000110000000' +
            '0000001111000000' +
            '0000011111100000' +
            '000DD1111DD00000' +
            '00DD22222222DD00' +
            '00DD26612661DD00' +
            '00DD22222222DD00' +
            '000DD229922DD000' +
            '00000222222D0000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Witch'
    },
    superhero: {
        data:
            '0000000000000000' +
            '0000AAAA0000000' +
            '00AAAAAAAA000000' +
            '0AAAA222AAAA0000' +
            '0AAA22222222AAA0' +
            '0AA2222222222AA0' +
            '0AA2661226612AA0' +
            '0AA2222222222AA0' +
            '00AA22999922AA00' +
            '000AAA2222AAA000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
        name: 'Hero'
    },
    demon: {
        data:
            'E000000000000E00' +
            'EE00000000000EE0' +
            '0EE00111110EE000' +
            '00EE11111111EE00' +
            '00EE11111111EE00' +
            '00EE61616161EE00' +
            '00EE11111111EE00' +
            '00EE11111111EE00' +
            '000EE119911EE000' +
            '0000EEEEEEEE0000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000' +
            '0000000000000000',
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
