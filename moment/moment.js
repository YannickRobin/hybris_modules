function fromNow(date) {
    moment = require('moment')
    return moment(date).fromNow()
};

exports.fromNow = fromNow;