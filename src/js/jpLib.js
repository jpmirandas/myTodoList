$(function(){
	
	$('#bt-addItem').click(function(){
		var text = $('[name="item"]').val();
		console.info('Item added: ' + text);
		$('ul').append('<li>' + text + '</li>');
	});
});