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
             items.push( '<li> <h1 style="white-space: normal; color: red; font-family: Times; ">'+ v.title +'</h1><h6 style="white-space: normal; font-family:Times;"> ' + v.desc + '</h6></li>' );
		 });
		 $('#rul_data').html(items);
		 $('#rul_data').listview('refresh');
	}
	
	//get_list();

	$(document).on('click', '#go_Rul1', function(e) {
		mydata.get_list('content1.json');
	});

	$(document).on('click', '#go_Rul2', function(e) {
		mydata.get_list('content2.json');
	});
    $(document).on('click', '#go_Rul3', function(e) {
        mydata.get_list('content3.json');
    });
    $(document).on('click', '#go_Rul4', function(e) {
        mydata.get_list('content4.json');
    });
    $(document).on('click', '#go_Rul5', function(e) {
        mydata.get_list('content5.json');
    });
    $(document).on('click', '#go_Rul6', function(e) {
        mydata.get_list('content6.json');
    });
    $(document).on('click', '#go_Rul7', function(e) {
        mydata.get_list('content7.json');
    });
    $(document).on('click', '#go_Rul8', function(e) {
        mydata.get_list('content8.json');
    });
    $(document).on('click', '#go_Rul9', function(e) {
        mydata.get_list('content9.json');
    });
    $(document).on('click', '#go_Rul10', function(e) {
        mydata.get_list('content10.json');
    });
    $(document).on('click', '#go_Rul11', function(e) {
        mydata.get_list('content11.json');
    });
    $(document).on('click', '#go_Rul12', function(e) {
        mydata.get_list('content12.json');
    });
    $(document).on('click', '#go_Rul13', function(e) {
        mydata.get_list('content13.json');
    });
    $(document).on('click', '#go_Rul14', function(e) {
        mydata.get_list('content14.json');
    });
    $(document).on('click', '#go_Rul15', function(e) {
        mydata.get_list('content15.json');
    });
    $(document).on('click', '#go_Rul16', function(e) {
        mydata.get_list('content16.json');
    });
    $(document).on('click', '#go_Rul17', function(e) {
        mydata.get_list('content17.json');
    });
    $(document).on('click', '#go_Rul18', function(e) {
        mydata.get_list('content18.json');
    });
    $(document).on('click', '#go_Rul19', function(e) {
        mydata.get_list('content19.json');
    });
    $(document).on('click', '#go_Rul20', function(e) {
        mydata.get_list('content20.json');
    });
    $(document).on('click', '#go_Rul21', function(e) {
        mydata.get_list('content21.json');
    });
    $(document).on('click', '#go_Rul22', function(e) {
        mydata.get_list('content22.json');
    });
    $(document).on('click', '#go_Rul23', function(e) {
        mydata.get_list('content23.json');
    });
    $(document).on('click', '#go_Rul24', function(e) {
        mydata.get_list('content24.json');
    });
});