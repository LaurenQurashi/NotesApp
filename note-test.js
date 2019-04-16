(function(exports) {
  function containsNoteContents() {
    var note = new Note("lil note");
    assert.isTrue(note.text === "lil note");
  };
  containsNoteContents();

  function returnsNoteContents() {
    var note = new Note("YAS");
    assert.isTrue(note.noteContent() === "YAS");
  }
  returnsNoteContents();


})(this);

(function(exports) {
  function containsArray() {
    var noteList = new NoteList;
    assert.isTrue(Array.isArray(noteList.list));
  }

  containsArray();

  function storesNotes() {
    var noteList = new NoteList;
    var note = new Note("ohyas");
    noteList.store(note);
    assert.isTrue(noteList.list.includes(note));
  }

  storesNotes();


  function showsOneNote() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    noteList.store(note);
    var output = noteList.show();
    assert.isTrue(output.length === 1);
    assert.isTrue(output[0] === note);
  }

  showsOneNote();

  function showsTwoNotes() {
    var noteList = new NoteList;
    var note = new Note('Yas');
    var note2 = new Note('Nope');
    noteList.store(note);
    noteList.store(note2);
    var twotest = noteList.show();
    assert.isTrue(twotest.length === 2);
    assert.isTrue(twotest[1] === note2);
  }

  showsTwoNotes();

})(this);

(function(exports) {

  function returnsHTMLString() {

    note = new Note("Notey");
    note2 = new Note("floatey");
    note3 = new Note("goatey");
    noteslist = new NoteList;
    noteslist.store(note);
    noteslist.store(note2);
    noteslist.store(note3);
    nVL = new NotesListView(noteslist);
    noteyMcNoteFace = nVL.htmlMaker(noteslist);
    assert.isTrue(noteyMcNoteFace === "<ul><li><div>Notey</div></li><li><div>floatey</div></li><li><div>goatey</div></li></ul>")
  }


  returnsHTMLString()

})(this);
//  this is our legit tests.
