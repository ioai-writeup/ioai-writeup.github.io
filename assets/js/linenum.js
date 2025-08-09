function getlang(el) {
	const langregex = /language\-(.+)/; //no . in actual class name
	let res = "";
	el.classList.forEach((x) => {
		const ar = x.match(langregex);
		if(ar) { //ar not null
			res = ar[1];
			return;
		}
	});
	return res;
}
(function() {
	var hig = document.querySelectorAll('.highlighter-rouge:not(.language-plaintext)');
	var hl = hig.length;
	for(var k = 0; k < hl; k++) {
		const lang = getlang(hig[k]);
		var pre = hig[k].getElementsByTagName('pre'),
	  	pl = pre.length;
		  for (var i = 0; i < pl; i++) {
			var num = pre[i].innerHTML.split(/\n/).length;
			pre[i].innerHTML = `<details><summary>` + lang + ` (${num-1} lines)` + '</summary><span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span></details>';
			for (var j = 0; j < (num - 1); j++) {
			  var line_num = pre[i].getElementsByTagName('span')[0];
			  line_num.innerHTML += '<span>' + (j + 1) + '</span>';
			}
		  }
	}
  })();