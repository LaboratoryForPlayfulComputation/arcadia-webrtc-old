(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/arcadia-webrtc/",
    "workerjs": "/arcadia-webrtc/worker.js",
    "tdworkerjs": "/arcadia-webrtc/tdworker.js",
    "monacoworkerjs": "/arcadia-webrtc/monacoworker.js",
    "pxtVersion": "2.1.5",
    "pxtRelId": "",
    "pxtCdnUrl": "/arcadia-webrtc/",
    "commitCdnUrl": "/arcadia-webrtc/",
    "blobCdnUrl": "/arcadia-webrtc/",
    "cdnUrl": "/arcadia-webrtc/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "arcadia-webrtc",
    "simUrl": "/arcadia-webrtc/simulator.html",
    "partsUrl": "/arcadia-webrtc/siminstructions.html",
    "runUrl": "/arcadia-webrtc/run.html",
    "docsUrl": "/arcadia-webrtc/docs.html",
    "isStatic": true
};

    var scripts = [
        "/arcadia-webrtc/highlight.js/highlight.pack.js",
        "/arcadia-webrtc/bluebird.min.js",
        "/arcadia-webrtc/typescript.js",
        "/arcadia-webrtc/semantic.js",
        "/arcadia-webrtc/marked/marked.min.js",
        "/arcadia-webrtc/lzma/lzma_worker-min.js",
        "/arcadia-webrtc/blockly/blockly_compressed.js",
        "/arcadia-webrtc/blockly/blocks_compressed.js",
        "/arcadia-webrtc/blockly/msg/js/en.js",
        "/arcadia-webrtc/pxtlib.js",
        "/arcadia-webrtc/pxtcompiler.js",
        "/arcadia-webrtc/pxtblocks.js",
        "/arcadia-webrtc/pxteditor.js",
        "/arcadia-webrtc/pxtsim.js",
        "/arcadia-webrtc/target.js",
        "/arcadia-webrtc/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/arcadia-webrtc/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
