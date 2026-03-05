export const renderTheme = (data, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const appDiv = document.createElement('div');
    appDiv.className = 'theme-container';

    const header = document.createElement('header');
    const profileImage = document.createElement('img');
    profileImage.src = data.profile.avatar;
    profileImage.alt = `Avatar de ${data.profile.name}`;
    profileImage.className = 'avatar';

    const profileName = document.createElement('h1');
    profileName.textContent = data.profile.name;

    const profileBio = document.createElement('p');
    profileBio.textContent = data.profile.bio;
    profileBio.className = 'bio';

    header.appendChild(profileImage);
    header.appendChild(profileName);
    header.appendChild(profileBio);
    appDiv.appendChild(header);

    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Links principais');

    const linksList = document.createElement('ul');
    linksList.className = 'links-list';

    data.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'link-card';

        const textSpan = document.createElement('span');
        textSpan.textContent = link.title;

        a.appendChild(textSpan);
        li.appendChild(a);
        linksList.appendChild(li);
    });

    nav.appendChild(linksList);
    appDiv.appendChild(nav);
    container.appendChild(appDiv);
};
