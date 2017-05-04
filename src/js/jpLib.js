$(function(){
	
	$('#bt-addItem').click(function(){
		var text = $('[name="item"]').val();

		if(text == ""){
			$('[name="item"]').addClass('empty-field');
			alert('A task can\'t be empty');
		}else{
			$('ul').append('<li>' + text + '</li>');
			$('[name="item"]').removeClass('empty-field');
			console.info('Item added: ' + text);
		}
		
	});
});