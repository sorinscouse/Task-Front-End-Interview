$(function () {

    $(".carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: false
    });

    $("#content .tab_block").hide(); // Скрытое содержимое
    $("#tabs li:nth-child(2)").attr("id", "current"); // Какой таб показать первым
    $("#content .tab_block:nth-child(2)").fadeIn(); // Показ первого контента таба

    $('#tabs a').click(function (e) {
        e.preventDefault();
        $("#content .tab_block").hide(); //Скрыть всё содержимое
        $("#tabs li").attr("id", ""); //Сброс идентификаторов
        $(this).parent().attr("id", "current"); // Активация идентификаторов
        $('#' + $(this).attr('title')).fadeIn(); // Показать содержимое текущей вкладки
    });

    $('.btn_menu').click(function () {
        $('.menu ul').slideToggle();
    });

});
