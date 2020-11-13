let darkTheme = document.getElementById('darkTheme');
let lightTheme = document.getElementById('lightTheme')

darkTheme.addEventListener('click', () =>{
	document.documentElement.style.setProperty('--bg-dark', '#000');
	document.documentElement.style.setProperty('--bg-light', '#222');
	document.documentElement.style.setProperty('--text-green-t', 'rgb(54, 189, 120)');
});

lightTheme.addEventListener('click', () =>{
	document.documentElement.style.removeProperty('--bg-dark', '#000');
	document.documentElement.style.removeProperty('--bg-light', '#222');
	document.documentElement.style.removeProperty('--text-green-t', 'rgb(54, 189, 120)');
})
