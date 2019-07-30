(function ($) {
    var $this;
    var $ajaxUrl = '';
    $.fn.pasteUploadImage = function (ajaxUrl, callBack) {
        $this = $(this);
        $ajaxUrl = ajaxUrl;
        $this.on('paste', function (event) {
            var filename, image, pasteEvent, text;
            pasteEvent = event.originalEvent;
            if (pasteEvent.clipboardData && pasteEvent.clipboardData.items) {
                image = isImage(pasteEvent);
                if (image) {
                    event.preventDefault();
                    filename = getFilename(pasteEvent) || "image.png";
                    filename = splitFileName(filename);
                    text = "{{" + filename + "(uploading...)}}";
                    pasteText(text);
                    return uploadFile(image.getAsFile(), filename, $this, event, callBack);
                }
            }
        });
        $this.on('drop', function (event) {
            var filename, image, pasteEvent, text;
            pasteEvent = event.originalEvent;
            if (pasteEvent.dataTransfer && pasteEvent.dataTransfer.files) {
                image = isImageForDrop(pasteEvent);
                if (image) {
                    event.preventDefault();
                    filename = pasteEvent.dataTransfer.files[0].name || "image.png";
                    filename = splitFileName(filename);
                    text = "{{" + filename + "(uploading...)}}";
                    pasteText(text);
                    return uploadFile(image, filename, $this, event, callBack);
                }
            }
        });
    };

    pasteText = function (text) {
        // var afterSelection, beforeSelection, caretEnd, caretStart, textEnd;
        // caretStart = $this[0].selectionStart;
        // caretEnd = $this[0].selectionEnd;
        // textEnd = $this.val().length; 
        // beforeSelection = $this.val().substring(0, caretStart);
        // afterSelection = $this.val().substring(caretEnd, textEnd);
        // $this.val(beforeSelection + text + afterSelection);
        // $this.get(0).setSelectionRange(caretStart + text.length, caretEnd + text.length);
        // return $this.trigger("input");
    };
    isImage = function (data) {
        var i, item;
        i = 0;
        while (i < data.clipboardData.items.length) {
            item = data.clipboardData.items[i];
            if (item.type.indexOf("image") !== -1) {
                return item;
            }
            i++;
        }
        return false;
    };
    isImageForDrop = function (data) {
        var i, item;
        i = 0;
        while (i < data.dataTransfer.files.length) {
            item = data.dataTransfer.files[i];
            if (item.type.indexOf("image") !== -1) {
                return item;
            }
            i++;
        }
        return false;
    };
    getFilename = function (e) {
        var value;
        if (window.clipboardData && window.clipboardData.getData) {
            value = window.clipboardData.getData("Text");
        } else if (e.clipboardData && e.clipboardData.getData) {
            value = e.clipboardData.getData("text/plain");
        }
        value = value.split(" ");
        return value[0];
    };
    getMimeType = function (file, filename) {
        var mimeType = file.type;
        var extendName = filename.substring(filename.lastIndexOf('.') + 1);
        if (mimeType != 'image/' + extendName) {
            return 'image/' + extendName;
        }
        return mimeType
    };
    uploadFile = function (file, filename, $this, event, callBack) {
        // var formData = new FormData();
        // formData.append('imageFile', file);
        // formData.append("mimeType", getMimeType(file, filename));
        var reader=new FileReader()
        reader.onload=function (e) {

            insertToImg($(event.target), e.target.result, (new Date()).getTime())
            
            // $.ajax({
            //     url: $ajaxUrl,
            //     // data: formData,
            //     data: JSON.stringify({
            //         "file_name": filename,
            //         "image_data": e.target.result
            //     }),            
            //     type: 'post',
            //     processData: false,
            //     contentType: false,
            //     dataType: 'json',
            //     xhrFields: {
            //         withCredentials: true
            //     },
            //     success: function (data) {
            //         typeof callBack === "function" && callBack($this, file, {
            //             id: data.id,
            //             img_data: e.target.result
            //         });
            //         if (data.id) {
            //             return insertToImg($(event.target), e.target.result, data.id);
            //         }
            //         // return replaceLoadingTest(filename);
            //     },
            //     error: function (xOptions, textStatus) {
            //         typeof callBack === "function" && callBack($this, file, {
            //             id: (new Date()).getTime(),
            //             img_data: e.target.result
            //         });
            //         insertToImg($(event.target), e.target.result, (new Date()).getTime())
            //         // replaceLoadingTest(filename);
            //         //测试用
            //         // insertToTextArea(filename,  (new Date()).getTime())
            //         console.log(xOptions.responseText);
            //     }
            // });                                                       
        }
        reader.readAsDataURL(file);
    };
    insertToTextArea = function (filename, url) {
        return $this.val(function (index, val) {
            return val.replace("{{" + filename + "(uploading...)}}", "![" + filename + "](" + url + ")" + " ");
        });
    };
    replaceLoadingTest = function (filename) {
        return $this.val(function (index, val) {
            return val.replace("{{" + filename + "(uploading...)}}", filename + " ");
        });
    };

    insertToImg = function ($target, imgData, imgId) {
        var img = $("<div><img img-id='" + imgId + "' src='" + imgData + "'></div>");
        if ($target.hasClass("form-input")) {
            $target.prepend(img);
            return;
        }
        if ($target.is("br")) {
            $target.parent().append(img);
            return;
        }
        if ($target.is("img")) {
            if ($target.parent().hasClass("form-input")) {
                $target.parent().prepend(img);
                return;
            } 
            $target.parent().append(img);
            return;
        }        
        $target.append(img);
    }
    function splitFileName (str) {
        var newStr = '';
        var arr = str.split('.');
        var cha = 9 - arr[arr.length - 1].length;
        if (arr[0].length > cha) {
            newStr = arr[0].slice(0, cha);
        } else {
            newStr = arr[0];
        }
        return newStr + "." + arr[arr.length - 1];
    } 
})(jQuery);
