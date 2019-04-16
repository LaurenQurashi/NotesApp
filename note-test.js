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
    console.log(note)
    noteList.store(note);
    console.log(noteList.show())
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
//  this is our legit tests.
