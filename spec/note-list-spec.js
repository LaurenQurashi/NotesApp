
(function(exports) {
  function containsArray() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    var noteList = new NoteList(NoteDouble);
    assert.isTrue(Array.isArray(noteList.list));
  }

  containsArray();

  function storesNotes() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    var noteList = new NoteList(NoteDouble);
    var note = "Noote"
    noteList.store(note);
    assert.isTrue(noteList.list[0].text ==="Noote");
  }

  storesNotes();


  function showsOneNote() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    var noteList = new NoteList(NoteDouble);
    var note = "Noote"
    noteList.store(note);
    var output = noteList.show();
    assert.isTrue(output.length === 1);
    assert.isTrue(output[0].text ==="Noote");
  }

  showsOneNote();

  function showsTwoNotes() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    var noteList = new NoteList(NoteDouble);
    var note = "noote"
    var note2 = "noote2"
    noteList.store(note);
    noteList.store(note2);
    var twotest = noteList.show();
    assert.isTrue(twotest.length === 2);
    assert.isTrue(twotest[1].text === "noote2");
  }

  showsTwoNotes();

  function generatesIds() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    var noteList = new NoteList(NoteDouble);
    var note = "noote"
    var note2 = "noote2"
    noteList.store(note);
    noteList.store(note2);
    assert.isTrue(noteList.list[1].id === 1);
    assert.isTrue(noteList.list[0].id === 0);
  }

  generatesIds();


})(this);
