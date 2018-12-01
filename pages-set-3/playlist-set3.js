// select the parent element (secondCol) from the DOM and store it in a variable.and do the same for the btn element.
const bin = document.querySelector("#secondCol");
const btn = document.querySelector(".btn");
// double check console.log(bin);

// declear a new variable to hold our url to make our fetch function a bit cleaner.
const url = "https://lit-fortress-6467.herokuapp.com/object";

// make a fetch API call to the above url.
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let albumData = myJson.results;
    // double check console.log(albumData);

    // declear a new variable with a classname and append it to our parent countainer above to hold the data returned from the above fetch call.
    let albumBin = document.createElement("div");
    albumBin.className = "overflow";
    bin.appendChild(albumBin);
    // double check console.log(bin);

    // loop over the data obtain from the API call.
    for (let c = 0; c < albumData.length - 2; c++) {
      //double check console.log(albumData[c].title);

      // for each time this loop run, create a new div element and assign it to a variable with a class name cd. do the same for an image element and assign it to a variable as well.
      let audioDisk = document.createElement("div");
      audioDisk.className = "cd";
      let albumCover = document.createElement("img");
      albumCover.src = `
      /Users/clarence/Documents/galvanize/g108WarmUps/Assessment/playlist/images/${
        albumData[c].cover_art
      }`;

      // append the image element to the div you just created and then append the div to child of the parent div above.
      audioDisk.appendChild(albumCover);
      albumBin.appendChild(audioDisk);
      //couble check console.log(secondCol);
    }
  });

// now lets listen for a btn click.
btn.addEventListener("click", e => {
  console.log("8works!");
});
