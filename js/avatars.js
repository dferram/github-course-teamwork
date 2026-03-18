/*
    AVATARS.JS — Sistema de avatares estilo MINECRAFT (Pixel Perfect 8x8)
    ======================================================================
    Estilo "Blocky" referenciado directamente de las texturas del juego.
    Sistema inteligente 8x8 (64 caracteres) con codificación base36.
*/

var AVATAR_PALETTE = [
    'transparent',  // 0
    '#1a1a2e',      // 1
    '#e8c8a0',      // 2
    '#5c3a1e',      // 3 - PRIMARY (personalizable)
    '#2d2d44',      // 4
    '#cc0000',      // 5 - SECONDARY (personalizable)
    '#ffffff',      // 6
    '#c9a87c',      // 7
    '#333344', '#ff8888', '#4a90e2', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c', '#34495e', 
    '#ffeb3b', '#00bcd4', '#ff5722', '#795548', '#607d8b', '#8bc34a', '#ff9800', '#3f51b5', 
    '#e91e63', '#009688', '#ffc107', '#673ab7', '#cddc39', '#ff6f00', '#00897b', '#d32f2f',
];

var AVATAR_PRESETS = {
    // Caras principales y Mobs
    steve:      { data: '3333333333333333322222232222222226a22a62222jj2222237732222333322', name: 'Steve' },
    alex:       { data: 'ccccccccccccccccc222222c2222222226b22b62222772222229922222222222', name: 'Alex' },
    herobrine:  { data: '3333333333333333322222232222222226622662222jj2222237732222333322', name: 'Herobrine' },
    creeper:    { data: 'lllllllllllllllll11ll11ll11ll11llll11lllll1111llll1111llll1ll1ll', name: 'Creeper' },
    zombie:     { data: 'pppppbuupuubbbbuubbbbbbbbbbbbbbbb11bb11bbbbppbbbbbpbbpbbbbppppbb', name: 'Zombie' },
    skeleton:   { data: '666666666666666666666666666666666ff66ff6666886666f1111f666666666', name: 'Skeleton' },
    wither:     { data: '11111111188ff881fffffffff66ff66fffffffffff6666ff1ffffff111111111', name: 'Wither' },
    enderman:   { data: '11111111111111111111111111111111drd11drd111111111111111111111111', name: 'Enderman' },
    cow:        { data: 'jjjkkffjjjjkkjjj66jkkj6616jfjj61jjjjjjjjjj6666jjj618816jj68ff86j', name: 'Cow' },
    pig:        { data: '999999999999999999999999916996199922229999e22e999922229999999999', name: 'Pig' },
    sheep:      { data: '666666666kkkkkk66777777661677616677777766k7997k66k7997k666666666', name: 'Sheep' },
    spider:     { data: '151111e111e1151151111115e1ee551511555e111e1111e11111111111111111', name: 'Spider' },
    slime:      { data: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbuubbuubbuubbuubbbbbbbbbbbbuubbbb', name: 'Slime' },
    villager:   { data: '2222222222222222222222222333333226b22b62222jj222223jj322222jj222', name: 'Villager' },
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
    ctx.imageSmoothingEnabled = false; // Mantiene el Pixel Perfect

    // CALCULADORA INTELIGENTE: Detecta el tamaño del grid automáticamente
    // Si data tiene 64 caracteres, gridSize será 8.
    var gridSize = Math.sqrt(data.length);
    if (isNaN(gridSize) || gridSize % 1 !== 0) {
        gridSize = 8; // Fallback de seguridad
    }
    
    var pixelSize = size / gridSize;

    var palette = AVATAR_PALETTE.slice();
    if (customColors) {
        if (customColors.primary) palette[3] = customColors.primary;
        if (customColors.secondary) palette[5] = customColors.secondary;
    }

    ctx.clearRect(0, 0, size, size);

    for (var i = 0; i < gridSize * gridSize; i++) {
        // AQUÍ ESTABA EL BUG: Ahora usamos base 36 (parseInt(..., 36))
        var colorIndex = parseInt(data[i], 36);
        if (isNaN(colorIndex) || colorIndex === 0) continue;

        // Ajuste matemático para el solapamiento de píxeles
        var x = Math.floor((i % gridSize) * pixelSize);
        var y = Math.floor(Math.floor(i / gridSize) * pixelSize);
        var w = Math.ceil(pixelSize);
        var h = Math.ceil(pixelSize);

        ctx.fillStyle = palette[colorIndex] || '#ff00ff';
        ctx.fillRect(x, y, w, h);
    }
}