$(document).on('click', '.nav-item', function (e) {
    $(this).addClass('active').siblings().removeClass('active');
} );