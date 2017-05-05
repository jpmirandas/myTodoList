$(function(){
	
	$('#bt-addItem').click(function(){
		var text = $('[name="item"]').val();

		if(text == ""){
			$('[name="item"]').addClass('empty-field');
			alert('A task can\'t be empty');
		}else{
			$('ul').append('<li><input type="checkbox" name="'+text+'">'+ text +'</li>');
			
			$('[name="item"]').removeClass('empty-field');
			$('[name="item"]').val('');
			console.info('Item added: ' + text);
		}
		
	});

$(document).on('change', 'input[type="checkbox"]', function() {
    if(this.checked) {
      var inputName = this.getAttribute('name')
      $('li input[name="'+inputName+'"]').replaceWith('<li><input type="checkbox" name="'+inputName+'"><del>'+ inputName +'</del></li>');
    }
});



});