var testcollectionnames = ['Content_11', 'Content_974', 'Content_980'];
var queryTypes = ['upsert', 'incre'];
var testqueries = {
    'Content_11': {
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    },

    'Content_974': {
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    },

    'Content_980': {
        'upsert': { '$addToSet': { tags: { '$each': [ '9953' ] }, terms: { '$each': [ 'canon' ] } } },
        'incre': { $inc: { numVotes: 1 , numComments: 1, numUps: 1 } }
    }

}

var i = 1;

while (i <= 10) {
    var doc1 = db.getCollection(collectionName).count();
    var rand1 = Math.round(Math.random() * 100) % 3; // 0, 1, 2
    var rand2 = Math.round(Math.random() * 100) % 2;
    var rand3 = Math.round(Math.random() * doc1);

    var collectionName = testcollectionnames[rand1];
    var queryType = queryTypes[rand2];

    var q = testqueries[collectionName][queryType];
    var p = db.getCollection(collectionName).find().limit(1).skip(rand3);

    print(new Date() + ': ' + i);
    print(queryType);
    print(db.getCollection(collectionName).count());

    if (queryType === 'upsert') {
        db.getCollection(collectionName).update(p, q, false, true);
    } else (queryType === 'incre') {
        db.getCollection(collectionName).update(p, q, false, true);
    } 

    print(db.getCollection(collectionName).count());
    print(db.getCollection(collectionName));

    i += 1;
}
