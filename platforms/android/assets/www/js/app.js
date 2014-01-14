$(function() {
	var get_list = function(cat) {
		$.ajax({
			url: 'data/contents.json',
			async: false,
			dataType: "jsonp",
     		crossDomain: true,
			jsonpCallback: 'lst'
		}).done(function(data) {
			//console.log(data);
			set_list(data, cat);	
		});
	};
	
	var set_list = function(data, cat) {
		var items = [];
		$('#lst_main').empty();
		 $.each( data, function( i, v ) {
			if(v.cat == cat) {
				items.push( '<li><img src="'+ v.img +'" style="margin:2px 5px 2px 10px;"/><h2 style="color:#003" >'+ v.title +'</h2><p style="white-space: normal;"> ' + v.desc + '</p></li>' );
			}
		 });
		 $('#lst_main').html(items);
		 $('#lst_main').listview('refresh');
	}
	
	//get_list();

	$(document).on('click', '#go_page_tra1', function(e) {
		get_list('1');
	});

	$(document).on('click', '#go_page_tra2', function(e) {
		get_list('2');
	});
		$(document).on('click', '#go_page_tra3', function(e) {
		get_list('3');
	});
		$(document).on('click', '#go_page_tra4', function(e) {
		get_list('4');
	});

});