function puts(string) {console.log(string);};

function add(a,b) {
    return a + b;
}
/* these should eventually do ruby-style case dispatch, and should be replaced
 with calls to naked js primitives when possible. */
Number.prototype.rubyplus = function(a) { return a + this; }; 
Number.prototype.rubyminus = function(a) { return a - this; };
Object.prototype.rubytruthy = function () { return (this == null || (typeof(this) == 'boolean' && this == false)) ? false : this; };
