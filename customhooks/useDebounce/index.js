let currentClock;

function searchinBackend(){
    console.log("Searchin has begin...");
}

function DebounceSearch (){
    clearTimeout(currentClock);
    currentClock= setTimeout(searchinBackend, 30);
}

// got it...

// create that amazon functionality..