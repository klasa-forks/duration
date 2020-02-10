import ava from 'ava';
import Duration from '../dist';

// ... others

ava('simple duration', (test): void => {
	const duration = new Duration('a second');

	test.is(duration.offset, 1000);
});

ava('simple not duration', (test): void => {
	const duration = new Duration('a horse');

	test.is(duration.offset, 0);
});

ava('simple dateFrom duration', (test): void => {
	const duration = new Duration('a second');
	const date = new Date();

	test.deepEqual(duration.dateFrom(date), new Date(date.getTime() + 1000));
});

ava('simple date fromNow duration', (test): void => {
	const duration = new Duration('a second');
	const offset = duration.fromNow.valueOf() - Date.now();

	test.is(offset, 1000);
});

ava('toNow simple seconds', (test): void => {
	const duration = new Duration('a second');

	test.is(Duration.toNow(duration.fromNow, true), 'in seconds');
});

ava('toNow simple minute', (test): void => {
	const duration = new Duration('62s');

	test.is(Duration.toNow(duration.fromNow), 'a minute');
});

ava('toNow simple minutes', (test): void => {
	const duration = new Duration('2mins');

	test.is(Duration.toNow(duration.fromNow), '2 minutes');
});

ava('toNow simple hour', (test): void => {
	const duration = new Duration('61m');

	test.is(Duration.toNow(duration.fromNow), 'an hour');
});

ava('toNow simple hours', (test): void => {
	const duration = new Duration('2h');

	test.is(Duration.toNow(duration.fromNow), '2 hours');
});
