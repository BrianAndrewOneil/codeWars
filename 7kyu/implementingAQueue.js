var Queue = function() {
    this.queue=[]
  };
  
  Queue.prototype.enqueue = function(item) {
    this.push(item)
  };
  
  Queue.prototype.dequeue = function() {
    return this.shift()
  };
  
  Queue.prototype.size = function() {
    return this.length
  };

  