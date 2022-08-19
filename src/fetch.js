async function onLoad() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("username") == true) {
        var username = params.get("username");
        var url = `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(`https://www.instagram.com/${username}/`)}`
        var res = await fetch(url);
        var data = await res.text();
        //var config = JSON.parse(data.match(new RegExp(/<title>(.*)<\/title>/))[1]);
        //var config = data.match(new RegExp(/<title>(.*)<\/title>/))[1]; // OK
        var config = data.match(new RegExp(/"config":{"csrf_token":"([^"]*)"/))[1];
        //var div1 = document.getElementById('csrf');
        //div1.insertAdjacentHTML('afterend', JSON.stringify({config}));
        //document.getElementById("csrf").innerHTML = JSON.stringify({config});
        //document.write(JSON.stringify({config}));
        document.write(config);
    }
};

window.onload = onLoad;
