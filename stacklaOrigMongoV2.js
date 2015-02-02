var csDB = db.getSiblingDB("CS18168");
var testcollectionnames = ['Content_11', 'Content_974', 'Content_980'];
var queryTypes = ['insert', 'upsert', 'incre'];
var testqueries = {
    'Content_11': {
        'insert': { __v: 0, status: 'published', source: 'instagram', media: 'image', queued: false, disabled: false, disabled_reason: [], wordclashes: [], pending_review: false, reviewed: false, featured_until: 0, terms: [ '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}' ], term_meta: [ { term_id: 54, term: '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}', source: 'instagram', type: 'location' } ], tags: [], ups: [], downs: [], votes: [], replies: [], comments: [], numComments: 0, numDisabledComments: 0, numQueuedComments: 0, numReportedComments: 0, numUps: 0, numDowns: 0, numVotes: 0, anonymous: false, content_only: false, enable_ups: true, enable_downs: true, enable_comments: true, enable_votes: false, visible_on: [], vd: true, vm: true, vw: true, ve: true, competitions: [], is_winner: false, page_post: false, claimed: false, scheduled: false, is_pin: false, filters_pinned_on: [], pin_until: 0, enable_click_through: 0, process_image: false, source_created_at: 1421806570, message: '#gettingdrunk #oneyearago #simachev #moscow #somethingtocelebrate #brussels #unfortunatelyIremember', image: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10946412_1594390044118096_1050807985_n.jpg', imageWidth: 640, imageHeight: 640, image_s: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10946412_1594390044118096_1050807985_n.jpg', image_width_s: 306, image_height_s: 306, source_user_id: '569749314', user: 'cometad', name: 'Daria Chistyakova', avatar: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10488665_725780220811665_2129042640_a.jpg', avatar_processed: false, original_url: 'http://instagram.com/p/yGVDqCw27y/', type: 'fan', location: { id: 213972564, longitude: 37.614503693, name: 'Denis Simachev Shop&Bar', latitude: 55.762784152 }, stackla_sentiment_score: 0, updated_at: 1421882404, created_at: 1421882404, score: 0, loc: { coordinates: [ 37.614503693, 55.762784152 ], type: 'Point' } },
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    },
 
 
    'Content_974': {
        'insert': { __v: 0, status: 'published', source: 'instagram', media: 'image', queued: false, disabled: false, disabled_reason: [], wordclashes: [], pending_review: false, reviewed: false, featured_until: 0, terms: [ '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}' ], term_meta: [ { term_id: 54, term: '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}', source: 'instagram', type: 'location' } ], tags: [], ups: [], downs: [], votes: [], replies: [], comments: [], numComments: 0, numDisabledComments: 0, numQueuedComments: 0, numReportedComments: 0, numUps: 0, numDowns: 0, numVotes: 0, anonymous: false, content_only: false, enable_ups: true, enable_downs: true, enable_comments: true, enable_votes: false, visible_on: [], vd: true, vm: true, vw: true, ve: true, competitions: [], is_winner: false, page_post: false, claimed: false, scheduled: false, is_pin: false, filters_pinned_on: [], pin_until: 0, enable_click_through: 0, process_image: false, source_created_at: 1421806570, message: '#gettingdrunk #oneyearago #simachev #moscow #somethingtocelebrate #brussels #unfortunatelyIremember', image: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10946412_1594390044118096_1050807985_n.jpg', imageWidth: 640, imageHeight: 640, image_s: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10946412_1594390044118096_1050807985_n.jpg', image_width_s: 306, image_height_s: 306, source_user_id: '569749314', user: 'cometad', name: 'Daria Chistyakova', avatar: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10488665_725780220811665_2129042640_a.jpg', avatar_processed: false, original_url: 'http://instagram.com/p/yGVDqCw27y/', type: 'fan', location: { id: 213972564, longitude: 37.614503693, name: 'Denis Simachev Shop&Bar', latitude: 55.762784152 }, stackla_sentiment_score: 0, updated_at: 1421882404, created_at: 1421882404, score: 0, loc: { coordinates: [ 37.614503693, 55.762784152 ], type: 'Point' } },
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    },
 
    'Content_980': {
        'insert': { __v: 0, status: 'published', source: 'instagram', media: 'image', queued: false, disabled: false, disabled_reason: [], wordclashes: [], pending_review: false, reviewed: false, featured_until: 0, terms: [ '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}' ], term_meta: [ { term_id: 54, term: '{"geo_coords":[55.7516335,37.6187042],"geo_radius":2000}', source: 'instagram', type: 'location' } ], tags: [], ups: [], downs: [], votes: [], replies: [], comments: [], numComments: 0, numDisabledComments: 0, numQueuedComments: 0, numReportedComments: 0, numUps: 0, numDowns: 0, numVotes: 0, anonymous: false, content_only: false, enable_ups: true, enable_downs: true, enable_comments: true, enable_votes: false, visible_on: [], vd: true, vm: true, vw: true, ve: true, competitions: [], is_winner: false, page_post: false, claimed: false, scheduled: false, is_pin: false, filters_pinned_on: [], pin_until: 0, enable_click_through: 0, process_image: false, source_created_at: 1421806570, message: '#gettingdrunk #oneyearago #simachev #moscow #somethingtocelebrate #brussels #unfortunatelyIremember', image: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10946412_1594390044118096_1050807985_n.jpg', imageWidth: 640, imageHeight: 640, image_s: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10946412_1594390044118096_1050807985_n.jpg', image_width_s: 306, image_height_s: 306, source_user_id: '569749314', user: 'cometad', name: 'Daria Chistyakova', avatar: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10488665_725780220811665_2129042640_a.jpg', avatar_processed: false, original_url: 'http://instagram.com/p/yGVDqCw27y/', type: 'fan', location: { id: 213972564, longitude: 37.614503693, name: 'Denis Simachev Shop&Bar', latitude: 55.762784152 }, stackla_sentiment_score: 0, updated_at: 1421882404, created_at: 1421882404, score: 0, loc: { coordinates: [ 37.614503693, 55.762784152 ], type: 'Point' } },
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    }
 
}
 
var a = 1;
var i = 0;
var numDocs = 100000;

if (true) {
    print("Dropping Content_11");
    csDB.Content_11.drop();
}

if (true) {
    print("Adding indexes");
    csDB.getCollection("Content_11").ensureIndex({"ecal_id" : 1}, {"unique" : true, "sparse" : true});
    csDB.getCollection("Content_11").ensureIndex({"facebook_id" : 1}, {"unique" : true, "sparse" : true, "safe" : true});
    csDB.getCollection("Content_11").ensureIndex({
      "featured_until" : -1,
      "score" : -1,
      "source_created_at" : -1
    });
    csDB.getCollection("Content_11").ensureIndex({
      "featured_until" : -1,
      "score" : -1,
      "source_created_at" : -1,
      "disabled" : -1,
      "type" : 1,
      "source" : 1
    });
    csDB.getCollection("Content_11").ensureIndex({"flickr_id" : 1}, { "unique" : true, "sparse" : true, "safe" : true });
    csDB.getCollection("Content_11").ensureIndex({"gplus_id" : 1}, { "unique" : true, "sparse" : true, "safe" : null });
    csDB.getCollection("Content_11").ensureIndex({"instagram_id" : 1}, { "unique" : true, "sparse" : true, "safe" : true});

    csDB.getCollection("Content_11").ensureIndex({"loc" : "2dsphere"}, {"safe" : null });
    csDB.getCollection("Content_11").ensureIndex({"pinterest_id" : 1}, {"unique" : true, "sparse" : true, "safe" : true });
    csDB.getCollection("Content_11").ensureIndex({"rss_id" : 1}, { "unique" : true, "sparse" : true, "safe" : true });
    csDB.getCollection("Content_11").ensureIndex({"score" : -1, "source_created_at" : -1 });
    csDB.getCollection("Content_11").ensureIndex({
      "source_created_at" : -1,
      "disabled" : -1,
      "source_user_id" : 1,
      "source" : 1
    });
    csDB.getCollection("Content_11").ensureIndex({
      "source_created_at" : -1,
      "disabled" : -1,
      "type" : 1,
      "source" : 1
    });
    csDB.getCollection("Content_11").ensureIndex({"sta_feed_id" : 1}, {"unique" : true, "sparse" : true, "safe" : null});
    csDB.getCollection("Content_11").ensureIndex({"stackla_id" : 1}, {"unique" : true, "sparse" : true, "safe" : true});

    csDB.getCollection("Content_11").ensureIndex({"tumblr_id" : 1}, {"unique" : true, "sparse" : true, "safe" : null});
    csDB.getCollection("Content_11").ensureIndex({"twitter_id" : 1}, {"unique" : true, "sparse" : true, "safe" : true });
    csDB.getCollection("Content_11").ensureIndex({"weibo_id" : 1}, {"unique" : true, "sparse" : true, "safe" : null});
    csDB.getCollection("Content_11").ensureIndex({"youtube_id" : 1}, {"unique" : true, "sparse" : true, "safe" : true});
    csDB.getCollection("Content_11").ensureIndex({
      "vd" : 1,
      "disabled" : 1,
      "source_created_at" : -1
    });
    csDB.getCollection("Content_11").ensureIndex({
      "vm" : 1,
      "disabled" : 1,
      "source_created_at" : -1
    });
    csDB.getCollection("Content_11").ensureIndex({
      "vw" : 1,
      "disabled" : 1,
      "source_created_at" : -1
    });

    csDB.getCollection("Content_11").ensureIndex({
      "ve" : 1,
      "disabled" : 1,
      "source_created_at" : -1
    });
    csDB.getCollection("Content_11").ensureIndex({
      "tags" : 1
    });
    csDB.getCollection("Content_11").ensureIndex({"term_meta.term_id" : 1, "stackla_sentiment_score" : 1}, {"sparse" : true });
}

while (i <= 2) {
    var rand1 = Math.round(Math.random() * 100) % 3; // 0, 1, 2
    var rand2 = Math.round(Math.random() * 100) % 3;
 
    var collectionName = testcollectionnames[0];
    var queryType = queryTypes[i];
 
    var q = testqueries[collectionName][queryType];

    var lastResult = "";
    print(new Date() + ' i:' + i);
    print("before count:" + csDB.getCollection(collectionName).count());

    var start = new Date();
    if (queryType === 'insert') {
    while (a <= numDocs) {
        lastResult = csDB.getCollection(collectionName).insert(q);
        a += 1;
    }
    } else if (queryType === 'upsert') {
        lastResult = csDB.getCollection(collectionName).update({}, q, false, true);
    } else {
        lastResult = csDB.getCollection(collectionName).update({}, q, false, true);
    }
    var end = new Date();
    print("after count:" + csDB.getCollection(collectionName).count());
    print("collection:" + csDB.getCollection(collectionName));
    timeInSeconds = ((end - start)/1000);
    print("lastResult:" + lastResult);
    print("queryType:\"" + queryType + 
	  "\", time:\"" + timeInSeconds + 
	  "s\", rate:\"" + Math.floor(numDocs / timeInSeconds) + "/s\"");
    print("=============");
 
    i += 1;
}
