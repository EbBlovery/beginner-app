(function(){
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickNbr = document.querySelector('#click-nbr');
	var apiUrl = 'http://localhost:3000/api/clicks';
	function ready(fn){
       if(typeof fn !== 'function'){
          return;
       }
       if(document.readyState === 'complete'){
           return fn()
       }
       document.addEventListener('DOMContentLoaded',fn,false)
	};
	function ajaxRequest(method,url,callback){
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
        	if(xml.status === 200 && xml.readyState===4){
                callback(xml.response)
        	}
        };
        xml.open(method,url,true);
        xml.send();
	};
	function updateClickCount(data){
        var clickObject = JSON.parse(data);
        clickNbr.innerHTML = clickObject.clicks;
	};
	ready(ajaxRequest('GET',apiUrl,updateClickCount));

	addButton.addEventListener('click',function(){
		ajaxRequest('POST',apiUrl,function(){
           ajaxRequest('GET',apiUrl,updateClickCount)
		});
	},false);
	deleteButton.addEventListener('click',function(){
		ajaxRequest('DELETE',apiUrl,function(){
			ajaxRequest('GET',apiUrl,updateClickCount)
		});
	},false)
})()