var app = {};

$(function() {

	var get_list = function(cat) {

        app.show_loading();

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

        app.hide_loading();
	};
	
	//get_list();

	$(document).on('click', '#go_page_tra', function(e) {
		get_list('1');
	});
    $(document).on('click', '#go_page_tra1', function(e) {
        get_list('8');
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
        $(document).on('click', '#go_page_tra5', function(e) {
        get_list('5');
    });
    $(document).on('click', '#go_page_tra6', function(e) {
        get_list('6');
    });
    app.show_loading = function() {
                $.mobile.loading( "show", {
            text: 'กำลังโหลด...',
            textVisible: true,
            theme: 'b',

            html: ""
        });
    };

    app.hide_loading = function() {
        $.mobile.loading( "hide" );
    };

    $('#btn_page2').on('click', function(e) {

    });

    $( "#page2" ).on( "pagebeforecreate", function( event, ui ) {
        app.show_loading();
    } );

    $( "#page2" ).on( "pagecreate", function( event, ui ) {
        app.hide_loading();
    } );

});