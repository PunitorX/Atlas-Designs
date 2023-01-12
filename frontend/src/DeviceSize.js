const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '480px',
    tablet: '768px',
    tabletP: '1024px',
    laptopDesktop: '1280px',
    desktop: '1281px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletP: `(max-width: ${size.tabletP})`,
    laptopDesktop: `(max-width: ${size.laptop})`,
    screensL: `(min-width: ${size.desktop})`,
}