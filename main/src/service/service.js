define([], function () {
	var baseUrl = "./assets/data/data";
	var markNum = 1;
	var maxNum = 3;
	function getData (callback) {
	    getScript(window, document, "script", baseUrl + markNum + ".js", function (target) {
	        $(document).find(target.target).remove();
	        markNum++;
	        if (markNum <= maxNum) {
	            getData(callback);
	        } else {
	        	markNum = 1;
	            typeof callback === "function" && callback(window.windowData);
	        }
	    })
	}

	window.addData = function (parentData, data) {
	    data.forEach(function (item) {
	        var hasBusiness = false;
	        parentData.forEach(function (stackItem) {
	            if (stackItem.businessName === item.businessName) {
	                // stackItem.children = [...stackItem.children, ...item.children]; //手机不支持es6
	                stackItem.children = stackItem.children.concat(item.children);
	                hasBusiness = true;
	            }
	        })
	        if (!hasBusiness) {
	            // parentData = [...parentData, item];
	            parentData.push(item);
	        }
	    })  
	}

	function getScript(win, doc, tag, src, always) {
	    var script = doc.createElement(tag),
	        h = doc.getElementsByTagName(tag)[doc.getElementsByTagName(tag).length - 1];
	    script.async = 1;
	    if (tag === "script") {
	        script.src = src;
	    } else if (tag === "link") {
	        script.href = src;
	        script.rel = "stylesheet";
	    }

	    if (script.addEventListener) {
	        script.addEventListener("load", always, false);
	    } else if (script.attachEvent) {
	        script.attachEvent("onreadystatechange", function () {
	            var target = window.event.srcElement;
	            if (target.readyState == "loaded" || target.readyState == "complete") {
	                always.call(target);
	            }
	        });
	    }

	    if (h.parentNode.insertBefore) {
	        h.parentNode.insertBefore(script, h);
	    };
	}

	return {
		getData: getData
	}
})
