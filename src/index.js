const spin = require('io-spin')
const chalk = require('chalk')
const child_process = require('child_process')
console.log(`rm -rf node_modules: ${chalk.cyan(process.cwd())}`)
const spinner = spin('rm -rf node_modules: ' + process.cwd(), 'Box1')
spinner.start()
child_process.exec('find . -type d -name "node_modules" | xargs rm -rf', function (error, stdout, stderr) {
  if (error !== null) {
    console.log(`[rm -rf node_modules] error: ${chalk.error(error)}`)
  }
  spinner.stop()
  spinner.update('rm -rf node_modules: Deleted successfully...')
  console.log(`rm -rf node_modules: ${chalk.green('Deleted successfully...')}`)
});
