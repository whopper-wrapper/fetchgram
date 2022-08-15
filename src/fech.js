async function getConfig() {
            var params = new URLSearchParams(window.location.search);
            if(params.has("pubkey") == true){
                var apikey = params.get("pubkey");
                document.getElementById("user").innerHTML = apikey;
                if(apikey.match(/m.com\//)){
                    var pubkey = `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(apikey)}`;
                    var res = await fetch(pubkey);
                    var data = await res.text();
                    var ProfilePage = JSON.parse(data.match(new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/))[1]).entry_data.ProfilePage[0];
                    document.getElementById("inptid").value = JSON.stringify({ProfilePage});
                    document.getElementById("inptpub").value = JSON.stringify({pubkey: apikey});
                    var fm = document.getElementById("fm1");
                    fm.submit();
                }
            }
        };

window.load()
