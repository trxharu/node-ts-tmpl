const gulp = require("gulp");
const { execSync } = require('child_process');

gulp.task('compiling', (cb) => {
  try {
    const output = execSync("tsc").toString();
  } catch (error) {
    console.log(error.stdout.toString());
  }
  cb();
});

gulp.task('running', (cb) => {
  try {
    const output = execSync("node ./build/index.js").toString();
    console.log(output);
  } catch (error) {
    console.log(error.stdout.toString());
  }
  cb();
});

gulp.task('typescript', () => {
  gulp.watch('./src/**/*.ts', gulp.series('compiling', 'running'));
});

gulp.task('default',
  gulp.series('compiling', 'running', 'typescript')
);