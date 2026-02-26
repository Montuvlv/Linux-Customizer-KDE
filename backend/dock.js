const { spawn } = require('child_process');

/**
 * Launches an application on Linux
 * @param {string} command 
 */
function launch(command) {
    try {
        const child = spawn(command, {
            detached: true,
            stdio: 'ignore'
        });
        child.unref(); // Allow the parent (dock) to exit independently
    } catch (error) {
        console.error('App Launch Error:', error);
    }
}

module.exports = { launch };
