/**
 * A class for publishing of events using a publisher subscriber model
 * @constructor
 */
Publisher = function() {
	this.subscribers = [];
};

/**
 * Subscribe to the publisher with a callback.
 * @param {Function} callback The callback that should be called.
 */
Publisher.prototype.subscribe = function(callback) {
	var index = -1;
	for (var i = 0, len = this.subscribers.length; i < len; i++) {
		if (this.subscribers[i] == callback) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		this.subscribers.push(callback);
	}
};

/**
 * Unsubscribe a callback from this publisher.
 * @param {Function} callback The callback to unsubscribe.
 */
Publisher.prototype.unsubscribe = function(callback) {
	var index = -1;
	for (var i = 0, len = this.subscribers.length; i < len; i++) {
		if (this.subscribers[i] === callback) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		throw 'Trying to unsubscribe a listener thats not listening.';
	}
	else {
		this.subscribers.splice(index, 1);
	}
};

/**
 * Publish an event to subscribers
 */
Publisher.prototype.publish = function() {
	for (var i = 0, len = this.subscribers.length; i < len; i++) {
		var callback = this.subscribers[i];
		callback.apply(null, arguments);
	}
};