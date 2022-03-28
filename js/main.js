
$(function () {

    function textAnimate() {
        let h1 = document.querySelector(".landing h1");
        let h1Text = h1.textContent;
        let splitText = h1Text.split("");
        h1.textContent = "";


        for (let i = 0; i < splitText.length; i++) {
            h1.innerHTML += "<span>" + splitText[i] + "</span>"
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {

            let span = h1.querySelectorAll("span")[char];

            span.classList.add("fade");
            char++;

            if (char === splitText.length) {

                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null
        }
    }
    textAnimate();
    
    setInterval(function () {
        textAnimate()

    }, 5000);


    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }

        // Sync Navbar Links With My All Sections
        $("section, body").each(function () {

            if ($(window).scrollTop() > $(this).offset().top - 1) {

                let sections = $(this).attr('id');

                $(".navbar ul li a").removeClass("active");

                $('.navbar ul li a[data-scroll="' + sections + '"]').addClass("active")

            }
        })
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })

    // Smoothly Scroll To Elment
    $("body a").click(function (e) {

        e.preventDefault();

        $(".navbar-collapse").removeClass("show")

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        });

    });

    $(".our-work ul li").click(function () {

        $(this).addClass("active").siblings().removeClass("active")
    });
})
