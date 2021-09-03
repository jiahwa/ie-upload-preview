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

function PreviewStream(input) {
    // ajax post
    // eg:
    // var res =$http.post(url,data,{responseType: 'arrraybuffer'});
    // res.success(function(response, status, headers, config){open(response)})

    // mock: get file stream
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var stream = e.target.result;
            openwindow(stream, input.files[0].type);
        }
        reader.readAsArrayBuffer(input.files[0]);
    }

}
function openwindow(response, fileType) {
    var blob = new Blob([response],{type: fileType});
    if(isIE && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
    }else {
        var fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl);
    }
}

function isIE() {
    return !isNaN(Number(document.documentMode));
}
