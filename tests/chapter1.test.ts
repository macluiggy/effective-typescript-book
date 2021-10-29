const fns = require('../chapter1')
test('getAuthors', () => {
	const authors = fns.getAuthors({
		runQuery(sql: string) {
		return [['Toni', 'Morrison'], ['Maya', 'Angelou'], ['coca', 'cola']];
	}
});
expect(authors).toEqual([
		{first: 'Toni', last: 'Morrison'},
		{first: 'Maya', last: 'Angelou'},
		{first: 'coca', last: 'cola'},
	]);
});