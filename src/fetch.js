async function onLoad() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("url") == true) {
        var prm = params.get("url");
        var url = `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(prm)}`
        var res = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            //credentials: 'same-origin',
            credentials: 'include',
            /*headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                'Origin': 'https://www.instagram.com',
                'X-IG-App-ID': '936619743392459',
                'X-CSRFToken': '8qvOUfPxpbVxdvN2fGngRbmH9XCpz01k',
                'Cookie': 'csrftoken=8qvOUfPxpbVxdvN2fGngRbmH9XCpz01k',
            },//*/
        });
        var data = await res.text();
        
        //var config = JSON.parse(data.match(new RegExp(/<title>(.*)<\/title>/))[1]);
        //var config = data.match(new RegExp(/<title>(.*)<\/title>/))[1]; // OK
        //var config = data.match(new RegExp(/"config":{"csrf_token":"([^"]*)"/))[1]; //NG
        //var config = JSON.parse(data.match(new RegExp(/"resource":{"__dr":"PolarisProfileRoot.react"},"props":{(.*)}/))[1]);
        //var config = data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],(.*);<\/script>/))[1];
        //var config = JSON.parse(data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],(.*)\);\}\);\}\);<\/script>/))[1]).define[0]; //NG
        
        var config = data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],function\(JSScheduler,ServerJS,ScheduledApplyEach\)\{qpl_inl\("([^"]*)","tierOneBeforeScheduler"\);JSScheduler.runWithPriority\(3,function\(\)\{qpl_inl\("([^"]*)","tierOneInsideScheduler"\);\(new ServerJS\(\)\).handleWithCustomApplyEach\(ScheduledApplyEach,(.*)\);\}\);\}\);<\/script>/))[3];
        //var config = JSON.parse(data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],function\(JSScheduler,ServerJS,ScheduledApplyEach\)\{qpl_inl\("([^"]*)","tierOneBeforeScheduler"\);JSScheduler.runWithPriority\(3,function\(\)\{qpl_inl\("([^"]*)","tierOneInsideScheduler"\);\(new ServerJS\(\)\).handleWithCustomApplyEach\(ScheduledApplyEach,(.*)\);\}\);\}\);<\/script>/))[3]);
        
        /*var div = document.getElementById('csrf');
        div.insertAdjacentHTML('afterend', config);//*/
        document.getElementById("csrf").innerText = config;
        //document.getElementById("csrf").innerHTML = JSON.stringify({config});
        //document.write(JSON.stringify({config}));
        
        //document.write(config);
    }
};

window.onload = onLoad;
