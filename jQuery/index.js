$("h1").click(function() {
    $("h1").css("color", "blue")
})


$("button").click(function () {
    $("h1").css("color","green")
})

$(document).keypress(function () {
    $("h1").text(event.key)
})