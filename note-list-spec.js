
(function(exports) {
  function containsArray() {
    var noteList = new NoteList;
    assert.isTrue(Array.isArray(noteList.list));
  }

  containsArray();

  function storesNotes() {
    var noteList = new NoteList;
    var note = 10
    noteList.store(note);
    assert.isTrue(noteList.list.includes(10));
  }

  storesNotes();


  function showsOneNote() {
    var noteList = new NoteList;
    var note = 10
    noteList.store(note);
    var output = noteList.show();
    assert.isTrue(output.length === 1);
    assert.isTrue(output[0] === 10);
  }

  showsOneNote();

  function showsTwoNotes() {
    var noteList = new NoteList;
    var note = 5
    var note2 = 10
    noteList.store(note);
    noteList.store(note2);
    var twotest = noteList.show();
    assert.isTrue(twotest.length === 2);
    assert.isTrue(twotest[1] === 10);
  }

  showsTwoNotes();

})(this);
