$(document).ready(function(){

$("h1, #hidden").hide(); // NOTER BIEN : TOUT PEUT ETRE MANIPULER MIEUX QUE CERTAINS NOUS DIT

 $("h1").fadeIn(3000);




    const target = document.querySelector('hr');

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                console.log('<hr> est plus visible');
                $('.hideLater').fadeOut(2000);
                $("#hidden").fadeIn(5000);
            } else {
                console.log('<hr> est toujours visible');
            }
        });
    });

    observer.observe(target);













}); // end ready