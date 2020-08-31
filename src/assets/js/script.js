$(document).ready(function () {
    @@include('slider.js');
    let dropdown = $('.dropdown');
    let dropdownToggle = $('.dropdown__toggle');
    let headerBurg = $('.header__burgmenu');
    let headerMenu = $('.header__menu');
    let brandLink = $('.brand__link');

    $(function() {
        $('.car__models').hide().filter(':first').show();
        brandLink.on('click', function () {
            var brand = $(this).data('brand');
            $('.car__models').hide();
            $(".".concat(brand, "__wrap")).show();
    
            brandLink.removeClass('active');
            $(this).addClass('active');
    
        }).filter(':first').click();
    });
    $(function () {
        dropdownToggle.on('click', function (e) {
            dropdown.toggleClass('dropdown--active');
            dropdownToggle.toggleClass('dropdown__toggle--active');
        });
        headerBurg.on('click', function (e) {
            $(this).toggleClass("burgmenu--active");
            headerMenu.toggleClass('header__menu--active');
            if (!dropdown.hasClass('dropdown--active')) {
                dropdownToggle.on('click', function (e) {
                    dropdown.addClass('dropdown--active');
                    dropdownToggle.addClass('dropdown__toggle--active');
                });
            } else {
                dropdown.removeClass('dropdown--active');
                dropdownToggle.removeClass('dropdown__toggle--active');
                headerBurg.removeClass("burgmenu--active");
                headerMenu.removeClass('header__menu--active');
            }
        });
    })
    const popup = () => {
        function bindModal(btnSel, popupSel, closeSel) {
            const popup = $(popupSel);
            const close = $(closeSel);
            const trigger = $(btnSel);

            $(trigger).on('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                $(popup).css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                $("body").css("overflow", "hidden");
            });

            $(close).on('click', () => {
                $(popup).css({
                    "visibility": "",
                    "opacity": ""
                });
                $("body").css("overflow", "");
            });

            $(popup).on('click', (e) => {
                if (e.target === popup) {
                    $(popup).css({
                        "visibility": "",
                        "opacity": ""
                    });
                    $("body").css("overflow", "");
                };
            });
        }
        bindModal('.modal__btn-one', '.modal', '.modal__close');
    };

    popup();
});