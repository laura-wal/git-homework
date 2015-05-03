//Subway Intersect Assignment
// Task: Take the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip. 

// 1.Make a object fucntion for all stations, then make an array with all the stopes for one line first
//2.Write an alert to ask for the stop and start stations - hold this information (var)
//3. Add the index's toegther for the inputted journey - 'return' this information
//3. add in arrays for the other lines.
//3. count all the stops until US, then count all the stops after it? how to do this? loop? (maybe nest an array in an array). 
//.Also: looki into intersections, fucntion sheets on Mod.

// Object constuctor function, for all stataions.
function SubwayLines(stnNameArr) {
this.stnNameArr = stnNameArr;
}

function findIntersection(allLines){
    // loop over first of arrays
    // check if the item exists in both other arrays,
    var firstLine = allLines[0];
    for(var i = 0; i < firstLine.length; i++){
        if ( allLines[1].indexOf(firstLine[i]) >= 0 && allLines[2].indexOf(firstLine[i]) >= 0 ){
            return firstLine[i];
        }
    }
}

// Create key for lines and array of stops
var greyLine = new SubwayLines(['G8th', 'G6th', 'US', 'G3rd', 'G1st' ]);
var yellowLine = new SubwayLines(['YTS', 'Y34th', 'Y28th', 'Y23rd', "US", "Y8th"]);
var greenLine = new SubwayLines(['GNGC', 'GN33rd', 'GN28th', 'GN23rd', 'US', "GNAP"]);


var allLines = [greyLine.stnNameArr, yellowLine.stnNameArr, greenLine.stnNameArr];
var intersectionName = findIntersection(allLines); // "Union Square"

// greenLine // => { stNameArr: [ ... ] }
// greenLine.stNameArr.indexOf("US")

// An alert that asks for you position
var start = prompt('Where do you want to leave from?');

// Afind out where we are going
var end = prompt('Where do you want to go?');

// // tell it to start counting from the index
// var leaveIndex = greyLine.stnNameArr.indexOf(leave);

// // fwhere do we stop counting
// var landIndex = greyLine.stnNameArr.indexOf(land);


// if you are in the same line -> diff the indexes

// otherwise do ... (whatever is in else)

var distance;

for(var i = 0; i < allLines.length; i++){
    if ( allLines[i].indexOf(start) >= 0 && allLines[i].indexOf(end) >= 0 ){
        distance = Math.abs( allLines[i].indexOf(start) - allLines[i].indexOf(end) );
    }    
}

if(!distance){
    var startIndex, endIndex, startFromUS, endFromUS;
    for(var i = 0; i < allLines.length; i++){
        
        if(allLines[i].indexOf(start) >= 0){
            startIndex = allLines[i].indexOf(start);
            // (index of start) - (index of US)
            startFromUS = startIndex - allLines[i].indexOf(intersectionName); // indexOf("US"); 
            startFromUS = Math.abs(startFromUS); 
        }
        if(allLines[i].indexOf(end) >= 0){
            endIndex = allLines[i].indexOf(end);
            endFromUS = Math.abs( endIndex - allLines[i].indexOf(intersectionName) ); 
        }
    }
    distance = startFromUS + endFromUS;
}

console.log(distance);

