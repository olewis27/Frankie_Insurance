
// Form Switchery.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).ready(function() {


	// SWITCHERY - Default Size
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-default'));


	// SWITCHERY - CHECKED BY DEFAULT
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-checked'));


	// SWITCHERY - UNCHECKED BY DEFAULT
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-unchecked'));


	// SWITCHERY - CHECKING STATE
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	var changeCheckbox = document.getElementById('demo-sw-checkstate'), changeField = document.getElementById('demo-sw-checkstate-field');
	new Switchery(changeCheckbox)
	changeField.innerHTML = changeCheckbox.checked;
	changeCheckbox.onchange = function() {
		changeField.innerHTML = changeCheckbox.checked;
	};



	// SWITCHERY - COLORED
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-blue'), {color:'#489eed'});
	new Switchery(document.getElementById('demo-sw-light-blue'), {color:'#35b9e7'});
	new Switchery(document.getElementById('demo-sw-green'), {color:'#44ba56'});
	new Switchery(document.getElementById('demo-sw-orange'), {color:'#f0a238'});
	new Switchery(document.getElementById('demo-sw-red'), {color:'#e33a4b'});
	new Switchery(document.getElementById('demo-sw-mint'), {color:'#2cd0a7'});
	new Switchery(document.getElementById('demo-sw-purple'), {color:'#8669cc'});
	new Switchery(document.getElementById('demo-sw-pink'), {color:'#ef6eb6'});


	// SWITCHERY - COLORED
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-clr1'), {color:'#489eed'});
	new Switchery(document.getElementById('demo-sw-clr2'), {color:'#35b9e7'});
	new Switchery(document.getElementById('demo-sw-clr3'), {color:'#44ba56'});
	new Switchery(document.getElementById('demo-sw-clr4'), {color:'#f0a238'});
	new Switchery(document.getElementById('demo-sw-clr5'), {color:'#e33a4b'});
	new Switchery(document.getElementById('demo-sw-clr6'), {color:'#2cd0a7'});
	new Switchery(document.getElementById('demo-sw-clr7'), {color:'#8669cc'});
	new Switchery(document.getElementById('demo-sw-clr8'), {color:'#ef6eb6'});


	// SWITCHERY - SIZES
	// =================================================================
	// Require Switchery
	// http://abpetkov.github.io/switchery/
	// =================================================================
	new Switchery(document.getElementById('demo-sw-sz-lg'), { size: 'large' });
	new Switchery(document.getElementById('demo-sw-sz'));
	new Switchery(document.getElementById('demo-sw-sz-sm'), { size: 'small' });


});