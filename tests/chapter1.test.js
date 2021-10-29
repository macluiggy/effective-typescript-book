var fns = require('../chapter1.js');
test('getAuthors', function () {
    var authors = fns.getAuthors({
        runQuery: function (sql) {
            return [['Toni', 'Morrison'], ['Maya', 'Angelou'], ['coca', 'cola']];
        }
    });
    expect(authors).toEqual([
        { first: 'Toni', last: 'Morrison' },
        { first: 'Maya', last: 'Angelou' },
        { first: 'coca', last: 'cola' },
    ]);
});
