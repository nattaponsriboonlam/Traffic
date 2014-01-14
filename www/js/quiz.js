$(function() {
    var quiz = {};

    quiz.ans = [];

    quiz.total_choice_correct = 0;

    //random quiz
    quiz.get_quiz = function() {
        app.show_loading();
        quiz.ans = [];

        $.ajax({
            url: 'data/quiz.json',
            async: false,
            dataType: "jsonp",
            crossDomain: true,
            jsonpCallback: 'quiz'
        }).done(function(data) {
                var choices = _.sample(data, 7);
                var $frm = $('#frm_quiz');
                //clear form
                $frm.empty();
                $html = '';

                var x = 1;

                _.each(choices, function(v) {

                    var cc = '';

                    $html += '<fieldset data-role="controlgroup">';
                    $title = '';
                    if(v.img == null) {
                        $html += '<legend>' + x + '. ' + v.q + '</legend>';
                    } else {
                        $html += '<legend>' + x + '. <img src="' + v.img + '">' + v.q + '</legend>';
                    }

                    var $c = '';
                    _.each(v.choices, function(c) {
                        if(c.val == v.ans) cc = c. text;
                        $c += '<input type="radio" name="' + v.id + '" id="'+ c.val + '" value="' + c.val + '">' +
                            '<label for="' + c.val + '">' + c.text + '</label>';
                    });
                    $html += $c;
                    $html += '</fieldset>';

                    quiz.ans.push({ 'x': x, 'quiz': v.id, 'ans': v.ans, 'text': cc });

                    x++;
                });

                quiz.create_hint();

                $frm.html($html);
                $('fieldset[data-role="controlgroup"]').controlgroup();
                $("input[type='radio']").checkboxradio().checkboxradio("refresh");

                app.hide_loading();
        });
    };

    quiz.summary = function() {
        var answers = [];
        $('input[type="radio"]').each(function(idx) {
            var obj = {};
            if($(this).prop('checked')) {
                obj['ans'] = $(this).prop('value');
                obj['quiz']  = $(this).attr('name');

                answers.push(obj);
            }
        });

        //check ans
        quiz.check_ans(answers);

        var pass = 2;
        var pass_msg = '';

        pass_msg = quiz.total_choice_correct >= 5 ? 'ผ่าน' : 'ไม่ผ่าน';
        alert('คุณตอบถูก : ' + quiz.total_choice_correct + ' ข้อ \n ' + 'คุณสอบ ' + pass_msg);
    };

    quiz.check_ans = function(ans) {
        _.each(ans, function(v) {
            quiz.do_check(v.quiz, v.ans);
        });
    };

    quiz.do_check = function(key, value) {
        //check quiz.ans
        _.each(quiz.ans, function(v) {
            if(v.quiz == key && v.ans == value) quiz.total_choice_correct++;
        });
    };

    quiz.create_hint = function() {
        var html = '';

        _.each(quiz.ans, function(v) {
            //quiz.ans.push({ 'x': x, 'quiz': v.id, 'ans': v.ans, 'text': cc });
            html += v.x + '. ' + v.text + '<br />';
        });

        $('#dl_hint > p').html(html);
    };

    $('#btn_quiz_refresh').on('click', function() {
        quiz.get_quiz();
        quiz.total_choice_correct = 0;
    });

    $('#btn_quiz_refresh_1').on('click', function() {
        quiz.get_quiz();
        quiz.total_choice_correct = 0;
    });

    $('#quiz_summary').on('click', function() {
        quiz.total_choice_correct = 0;
        quiz.summary();
    });



});