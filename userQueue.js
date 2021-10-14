module.exports = class UserQueue {
  constructor() {
    this.queue = [];
  }
  // invalid input log and return false
  // valid input on success log and return true
  // valid input on failure log and return false

  // add by uid, return position
  addByID(userId) {
    try {
      if (isNaN(userId)) {
        return false;
      } else {
        const position = this.queue.push(userId);
        console.log(`Added user ${userId} to position ${position}`);
        console.log(this.queue);
        return position;
      }
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // remove by uid
  removeByID(userId) {
    try {
      if (isNaN(userId)) {
        return false;
      } else {
        const index = this.queue.indexOf(userId);
        if (index !== -1) {
          this.queue.splice(index, 1);
        }
        
        console.log(`Removed user ${userId}`);
        console.log(this.queue);
        return true;
      }
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // remove by position
  removeByPosition(index) {
    try {
      if (isNaN(index)) {
        return false;
      } else {
        this.queue.splice(index, 1);
        console.log(`Removed user by position ${index}`);
        console.log(this.queue);

        return true;
      }
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // move from...to
  moveByPosition(index1, index2) {
    try {
      if (isNaN(index1) || isNaN(index2)) {
        return false;
      } else {
        this.queue.splice(index2, 0, this.queue.splice(index1, 1)[0]);
        
        console.log(`Moved user from ${index1} to ${index2}`);
        console.log(this.queue);
        return true;
      }
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // swap pos1 and pos2
  swapByPosition(index1, index2) {
    try {
      if (isNaN(index1) || isNaN(index2)) {
        return false;
      } else {
        [this.queue[index1], this.queue[index2]] = [
          this.queue[index2],
          this.queue[index1],
        ];
        
        console.log(`Swapped user from position ${index1} to ${index2}`);
        console.log(this.queue);
        return true;
      }
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // reverse
  reverse() {
    try {
      this.queue.reverse();
      
      console.log(`Reversed the queue`);
      console.log(this.queue);
      return true;
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }

  // print
  print() {
    try {
      const printable = [];
      this.queue.forEach((user) => {
        // get position
        const pos = this.queue.indexOf(user);
        // get value
        const val = user;
        // push new {}
        printable.push({ position: pos, userId: val });
      });
      console.log(printable);
      return printable;
    } catch (error) {
      console.log(`failure: ${error}`);
      return false;
    }
  }
};
// module.exports.UserQueue = new UserQueue()
