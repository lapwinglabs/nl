/**
 * Export `nl`
 */

module.exports = nl;

/**
 * Initialize `nl`
 */

function nl(str) {
  return str.replace(/\n/g, '\\n');
}
