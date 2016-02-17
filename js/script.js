$(function () {

    var currentNumber = 1;

    $('.add').click(function () {

        var msg = $('.new-message').val();
        $(".tasks").append('<li>');

        var currentSelector = 'li:nth-child(' + currentNumber + ')';

        $('li:last-child').text(msg);
        $('.new-message').val("");
        currentNumber++;
        console.log(currentNumber);

    });

    $('.done').click(function () {
        $('.chosen').addClass('made').removeClass('chosen');
    });

    $('.delete').click(function () {
        $('.chosen').remove();
    });

    $('.tasks').on('click', 'li', function () {
        $(this).toggleClass('chosen');
    });

});
