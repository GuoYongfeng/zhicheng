/**
 * webspeed 时间点收集
 */
(function(window) {
    'use strict';

    window.PPtiming = window.PPtiming || {

        source: '',
        path: '',

        ppgif: '/static/logger/pp.gif',

        has_report: false,

        nodes: {},

        getTimes: function() {
            var performance =  window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance || {};
            var timing = performance.timing;
            var times =  {};

            // Mark the system
            times.source = this.source;
            times.path = this.path;              
                
            if (timing) {

                // Total time from start to load
                times.total = timing.loadEventEnd - timing.navigationStart;

                // Total time of server
                times.totalServer = timing.responseEnd - timing.navigationStart;
                // Time spent during redirection
                times.serverRedirect = timing.redirectEnd - timing.redirectStart;
                // Time consumed prepaing the new page
                times.serverReady = timing.fetchStart - timing.navigationStart;
                // AppCache
                times.appCache = timing.domainLookupStart - timing.fetchStart;
                // DNS query time
                times.serverDNS = timing.domainLookupEnd - timing.domainLookupStart;
                // TCP connection time
                times.serverConnect = timing.connectEnd - timing.connectStart;
                // Time spent during the request
                times.serverResponse = timing.responseEnd - timing.requestStart;

                // Total time of dom
                times.totalDom = timing.loadEventEnd - timing.responseEnd;
                // Request to completion of the DOM loading
                times.domTreeInit = timing.domInteractive - timing.responseEnd;
                // Time spent constructing the DOM tree
                times.domReady = timing.domComplete - timing.domInteractive;
                // Time spend DOM content loaded
                times.domContentLoad = timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
                // Load event time
                times.resourceLoad = timing.loadEventEnd - timing.loadEventStart;

                // First paint
                if (this.nodes.fisrtPaintEnd) {
                    times.firstPaint = this.nodes.fisrtPaintEnd - timing.navigationStart;
                }
                
            }
            // Lib load time
            if ( this.nodes.fisrtPaintEnd && this.nodes.jsLibLoadEnd) {
                times.jsLibLoad = this.nodes.jsLibLoadEnd - this.nodes.fisrtPaintEnd;
            }

            return times;
        },
        logger: function() {
            var hostname = window.location.hostname;
            if (hostname.indexOf('ppzuche.com') > 0) {
                return 'http://res.ppzuche.com' + this.ppgif;
            } else {
                return this.ppgif;
            }
        },
        setSource: function(str){
            this.source = str;
        },
        setPath: function(str){
            this.path = str.replace( /^\w+:/, '');
        },
        point: function(key, millisecond) {
           this.nodes[key] = millisecond;
        },
        reportInConsole: function() {
            var table = {};
            var data = this.getTimes();
            Object.keys(data).forEach(function(k) {
                table[k] = {
                    ms: data[k],
                    s: +((data[k] / 1000).toFixed(2))
                };
            });
            console.table(table);
        },
        report : function() {
            if(this.has_report) return;

            var data = this.getTimes();
            var params = '';
            for (var k in data) {
                params += '&' + k + '=' + data[k];
            }
            var src = this.logger() + "?t="+ new Date().getTime() + params;
            var img = document.createElement('IMG');
            img.src = src;
            this.has_report = true;
        }
    };

})(this);
