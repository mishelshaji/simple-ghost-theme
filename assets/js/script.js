if (typeof geekContentAPIKey !== 'undefined' && typeof geekSearchURL !== 'undefined') {
    var ghostSearch = new GhostSearch({
        key: geekContentAPIKey,
        host: geekSearchURL,
        template:function(result) {
            let url = [location.protocol, '//', location.host].join('');
            return '<li><a href="' + url + '/' + result.slug + '">' + result.title + '</a></li>';  
        }
    });
}
