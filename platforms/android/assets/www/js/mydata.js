$(function() {
    var mydata = {};
mydata.get_list = function(file) {
		$.ajax({
			url: 'data/' + file,
			async: false,
			dataType: "jsonp",
     		crossDomain: true,
			jsonpCallback: 'rul'
		}).done(function(data) {
			//console.log(data);
			mydata.set_list(data);
		});
	};
	
	mydata.set_list = function(data) {
		var items = [];
		$('#rul_data').empty();
		 $.each( data, function( i, v ) {
             items.push( '<li> <h1  style="white-space:normal;"></h1>'+ v.title +'</h1><p style="white-space: normal;"> ' + v.desc + '</p></li>' );
		 });
		 $('#rul_data').html(items);
		 $('#rul_data').listview('refresh');
	}
	
	//get_list();

	$(document).on('click', '#go_page_rul', function(e) {
		mydata.get_list('contents1.json');
	});

	$(document).on('click', '#go_page_rul2', function(e) {
		mydata.get_list('contents3.json');
	});

});