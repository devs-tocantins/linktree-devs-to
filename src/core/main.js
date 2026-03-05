const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme') || 'default';

    const theme = themeParam;

    if (urlParams.get('theme') !== theme) {
        urlParams.set('theme', theme);
        const newRelativePathQuery = window.location.pathname + '?' + urlParams.toString();
        window.history.replaceState(null, '', newRelativePathQuery);
    }

    try {
        const [dataResponse, themesResponse] = await Promise.all([
            fetch('src/data/links.json'),
            fetch('src/data/themes.json').catch(() => null)
        ]);

        if (!dataResponse.ok) {
            throw new Error(`Failed to load data: ${dataResponse.statusText}`);
        }
        const rawData = await dataResponse.json();

        // Inject themes safely into data
        const availableThemes =
            themesResponse && themesResponse.ok ? await themesResponse.json() : ['default'];
        const data = {
            links: Array.isArray(rawData) ? rawData : rawData.links || [],
            themes: availableThemes
        };

        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = `src/themes/${theme}/style.css`;
        document.head.appendChild(linkEl);

        try {
            const themeModule = await import(`../themes/${theme}/render.js`);
            if (themeModule.renderTheme) {
                themeModule.renderTheme(data, 'app');
            } else {
                console.error(`Theme module ${theme} does not export renderTheme`);
            }
        } catch (importError) {
            console.error(`Failed to load theme module ${theme}`, importError);

            if (theme !== 'default') {
                const fallbackEl = document.createElement('link');
                fallbackEl.rel = 'stylesheet';
                fallbackEl.href = `src/themes/default/style.css`;
                document.head.appendChild(fallbackEl);
                const defaultThemeModule = await import('../themes/default/render.js');
                defaultThemeModule.renderTheme(data, 'app');
            }
        }
    } catch (error) {
        console.error('Core initialization failed:', error);
        document.getElementById('app').innerHTML = `<p>Error loading application.</p>`;
    }
};

document.addEventListener('DOMContentLoaded', init);
