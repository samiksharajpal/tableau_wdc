/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var Promise = require("pinkie-promise");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Print a help text.
 *
 * @param {stream.Writable} output - A writable stream to print.
 * @returns {Promise} Always a fulfilled promise.
 * @private
 */
module.exports = function printHelp(output) {
    output.write("\nUsage:\n    $ run-p [--help | -h | --version | -v]\n    $ run-p [OPTIONS] <tasks>\n\n    Run given npm-scripts in parallel.\n\n    <tasks> : A list of npm-scripts' names and Glob-like patterns.\n\nOptions:\n    -c, --continue-on-error  - Set the flag to continue executing other tasks\n                               even if a task threw an error. 'run-p' itself\n                               will exit with non-zero code if one or more tasks\n                               threw error(s).\n    -l, --print-label  - - - - Set the flag to print the task name as a prefix\n                               on each line of output. Tools in tasks may stop\n                               coloring their output if this option was given.\n    -n, --print-name   - - - - Set the flag to print the task name before\n                               running each task.\n    -r, --race   - - - - - - - Set the flag to kill all tasks when a task\n                               finished with zero.\n    -s, --silent   - - - - - - Set 'silent' to the log level of npm.\n\n    Shorthand aliases can be combined.\n    For example, '-clns' equals to '-c -l -n -s'.\n\nExamples:\n    $ run-p watch:**\n    $ run-p --print-label \"build:** -- --watch\"\n    $ run-p -sl \"build:** -- --watch\"\n    $ run-p start-server start-browser start-electron\n\nSee Also:\n    https://github.com/mysticatea/npm-run-all#readme\n");

    return Promise.resolve(null);
};