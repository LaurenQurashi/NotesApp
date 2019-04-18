window.onload = function() {
  document.getElementById('app').innerHTML = nVL.htmlMaker(notelist)
  document.getElementById('app').innerHTML = nVL.hrefCreator(notelist)
};

// You'll need to instantiate your note list model.
var notelist = new NoteList;

// You'll need to add a note to it.
notelist.store("Nerhh");
notelist.store("Nerhh");
notelist.store("Nerhh");
notelist.store("Nerhh");
notelist.store("Beefy!");
notelist.store("Beefy!");
// You'll need to use your note list view to convert your note list model to HTML.
nVL = new NotesListView;
nVL.htmlMaker(notelist);

// You'll need to dynamically insert that HTML into the body of your index.html page.
