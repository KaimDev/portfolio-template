export function LoadTheme()
{
    let theme = localStorage.getItem('theme');

    console.log(theme)

    document.documentElement.setAttribute('data-theme', theme!);
}