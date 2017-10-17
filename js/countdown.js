
function gerarContdown(Y,M,D,H){
	var finale = new Date();
	finale = new Date(Y,M,D,H);
	
	$('#defaultCountdown').countdown({
		until: finale,
		padZeroes: true,
		layout:'<span class="countdown_row countdown_show4">'
					+'<center><span class="countdown_section"><span class="countdown_amount">{dn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{hn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{mn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{sn}</span><br /></span></center>'
				+'</span>'
	});
	$('#year').text(finale.getFullYear());
}

function gerarChamada(selector){
		var layout = '<section id="counter">'+
				 '<article>'+
				 '<div class="cronometro">'+
				 '<div id="defaultCountdown"></div>'+
				 '</div>'+
				 '</article>'+
				 '</section>';
		$(selector).html(layout);
}

$(function () {

	
	// Controles
	var domingo = false;
	var sorteio = false;
	var next = false;

	// Today
	var td = new Date();
	var horas = td.getHours();
	var hoje = td.getDay();

	// Loaders
	var dayOfWeek = 0;
	var hora = 10;
  	var date = new Date();
  	date.setDate(td.getDate() + (dayOfWeek + 7 - td.getDay()) % 7);

	
	// Validacoes
	if(hoje == dayOfWeek){
		console.debug('aqui')
		if(horas >= 10 && horas < 11){
			sorteio = true;
			console.debug('sorteio')
		} else if(horas < 10){
			next = true;
		} else {
			console.debug('forahora')
			var date = new Date();
			date.setDate(td.getDate() + (dayOfWeek + 7 - td.getDay()));
			next = true;
		}
	} else {
		next = true;
	}

	console.debug(date)

	// Next
	var p_ano = date.getFullYear();
	var p_mes = date.getMonth();
	var p_dia = date.getDate();

	

	if(next){
		gerarContdown(p_ano,p_mes,p_dia,hora);
	} else {
		$('#counter').addClass('hora');
	}

});