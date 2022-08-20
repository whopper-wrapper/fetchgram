async function onLoad() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("url") == true) {
        var prm = params.get("url");
        var url = `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(prm)}`
        var res = await fetch(url);
        var data = await res.text();
        var json = data.match(new RegExp(/<script>requireLazy\(\["JSScheduler","ServerJS","ScheduledApplyEach"\],function\(JSScheduler,ServerJS,ScheduledApplyEach\)\{qpl_inl\("([^"]*)","tierOneBeforeScheduler"\);JSScheduler.runWithPriority\(3,function\(\)\{qpl_inl\("([^"]*)","tierOneInsideScheduler"\);\(new ServerJS\(\)\).handleWithCustomApplyEach\(ScheduledApplyEach,(.*)\);\}\);\}\);<\/script>/))[3];
        document.getElementById("token").innerText = json;
    }
};

window.onload = onLoad;
