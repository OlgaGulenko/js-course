(function () {
	
	//task1
    
    var settimeout = window.setTimeout;
	
    window.setTimeout = function (delay, callback) {
		
        return settimeout.call(this, callback, delay);
    }
	
    console.log(settimeout);
		
	//task2
	
    var interval = window.setInterval;
	
    window.setInterval = function (callback, delay) {
		
        setTimeout(delay, callback).call;
		
        return setInterval (callback, delay);
    };
	
    console.log(interval);
	
	//task3
    function fncToDelay(parameter) { 
	
        console.log('Delayed run : ' + parameter);
		
    }
	
    function freeze (delay, fnc) {
		
        var timeout;
		
        return function () {
			
            var args = arguments;
			
            if(!timeout){
				
                timeout = setTimeout(delay, function () {
					
                    fnc.apply(this, args);
					
                    timeout = 0 ;
					
                });
				
            }

        }

    }

    var frozenFunc = freeze(1000, fncToDelay);

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

	//task4
			
    function createPipe(originalFnc, filter) { 
	
        return function (string) { 
		
            for (var n = 0; n < filter.length; n++) {
				
                string = filter[n](string); 
            } 
			
            return originalFnc(string); 
        };
		
    } 
	
    function originalFnc(string) { 
	
        var filter = string.split(' '), 
		
        result; 
		
        for (var n = 0; n < filter.length; n++) { 
		
            filter[n] = filter[n].charAt(0).toUpperCase() + filter[n].slice(1); 
			
        } 
		
        result = filter.join(' '); 
		 
        console.log(result);
		
    }
    function filterDigits(string) {
			
        var result = string.replace(/[0-9]/g, ''); // throws out any figures from a line
		
        return result; 
    } 
 
    function filterSpecial(string) { 
	
        var result = string.replace(/[!@#$%^&*()+=]/g, ''); // throws out special symbols from a line
		
        return result; 
    } 
 
    function filterWhiteSpaces(string) {
		
        var result = string.replace(/\s+/g, ' '); // replaces combinations from two and more gaps with one gap
		
        return result; 
		
    } 
 
    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]); 
	
    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'    

})();
	
	
		

	
  