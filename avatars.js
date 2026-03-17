/*
    AVATARS.JS — Sistema de avatares 8-bit
    ========================================
    Cada avatar es una cuadricula de 8x8 pixeles.
    Los datos se guardan como un string de 64 caracteres
    donde cada caracter es un indice de color.

    PALETA:
    0 = transparente
    1 = negro/outline
    2 = piel
    3 = cabello/oscuro
    4 = primario (personalizable)
    5 = secundario (personalizable)
    6 = blanco
    7 = rojo
    8 = detalle

    Para usar un preset, en team.js escribe:
    avatar: "warrior"    (o robot, ninja, alien, cat, ghost, mage, astro)

    Para un avatar custom, usa el avatar-builder.html
    y copia el string de 64 caracteres que genera.
*/

var AVATAR_PALETTE = [
    'transparent',  // 0
    '#1a1a2e',      // 1 negro
    '#e8c8a0',      // 2 piel
    '#5c3a1e',      // 3 cabello
    '#cc0000',      // 4 primario (default rojo)
    '#0066cc',      // 5 secundario (default azul)
    '#ffffff',      // 6 blanco
    '#ff4444',      // 7 rojo claro
    '#ffcc00',      // 8 detalle/dorado
];

var AVATAR_PRESETS = {
    warrior: {
        data: '0013310001133110012222100122221001444410144444411444441000100100',
        name: 'Warrior'
    },
    robot: {
        data: '0888888018cccc8118c66c1118cccc11015555101555555115155151010001 0',
        name: 'Robot'
    },
    ninja: {
        data: '0011110001111110112112111111111100111100014444101444441000100100',
        name: 'Ninja'
    },
    alien: {
        data: '0044440004444440442264404422644004444440044004400440044004400440',
        name: 'Alien'
    },
    cat: {
        data: '3003003033033030033333300326623003266230033333300033333000300300',
        name: 'Cat'
    },
    ghost: {
        data: '0066660006666660661166606611666066666660066666600606060600000000',
        name: 'Ghost'
    },
    mage: {
        data: '0005500000555000052225200522252005544550054444500544445000100100',
        name: 'Mage'
    },
    astro: {
        data: '0066660006666660062226600622266006666660065555600655556000600600',
        name: 'Astro'
    }
};

/*
    renderAvatar(canvas, avatarData, size, customColors)
    - canvas: elemento <canvas>
    - avatarData: string de 64 chars o nombre de preset
    - size: tamano del canvas en px (default 64)
    - customColors: { primary: '#hex', secondary: '#hex' } (opcional)
*/
function renderAvatar(canvas, avatarData, size, customColors) {
    // Resolve preset name
    var data = avatarData;
    if (AVATAR_PRESETS[avatarData]) {
        data = AVATAR_PRESETS[avatarData].data;
    }

    // Clean data (remove spaces)
    data = data.replace(/\s/g, '');

    size = size || 64;
    canvas.width = size;
    canvas.height = size;

    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    var gridSize = 8;
    var pixelSize = size / gridSize;

    // Build local palette with custom colors
    var palette = AVATAR_PALETTE.slice();
    if (customColors) {
        if (customColors.primary) palette[4] = customColors.primary;
        if (customColors.secondary) palette[5] = customColors.secondary;
    }

    ctx.clearRect(0, 0, size, size);

    for (var i = 0; i < 64; i++) {
        var colorIndex = parseInt(data[i], 16);
        if (isNaN(colorIndex) || colorIndex === 0) continue;

        var x = (i % gridSize) * pixelSize;
        var y = Math.floor(i / gridSize) * pixelSize;

        ctx.fillStyle = palette[colorIndex] || '#ff00ff';
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
}
