(function(exports) {

  function returnsHTMLString() {
    function NoteDouble(text) { this.text = text };
    note1 = new NoteDouble("Notey")
    note2 = new NoteDouble("floatey")
    note3 = new NoteDouble("goatey")

    function NoteListDouble() {}
    noteslist = new NoteListDouble;
    NoteListDouble.prototype.list = [note1, note2, note3]

    nVL = new NotesListView(noteslist);

    noteyMcNoteFace = nVL.htmlMaker(noteslist);
    assert.isTrue(noteyMcNoteFace === "<ul><li><div>Notey</div></li><li><div>floatey</div></li><li><div>goatey</div></li></ul>")
  }

  returnsHTMLString()

  function checkForZero() {
    function NoteListDouble() {}
    noteslist = new NoteListDouble;
    NoteListDouble.prototype.list = []

    nVL = new NotesListView(noteslist);
    noteyMcNoteFace = nVL.htmlMaker(noteslist);
    assert.isTrue(noteyMcNoteFace === "Umm no notes hun")
  }


  checkForZero()

})(this);
