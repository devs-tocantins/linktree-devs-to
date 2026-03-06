export const renderTheme = (data, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    document.documentElement.style.backgroundColor = '#000';

    const scene = document.createElement('div');
    scene.className = 'lv-scene';

    const linksArray = Array.isArray(data) ? data : data.links || [];
    const totalLinks = linksArray.length;

    let currentIndex = 0;
    const getRadius = () => (window.innerWidth < 640 ? 150 : 250);
    let radius = getRadius();

    window.addEventListener('resize', () => {
        radius = getRadius();
        updateCarousel();
    });

    const getMinimalIcon = url => {
        const u = url.toLowerCase();
        if (u.includes('github'))
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>`;
        if (u.includes('linkedin'))
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
        if (u.includes('instagram'))
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;
        if (u.includes('youtube'))
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.01 29.01 0 0 0 1 11.75a29.16 29.16 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.01 29.01 0 0 0 .46-5.25 29.16 29.16 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`;
        if (u.includes('whatsapp'))
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    };

    const items = [];
    linksArray.forEach((link, idx) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'lv-carousel-item';
        a.dataset.title = link.title;
        a.innerHTML = getMinimalIcon(link.url);
        scene.appendChild(a);
        items.push(a);
    });

    const controls = document.createElement('div');
    controls.className = 'lv-controls';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'lv-control-btn';
    prevBtn.innerHTML = '&#10094;';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'lv-control-btn';
    nextBtn.innerHTML = '&#10095;';
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    scene.appendChild(controls);

    const activeTitleContainer = document.createElement('div');
    activeTitleContainer.className = 'lv-active-title-container';
    const activeTitle = document.createElement('a');
    activeTitle.className = 'lv-active-title';
    activeTitle.target = '_blank';
    activeTitle.rel = 'noopener noreferrer';
    activeTitleContainer.appendChild(activeTitle);

    const bgImage = document.createElement('img');
    bgImage.src = 'src/assets/leonardo_vinicius/mao.webp';
    bgImage.className = 'lv-bg-image';
    scene.appendChild(bgImage);

    const spaceBg = document.createElement('img');
    spaceBg.src = 'src/assets/leonardo_vinicius/fundo-espacial.webp';
    spaceBg.className = 'lv-space-bg';
    spaceBg.alt = 'Fundo Espacial';
    container.appendChild(spaceBg);

    container.appendChild(scene);
    container.appendChild(activeTitleContainer);

    const footer = document.createElement('div');
    footer.className = 'lv-footer-credits';
    footer.innerHTML = `
        <span>Criado por Leonardo Vinicius | </span>
        <a href="https://github.com/leo-nardo" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/leonardo-vinicius-batista-santos-396745209" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    `;
    container.appendChild(footer);

    const randomThemeBtn = document.createElement('button');
    randomThemeBtn.className = 'lv-random-theme-btn';
    randomThemeBtn.innerHTML = 'Tema Aleatório';
    randomThemeBtn.onclick = () => {
        const url = new URL(window.location.href);
        url.searchParams.set('theme', 'random');
        window.location.href = url.toString();
    };
    container.appendChild(randomThemeBtn);

    let autoPlayInterval;

    const updateCarousel = () => {
        const carouselAngle = (currentIndex * -360) / totalLinks;

        const tiltX = 30;

        const normalizedIndex = ((currentIndex % totalLinks) + totalLinks) % totalLinks;

        items.forEach((item, idx) => {
            const itemAngle = (360 / totalLinks) * idx;
            const isActive = idx === normalizedIndex;

            const currentScale = isActive ? 1.4 : 0.8;

            const angleRad = (itemAngle + carouselAngle) * (Math.PI / 180);
            const zDistance = Math.cos(angleRad);
            const maxBlur = 8;
            const blurVal = ((1 - zDistance) / 2) * maxBlur;

            item.style.zIndex = isActive ? 110 : 90;

            item.style.transform = `
                translateZ(${-radius}px) 
                rotateX(${tiltX}deg) 
                rotateY(${carouselAngle + itemAngle}deg) 
                translateZ(${radius}px) 
                rotateY(${-itemAngle - carouselAngle}deg) 
                rotateX(${-tiltX}deg) 
                scale(${currentScale})
            `;
            item.style.transition =
                'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s, border-color 0.4s, filter 0.6s, z-index 0.6s step-end';
            item.style.filter = `blur(${blurVal}px)`;

            if (isActive) {
                item.classList.add('lv-active');
                activeTitle.style.opacity = '0';
                setTimeout(() => {
                    activeTitle.textContent = item.dataset.title;
                    activeTitle.href = item.href;
                    activeTitle.style.opacity = '1';
                }, 300);
            } else {
                item.classList.remove('lv-active');
            }
        });
    };

    const nextItem = () => {
        currentIndex++;
        updateCarousel();
        resetAutoPlay();
    };
    const prevItem = () => {
        currentIndex--;
        updateCarousel();
        resetAutoPlay();
    };

    let startX = 0;
    let isDragging = false;

    const onPointerDown = e => {
        isDragging = true;
        startX = e.clientX || (e.touches && e.touches[0].clientX);
        clearInterval(autoPlayInterval);
    };

    const onPointerMove = e => {
        if (!isDragging) return;
        const currentX = e.clientX || (e.touches && e.touches[0].clientX);
        const diffX = currentX - startX;

        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                currentIndex--;
            } else {
                currentIndex++;
            }
            updateCarousel();
            startX = currentX;
        }
    };

    const onPointerUp = () => {
        if (isDragging) {
            isDragging = false;
            resetAutoPlay();
        }
    };

    container.addEventListener('mousedown', onPointerDown);
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    container.addEventListener('mousemove', onPointerMove);
    container.addEventListener('touchmove', onPointerMove, { passive: true });
    container.addEventListener('mouseup', onPointerUp);
    container.addEventListener('touchend', onPointerUp);
    container.addEventListener('mouseleave', onPointerUp);

    prevBtn.onclick = prevItem;
    nextBtn.onclick = nextItem;

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextItem, 2500);
    };

    updateCarousel();
    resetAutoPlay();
};
