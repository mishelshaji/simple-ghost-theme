if (typeof geekContentAPIKey !== 'undefined' && typeof geekSearchURL !== 'undefined') {
    var ghostSearch = new GhostSearch({
        key: geekContentAPIKey,
        host: geekSearchURL,
        template:function(result) {
            let url = [location.protocol, '//', location.host].join('');
            return '<li><a href="' + url + '/' + result.slug + '">' + result.title + '</a></li>';  
        },
        options: {
            keys: [
                'title',
                'plaintext'
            ],
            limit: 15,
            allowTypo: false
        },
        api: {
            resource: 'posts',
            parameters: { 
                fields: ['title', 'slug', 'plaintext'],
                formats: 'plaintext',
            },
        },
    });
}
