import  'jquery'
import 'jquery-ui'
import 'ion-rangeslider'


$(".js-range-slider-red").ionRangeSlider({
    min: 0,
    max: 100,
    from: 0,
    to: 500,
    grid: false,
    skin: 'round'
});

$(".js-range-slider").ionRangeSlider({
    min: 0,
    max: 100,
    from: 0,
    to: 500,
    grid: true,
    skin: 'round'
});
