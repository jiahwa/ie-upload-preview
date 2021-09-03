function PreviewImg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var previmg = document.getElementById('previmg'); 
            previmg.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
