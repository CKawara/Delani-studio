$(document).ready(()=>{
    let icons = ['design', 'development', 'product'];
    icons.forEach((icon)=>{
        $("#" + icon).click(()=>{
            $("#" + icon +" "+".description").toggle();
            $("#" + icon +" "+"img").toggle();
        });
    });
    let projects = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8']
    projects.forEach((project)=>{
        $("#" + project).hover(()=>{
            $('#' + project +" " +".overlay").fadeIn();
        },()=>{
            $('#' + project +" " +".overlay").fadeOut();
        });
    });
    
    $("button").click(()=>{
        if($("#inputName").val()== '' || $("#inputEmail").val()== '' || $("#inputMessage").val()== ''){
            alert('fill all forms!!');
        }else
        alert("Thank you for contacting us.Your message has been received");

        // to enable the input fields to auto clear after submitting
        $("#inputName").val("");
        $("#inputEmail").val("");
        $("#inputMessage").val("");
    })
})