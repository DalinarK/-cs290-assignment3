/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {
  	brand: "Pepperidge Farm",
  	flavor: "Cheddar",
  	count: 2000,
  	type: "Goldfish"
  };
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(input)
{
  this.user = input;

  //array stores the messages recieved. Seperate var keeping track of size because I can't get array.length to work?
  this.callLogSent = [];
  this.callLogSent.length = 5;
  this.callLogSentSize = 0;
  this.sentLifetime = 0;

  //array stores the messages recieved. Seperate var keeping track of size because I can't get array.length to work?
  this.callLogReceived = [];
  this.callLogReceivedSize = 0;
  this.receivedLifetime = 0;

  this.totalSent = function ()
  {
    return this.sentLifetime;
  };

  this.totalReceived = function ()
  {
    return this.receivedLifetime;
  };

  this.totalSen

  this.getSentMessage = function (index)
  {
    return this.callLogSent[index];
    //document.write(this.callLogSentSize);
  };


  //adds messages to either the sent or received callLog arrays based on the parameter (1 or 0). 
  this.logMessage = function (inputString, direction)
  {

    message = inputString;
    
    if (direction === 1)
    {

      if (this.callLogReceivedSize >= 5)
       {
        //document.write("shifting items");
        this.callLogReceived.pop(); 
        this.callLogReceivedSize--;  
       }

       // the only method built into Array is push/pop the end of the array (stack). 
       // the implementation calls for a queue so by reversing, adding to array,
       // then reversing again, the array behaves like a queue when pop is called.
      this.callLogReceived.reverse();
      this.callLogReceived.push(inputString);
      this.callLogReceivedSize++;
      this.receivedLifetime++;
      this.callLogReceived.reverse();

    }
    else if (direction === 0)
    {
      if (this.callLogSentSize >= 5)
       {
        //document.write("shifting items");
        this.callLogSent.pop(); 
        this.callLogSentSize--;  
       }

      this.callLogSent.reverse();
      this.callLogSent.push(inputString);
      this.callLogSentSize++;
      this.sentLifetime++;
      this.callLogSent.reverse();
    }
    else 
    {
      direction = undefined ;
    }
  
  };
};
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function()
  {
    return this.callLogReceived[0];
  };

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here

var myLog = new MessageLog;
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);

//end your code


 function makeRequest(url) 
 {
    if (window.XMLHttpRequest) 
    { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) 
    { // IE
      try 
      {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } 
      catch (e) 
      {
        try 
        {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (e) {}
      }
    }

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }