const createIconSvg = pathData => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="${pathData}"/></svg>`;
};

const getSocialIcon = url => {
    const u = url.toLowerCase();
    if (u.includes('whatsapp')) return createIconSvg('m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z');
    if (u.includes('github'))
        return createIconSvg(
            'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2'
        );
    if (u.includes('discord'))
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M14.634 3.498a1 1 0 0 0-.825-.498H10.19a1 1 0 0 0-.826.498l-1.396 2.095H3.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V6.095h-4.468zM10.5 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/></svg>`;
    if (u.includes('linkedin'))
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
    if (u.includes('instagram'))
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;
    if (u.includes('youtube'))
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M2.5 7.1C2.6 5.2 4.1 3.7 6.1 3.5 8 3.3 12 3 12 3s4 .3 5.9.5c2 .2 3.5 1.7 3.6 3.6.2 1.9.5 4.9.5 4.9s-.3 3-.5 4.9c-.1 1.9-1.6 3.4-3.6 3.6-1.9.2-5.9.5-5.9.5s-4-.3-5.9-.5c-2-.2-3.5-1.7-3.6-3.6C2.2 14.9 2 11.9 2 11.9s.2-3 0-4.8z"/><path d="m9.5 15.5 7-3.5-7-3.5v7z"/></svg>`;
    return createIconSvg(
        'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
    );
};

export const renderTheme = (data, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const appDiv = document.createElement('div');
    appDiv.className = 'theme-container';

    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.className = 'icon-btn';
    themeToggleBtn.setAttribute('aria-label', 'Alternar modo escuro');
    themeToggleBtn.innerHTML = createIconSvg('M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z');
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    const randomThemeBtn = document.createElement('button');
    randomThemeBtn.className = 'icon-btn outline-btn';
    randomThemeBtn.setAttribute('aria-label', 'Tema Aleatório');
    randomThemeBtn.textContent = 'Tema Aleatório';
    randomThemeBtn.addEventListener('click', () => {
        const urlOptions = data.themes || ['default'];
        const current = new URLSearchParams(window.location.search).get('theme') || 'default';
        const urlFilt = urlOptions.filter(t => t !== current);
        if (urlFilt.length === 0) {
            return;
        }
        const randomBuffer = new Uint32Array(1);
        crypto.getRandomValues(randomBuffer);
        const randIndex = randomBuffer[0] % urlFilt.length;
        const rand = urlFilt[randIndex];
        window.location.href = `?theme=${rand}`;
    });

    topBar.appendChild(randomThemeBtn);
    topBar.appendChild(themeToggleBtn);
    appDiv.appendChild(topBar);

    const header = document.createElement('header');
    const profileImage = document.createElement('img');
    const profileData = {
        avatar: 'src/assets/logo.webp',
        name: 'Devs Tocantins',
        bio: 'Comunidade de TI do Estado do Tocantins'
    };

    profileImage.src = profileData.avatar;
    profileImage.alt = `Avatar de ${profileData.name}`;
    profileImage.className = 'avatar';
    profileImage.width = 96;
    profileImage.height = 96;
    profileImage.fetchPriority = 'high';

    const profileName = document.createElement('h1');
    profileName.textContent = profileData.name;

    const profileBio = document.createElement('p');
    profileBio.textContent = profileData.bio;
    profileBio.className = 'bio';

    header.appendChild(profileImage);
    header.appendChild(profileName);
    header.appendChild(profileBio);
    appDiv.appendChild(header);

    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Links principais');

    const linksList = document.createElement('ul');
    linksList.className = 'links-list';

    const linksArray = Array.isArray(data) ? data : data.links || [];

    linksArray.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'link-card';

        const iconWrap = document.createElement('span');
        iconWrap.innerHTML = getSocialIcon(link.url);
        iconWrap.className = 'icon-wrapper';

        const textSpan = document.createElement('span');
        textSpan.textContent = link.title;
        textSpan.className = 'link-title';

        a.appendChild(iconWrap);
        a.appendChild(textSpan);
        li.appendChild(a);
        linksList.appendChild(li);
    });

    nav.appendChild(linksList);
    appDiv.appendChild(nav);
    container.appendChild(appDiv);
};
