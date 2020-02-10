import ava from 'ava';
import Duration from '../dist';

// ... others

ava('simple', (test): void => {
	const duration = new Duration('a second');

	test.is(duration.offset, 1000);
});
