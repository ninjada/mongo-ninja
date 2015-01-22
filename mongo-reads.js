// collection document counts
// db.getCollectionNames().forEach(function(name) { if (name.match(/^Content_[0-9]+$/) === null){ return; } print(name); print(db.getCollection(name).count()) });

// db: stackla
// collections: [11,974]

/*
 query structure
 {
 'find':,
 'sort':
 },
 */


var testcollectionnames = ['Content_11', 'Content_974', 'Content_980'];
var testqueries = [
    [
        // latest filter pinned data only
        {
            'find': {
                '$and': [{'$or': [{'filters_pinned_on.filter_id': 75}, {'filters_pinned_on.filter_id': 0}]}, {vd: true}],
                is_pin: true,
                disabled: false
            },
            'sort': {'filters_pinned_on.position': 1}
        },

        // latest filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // twitter filter
        {
            'find': {'$and': [{source: 'twitter'}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // image filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: 'image'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // greatest filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {vd: true}, {disabled: false}]},
            'sort': {featured_until: -1, score: -1, source_created_at: -1}
        }


    ],
    [
        // tag filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {tags: '11233'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // latest filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // general filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {tags: '9915'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // instagram
        {
            'find': {'$and': [{source: 'instagram'}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {tags: '9918'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        },

        // facebook
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {tags: '9916'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        }
    ],

    [
        // pinned data filter
        {
            'find': {
                '$and': [{'$or': [{'filters_pinned_on.filter_id': 8175}, {'filters_pinned_on.filter_id': 0}]}, {vd: true}],
                is_pin: true,
                disabled: false
            },
            'sort': {'filters_pinned_on.position': 1}
        },

        // cannon filter
        {
            'find': {'$and': [{source: {'$in': ['twitter', 'facebook', 'instagram', 'flickr', 'pinterest', 'ecal', 'gplus', 'rss', 'stackla', 'stackla_internal', 'sta_feed', 'tumblr', 'youtube', 'weibo', 'hootsuite']}}, {media: {'$in': ['text', 'image', 'video', 'html']}}, {tags: '9954'}, {vd: true}, {disabled: false}]},
            'sort': {source_created_at: -1}
        }
    ]

];


var i = 1;
while (i < 10) {
    var rand1 = Math.round(Math.random() * 100) % 3; // 0, 1, 2
    var collectionName = testcollectionnames[rand1];
    var queryDataLength = testqueries[rand1].length;
    var rand2 = Math.round(Math.random() * 100) % queryDataLength;
    var queryData = testqueries[rand1][rand2];

    print(new Date() + ': ' + i);
    //printjson(queryData);
    db.getCollection(collectionName).find(queryData.find).sort(queryData.sort);


    i += 1;
}