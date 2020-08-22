shownotes();

// If user adds a note, add it to the localStorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
})

// Function to show elements from localStorage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `  
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">Note Title ${index + 1}</h3>
          <p class="card-text"> ${element} </p>
          <button id = "${index}"onclick = "deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div> 
        </div>
        `
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `<h3>Nothing To Show!<br>
        Please add a New note</h3>`
    }
}

// Function to delete a note
function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})