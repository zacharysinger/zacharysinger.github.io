var loadCounter = 0;
    var loaded = function() {
        loadCounter += 1;
        if (loadCounter === 2) {
            $("iframe").attr("height", "300px");
            $(window).scrollTo(300,0)
        }
    }