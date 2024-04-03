export function InitializeTheme()
{
    let theme = localStorage.getItem('theme');

    if (theme === null)
    {
        theme = 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
    else
    {
        document.documentElement.setAttribute('data-theme', theme);
    }

    if (theme === 'dark')
    {
        let toggleIcon = document.getElementById('toggle-icon')!;
        toggleIcon.setAttribute('src', '/sun.svg')
    }
}