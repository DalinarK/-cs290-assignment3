/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value thats should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction()
{
	return null;
}
//end your code

var bar = 'not a function';
var barType = typeof bar;


/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
bar = function(a)
{
	for (var i = 0; i < a.length; i++)
	{
		if (typeof a[i] != "number")
		{
			return false
		}
	}

	for (var i = 0; i < a.length; i++)
	{
		a[i] = a[i] * 2;
	}

	return true;
}



//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here

function parseGit(logArray)
{

	var arr = new Array (logArray.length);

	for (var i = 0; i < logArray.length; i++)
	{
		//Defines the current string to be parsed.
		parentString = logArray[i];

		//filters out the hash.
		var hashFilter = /(\w*)\s/;
		var hashArray = hashFilter.exec(parentString);

		//filters out the date
		var dateFormattedFilter = /\w*\s\S*\s(\d*)\s(\w*)\s(\d*)\s(\S*)/
		var dateArray = dateFormattedFilter.exec(parentString);

		//puts it in a form that can be used by the date creation function.
		var dateFormatted = dateArray[2] + " " + dateArray[1] + ", " + dateArray[3] + " " + dateArray[4];
		var inputDate = new Date(dateFormatted);

		//filters out the commit messages
		var messageFilter = /"(.*)"/;
		var messageArray = messageFilter.exec(parentString);

		// adds the Gitlog to the array
		arr[i] = new GitLog(hashArray[1], inputDate, messageArray[1]);
	}
	
	return arr
}

//end your code
