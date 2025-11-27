    
    // Header Code => (open / close)

    $(function(){
        $(".close-btn").click(function(){
            $(".menu-close").toggleClass("menu-open");
            $(this).toggleClass("open-btn");
        });
    });



    $(function(){
        $(".drop-down").click(function(){
            $(".drop-down-list").slideToggle();
            $(".close-btn").click(function(){
                $(".drop-down-list").fadeOut();
            })
        });
    });


    // _________________________________________________________________
    // courses button => (show / hide)
    $(function(){
        $(".add-courses-btn").click(function(){
            $(".courses-content-hide").fadeIn("courses-content-show");
            $(this).fadeOut();
            $(".courses").toggleClass("courses-change");
            $(".mines-btn-hide").fadeIn();
        });
    });

    $(function(){
        $(".mines-btn-hide").click(function(){
            $(".courses-content-hide").fadeOut("courses-content-hide");
            $(".mines-btn-hide").fadeOut();
            $(".add-courses-btn").fadeIn();
            $(".courses").css("height","100vh");
        })
    })

    // _________________________________________________________________
    // contact form => send mail

    console.log("its work");

    $(function(sendmail){
        $(".submit").click(function (event){
            
            console.log("clicked button");

            var name = $('.name').val();
            var email = $('.email').val();
            var subject = $('.subject').val();
            var message = $('.message').val(); 
            
            
            if(name.length > 1) {
                console.log("<div>Name is valid</div>");
            } else{
                console.log("<div>Name is not valid</div>");
            }

            if(email.length > 3 && email.includes('@') && email.includes(".") ) {
                console.log("<div>Email is valid</div>");
            } else{
                console.log("<div>Email is not valid</div>");
            }

            if(subject.length > 1) {
                console.log("<div>Subject is valid</div>");
            } else {
                console.log("<div>Subject is not valid</div>");
            }

            if(message.length >= 1) {
                console.log("<div>Message is valid</div>");
            } else {
                console.log("<div>Message is not valid</div>");
            }

        })
    })