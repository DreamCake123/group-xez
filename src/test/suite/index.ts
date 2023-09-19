import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';

export function run(): Promise<void> {
	// Create the mocha test
	const mocha = new Mocha({
		ui: 'tdd',
		color: true
	});

	const testsRoot = path.resolve(__dirname, '..');

	return new Promise((c, e) => {
<<<<<<< HEAD
		glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
			if (err) {
				return e(err);
			}

			// Add files to the test suite
			files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

=======
		const testFiles = new glob.Glob("**/**.test.js", { cwd: testsRoot });
		const testFileStream = testFiles.stream();

		testFileStream.on("data", (file) => {
			mocha.addFile(path.resolve(testsRoot, file));
		});
		testFileStream.on("error", (err) => {
			e(err);
		});
		testFileStream.on("end", () => {
>>>>>>> 20c2a1e (Start of Testing)
			try {
				// Run the mocha test
				mocha.run(failures => {
					if (failures > 0) {
						e(new Error(`${failures} tests failed.`));
					} else {
						c();
					}
				});
			} catch (err) {
				console.error(err);
				e(err);
			}
		});
	});
}
