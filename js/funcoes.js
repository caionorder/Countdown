$(function () {
	var finale = new Date();
	finale = new Date(2015,4-1,8,10);
	$('#defaultCountdown').countdown({
		until: finale,
		layout:'<span class="countdown_row countdown_show4">'
					+'<center><span class="countdown_section"><span class="countdown_amount">{d<}{dn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{d>} {hn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{mn}</span><br /></span>'
					+'<span class="countdown_section"><span class="countdown_amount">{sn}</span><br /></span></center>'
				+'</span>'
	});
	$('#year').text(finale.getFullYear());
});