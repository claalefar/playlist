// select the parent element (secondCol) from the DOM and store it in a variable.and do the same for the btn element.
const tray = document.querySelector("#songTray");
const playlist = document.querySelector("#tracks");
const clear_btn = document.querySelector("#clear_btn");
const submit_btn = document.querySelector("#submit_btn");

// double check console.log(tray, playlist, clear_btn, submit_btn);

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
    songTray.appendChild(albumBin);
    // double check console.log(songTray);

    let songlist = document.createElement("ul");
    playlist.appendChild(songlist);
    // loop over the data obtain from the API call.
    for (let c = 0; c < albumData.length; c++) {
      //double check console.log(albumData[c].title);

      // for each time this loop run, create a new div element and assign it to a variable with a class name cd. do the same for an image element and assign it to a variable as well.

      //   let audioDisk = document.createElement("div");
      //   audioDisk.className = "cd";

      let albumCover = document.createElement("img");
      albumCover.src = `
        /Users/clarence/Documents/galvanize/g108WarmUps/Assessment/playlist/images/${
          albumData[c].cover_art
        }`;

      // append the image element to the div you just created and then append the div to child of the parent div above.

      //   audioDisk.appendChild(albumCover);
      let casing = document.createElement("div");
      let album_link = document.createElement("a");
      album_link.appendChild(casing);
      album_link.href = "#";
      casing.className = "case";
      casing.appendChild(albumCover);
      albumBin.appendChild(album_link);
      //couble check console.log(secondCol);

      album_link.addEventListener("click", e => {
        let songlist_item = document.createElement("li");
        songlist.appendChild(songlist_item);
        songlist_item.innerHTML = albumData[c].title;
        // console.log("8works, you just clicked an album!");

        const handleClick = e => {
          songlist.removeChild(songlist_item);
          clear_btn.removeEventListener("click", handleClick);
        };

        clear_btn.addEventListener("click", handleClick);
      });
    }
  });

///////////////////////////////////////////////////////////////////

let tittle = "title.value";
let body = "body.value";

document.getElementById("submit_btn").addEventListener("click", postData);
function postData(event) {
  console.log("8 works!");
  event.preventDefault();

  fetch("https://lit-fortress-6467.herokuapp.com/post", {
    method: "POST",
    headers: new Headers(),
    body: ["song 1", "song 2"]
  })
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(`${err}`));
}
