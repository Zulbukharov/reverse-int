module.exports = reverse = n => n.toString().replace(/-/g, '').split('').reverse().join('');