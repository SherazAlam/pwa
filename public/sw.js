let cacheData = "appV1";
this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/favicon.ico",
                "/manifest.json",
                "logo192.png",
                "/ws",
                "/"
            ])
        })
    )
})

this.addEventListener("fetch", (event)=>{
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
            .then((resp)=>{
                if (resp){
                    return resp
                }
            })
        )
    }
    
})