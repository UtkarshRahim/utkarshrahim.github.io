// fix header
$(window).scroll(function () {
    var sticky = $('#deskTopNav');
    var logo = $('#deskTopLogo')
    scroll = $(window).scrollTop();

    if (scroll >= 100) {
        sticky.addClass('fixed-header  animated animatedFadeInUp fadeInUp');
        logo.addClass('fix-logo');
    }
    else {
        sticky.removeClass('fixed-header animated animatedFadeInUp fadeInUp');
        logo.removeClass('fix-logo');
    }
});




// News carousal
$(document).ready(function () {
    var owl = $('#latestNews').owlCarousel({
        margin: 10,
        loop: true,
        // autoWidth: true,
        nav: true,
        // dots: true,
        navText: ["<img src='img/left.svg'>", "<img src='img/right.svg'>"],
        responsiveClass: true,
        //mergeFit: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })

    function x() {
        var b = document.getElementById("posts");
        console.log(b);
    }
    // var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // var mokData = [



    // ];
    // $.each(mokData, function (i) {
    //     var templateString = `
    //     <div class="item">
    //         <div class="card latest-news">

    //           <div class="card-body">


    //           </div>
    //          </div>
    //     </div>`;
    //     owl.trigger('add.owl.carousel', [$(templateString)]);
    //     owl.trigger('refresh.owl.carousel');
    // })
});

// gallery carousel
$(document).ready(function () {
    var owl = $("#gallery").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade",
        nav: true,
        navText: ["<img src='img/transparent-left.svg'>", "<img src='img/transparent-right.svg'>"],
        dots: false,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
    var caption = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    var gallryImages = [{
        image: "img/gallery1.jpg",
        caption: caption
    }, {
        image: "img/gallery2.jpg",
        caption: caption
    },
    {
        image: "img/gallery3.jpg",
        caption: caption
    },
    {
        image: "img/banner.png",
        caption: caption
    }
    ]
    $.each(gallryImages, function (i) {
        var templateString = `
        <div class="item">
        <div class="card">
            <div class="overlay">
                <div class="container">
                    <div class="caption text-white">${gallryImages[i].caption}</div>
                </div>
            </div>
            <img class="card-img-top" src= ${gallryImages[i].image}>
        </div>
        </div>
        `;
        owl.trigger('add.owl.carousel', [$(templateString)]);
        owl.trigger('refresh.owl.carousel');
    })

});



// Menu button
$(document).ready(function () {
    $("#mobNavBtn").click(function () {
        $(".mob-nav").fadeIn('2000');
    })
});
$(document).ready(function () {
    $("#hideNav").click(function () {
        $(".mob-nav").fadeOut('2000');
    })
});

$(function () {
    $("#twitter").load("./feed/twitter.html");
});

$(function () {
    $("#instagram").load("./feed/instagram.html");
});

$(function () {
    $("#facebook").load("./feed/fb.html");
});

$(function () {
    $("#fb_events").load("./menu/fb_events.html");
});



sendData = () => {
    var fullName = document.getElementById("name").value;
    var finalName = fullName.replace(/ /g, "+");

    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var initialSubject = document.getElementById("subject").value;
    var subject = initialSubject.replace(/ /g, "+");
    var initialMessage = document.getElementById("message").value;
    var message = initialMessage.replace(/ /g, "+");
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSfB2bt8OjJklg5RW8ub3EfLqDT1iezlVNY3-josUvut1YfjVA/formResponse?usp=pp_url&entry.44052684=" + finalName + "&entry.1609690659=" + phone + "&entry.935406244=" + email + "&entry.866322259=" + subject + "&entry.496307721=" + message + "";
    if (fullName && fullName != "" && message && message != "") {
        $.ajax({
            url: url
        });
       
        //  $("#feedback-form").hide();
        $("#feedback-form").load("/pages/feedbackresult.html");
    }

}






