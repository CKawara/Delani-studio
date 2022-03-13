$(document).ready(()=>{
    $("#design").click(()=>{
        $("#design .description").toggle();
        $("#design img").toggle();
    })
    $("#development").click(()=>{
        $("#development .description").toggle();
        $("#development img").toggle();
    })
    $("#product").click(()=>{
        $("#product .description").toggle();
        $("#product img").toggle();
    })
    $("#work4").hover(()=>{
        $("#work4 .overlay").fadeIn();
    },()=>{
        $("#work4 .overlay").fadeOut();

    })
    $("#work3").hover(()=>{
        $("#work3 .overlay").fadeIn();
    },()=>{
        $("#work3 .overlay").fadeOut();

    })
    $("#work2").hover(()=>{
        $("#work2 .overlay").fadeIn();
    },()=>{
        $("#work2 .overlay").fadeOut();

    })
    $("#work1").hover(()=>{
        $("#work1 .overlay").fadeIn();
    },()=>{
        $("#work1 .overlay").fadeOut();

    })
    $("#work5").hover(()=>{
        $("#work5 .overlay").fadeIn();
    },()=>{
        $("#work5 .overlay").fadeOut();

    })
    $("#work6").hover(()=>{
        $("#work6 .overlay").fadeIn();
    },()=>{
        $("#work6 .overlay").fadeOut();

    })
    $("#work7").hover(()=>{
        $("#work7 .overlay").fadeIn();
    },()=>{
        $("#work7 .overlay").fadeOut();

    })
    $("#work8").hover(()=>{
        $("#work8 .overlay").fadeIn();
    },()=>{
        $("#work8 .overlay").fadeOut();

    })
    $("button").click(()=>{
        if($("#inputName").val()== '' || $("#inputEmail").val()== '' || $("#inputMessage").val()== ''){
            alert('fill all forms!!');
        }else
        alert("Thank you for contacting us.Your message has been received");
    })
})