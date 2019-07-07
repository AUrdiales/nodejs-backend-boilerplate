const { exec } = require('child_process');
const { task, series, logger } = require('just-task');
const { tscTask, jestTask } = require('just-scripts');
const del = require('del');

task('clean', () => {
    return del('dist/*');
});

task('compile', () => {
    return tscTask({ ...require('./tsconfig.json'), sourceMap: false });
});

task('test', jestTask(require('./jest.config')));

task('default', series('clean', 'compile'));
