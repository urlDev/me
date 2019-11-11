$("document").ready(function changeBackground() {
    var back = ['#012B36', '#3A8091', '#A0616A'];
    var rand = back[Math.floor(Math.random() * back.length)];
    $('#header, .navbar').css('background', rand);

})