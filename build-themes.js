const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, 'src', 'themes');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'themes.json');

try {
    const entries = fs.readdirSync(THEMES_DIR, { withFileTypes: true });
    const themes = entries
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(themes, null, 2));
    console.log(`[Build] themes.json gerado com os temas: ${themes.join(', ')}`);
} catch (err) {
    console.error(`Erro ao gerar a lista de temas:`, err);
}
