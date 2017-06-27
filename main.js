$(document).ready(function() {
    var imgIDs = ["#img0", "#img1", "#img2", "#img3", "#img4"];
    imgIDs.forEach(function(imgID) {
        var origSrc = $(imgID).attr('src');
        $(imgID).hover(function() {
            $(this).attr('src', $(this).attr('data-alt-src'));
        }, function() {
            $(this).attr('src', origSrc);
        });
    });
});