window.onload = function() {
  console.log(document.getElementById('app').innerHTML = nVL.htmlMaker(notelist))
};

// You'll need to instantiate your note list model.
var notelist = new NoteList;

// You'll need to add a note to it.
notelist.store(new Note("Noote"));
// You'll need to use your note list view to convert your note list model to HTML.
nVL = new NotesListView;
nVL.htmlMaker(notelist);

// You'll need to dynamically insert that HTML into the body of your index.html page.
