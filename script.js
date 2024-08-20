

function playMusic(songId) {
    const audio = document.getElementById(songId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
$(document).ready(function(){
    $('#toggle-filters').click(function(){
        $('#filters').toggle();
        $(this).text(function(i, text){
            return text === "Masquer les filtres" ? "Afficher les filtres" : "Masquer les filtres";
        });
    });
});


