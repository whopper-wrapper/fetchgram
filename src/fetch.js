async function onLoad() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("url") == true) {
        var prm = params.get("url");
        var url = `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(prm)}`
        var res = await fetch(url);
        var data = await res.text();
        
        //var config = JSON.parse(data.match(new RegExp(/<title>(.*)<\/title>/))[1]);
        //var config = data.match(new RegExp(/<title>(.*)<\/title>/))[1]; // OK
        //var config = data.match(new RegExp(/"config":{"csrf_token":"([^"]*)"/))[1]; //NG
        //var config = JSON.parse(data.match(new RegExp(/"resource":{"__dr":"PolarisProfileRoot.react"},"props":{(.*)}/))[1]);
        //var config = data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],(.*);<\/script>/))[1];
        //var config = JSON.parse(data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],(.*)\);\}\);\}\);<\/script>/))[1]).define[0]; //NG
        
        var config = data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],function\(JSScheduler,ServerJS,ScheduledApplyEach\)\{qpl_inl\("([^"]*)","tierOneBeforeScheduler"\);JSScheduler.runWithPriority\(3,function\(\)\{qpl_inl\("([^"]*)","tierOneInsideScheduler"\);\(new ServerJS\(\)\).handleWithCustomApplyEach\(ScheduledApplyEach,(.*)\);\}\);\}\);<\/script>/))[3];
        //var config = JSON.parse(data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],function\(JSScheduler,ServerJS,ScheduledApplyEach\)\{qpl_inl\("([^"]*)","tierOneBeforeScheduler"\);JSScheduler.runWithPriority\(3,function\(\)\{qpl_inl\("([^"]*)","tierOneInsideScheduler"\);\(new ServerJS\(\)\).handleWithCustomApplyEach\(ScheduledApplyEach,(.*)\);\}\);\}\);<\/script>/))[3]);
        
        //var div1 = document.getElementById('csrf');
        //div1.insertAdjacentHTML('afterend', JSON.stringify({config}));
        //document.getElementById("csrf").innerHTML = JSON.stringify({config});
        //document.write(JSON.stringify({config}));
        document.write(config);
    }
};

window.onload = onLoad;
