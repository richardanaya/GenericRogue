function findElement( dNode, id ) {

	var dResult = null;

	if ( dNode.getAttribute('id') == id )
		return dNode;

	for ( var i = 0; i < dNode.childNodes.length; i++ ) {
		if ( dNode.childNodes[i].nodeType == 1 ) {
			dResult = findElement( dNode.childNodes[i], id );
			if ( dResult != null )
				break;
		}
	}

	return dResult;
}

var bind = function(fn, selfObj, var_args) {
  return /** @type {!Function} */ (fn.call.apply(fn.bind, arguments));
};

if(!Function.prototype.bind) {
    bind = function(fn, selfObj, var_args) {
      if (!fn) {
        throw new Error();
      }

      if (arguments.length > 2) {
        var boundArgs = Array.prototype.slice.call(arguments, 2);
        return function() {
          // Prepend the bound arguments to the current arguments.
          var newArgs = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(newArgs, boundArgs);
          return fn.apply(selfObj, newArgs);
        };

      } else {
        return function() {
          return fn.apply(selfObj, arguments);
        };
      }
    };
};

inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
};