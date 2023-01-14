// Бутстрап тема
if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', 'light');
}
let link = document.createElement('link');
link.id = 'theme';
link.rel = 'stylesheet';
link.href = `/bootstrap.${localStorage.getItem('theme')}.min.css`;
document.head.appendChild(link);
