$(function() {
    var gendata = {};
    gendata.get_list = function(file) {
		$.ajax({
			url: 'data/' + file,
			async: false,
			dataType: "jsonp",
     		crossDomain: true,
			jsonpCallback: 'gen'
		}).done(function(data) {
			//console.log(data);
                gendata.set_list(data);
		});
	};

    gendata.set_list = function(data) {
		var items = [];
		$('#data_list').empty();
		 $.each( data, function( i, v ) {
             items.push( '<li><h4 style="white-space: normal; color:blueviolet; font-family: Times; ">'+ v.title +'</h4><h6 style="white-space: normal; font-family:Times; color: brown"> ' + v.desc +'</h6> </li>' );
		 });
		 $('#data_list').html(items);
		 $('#data_list').listview('refresh');
	}
	
	//get_list();

	$(document).on('click', '#go_gen1', function(e) {
        gendata.get_list('data1.json');
	});

	$(document).on('click', '#go_gen2', function(e) {
        gendata.get_list('data.json');
	});
    $(document).on('click', '#go_gen3', function(e) {
        gendata.get_list('data.json');
    });
    $(document).on('click', '#go_gen4', function(e) {
        gendata.get_list('data.json');
    $(document).on('click', '#go_gen5', function(e) {
        gendata.get_list('data.json');
    });
  });
});