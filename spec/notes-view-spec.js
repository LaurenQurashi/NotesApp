(function(exports) {

  function returnsHTMLString() {
    function NoteDouble(text, id) { this.text = text, this.id = id };
    note1 = new NoteDouble("Notey", 0)
    note2 = new NoteDouble("floatey", 1)
    note3 = new NoteDouble("goatey", 2)

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

  function returnsOnly20() {
    function NoteDouble(text) { this.text = text };
    note1 = new NoteDouble("12345678901234567890!!!!!")

    function NoteListDouble() {}
    noteslist = new NoteListDouble;
    NoteListDouble.prototype.list = [note1]

    nVL = new NotesListView(noteslist);
    noteyMcNoteFace = nVL.htmlMaker(noteslist);
    assert.isTrue(noteyMcNoteFace === "<ul><li><div>12345678901234567890</div></li></ul>")
  }
  returnsOnly20()


  function returnsHREF() {

    function NoteDouble(text, id) { this.text = text, this.id = id };
    note1 = new NoteDouble("Lauren", 0)

    function NoteListDouble() {}
    noteslist = new NoteListDouble;
    NoteListDouble.prototype.list = [note1]

    nVL = new NotesListView(noteslist);
    noteyMcHREF = nVL.hrefCreator(noteslist);
    assert.isTrue(nVL.hrefCreator(noteslist) === "<a href='#0'>Lauren</a><br>")
  }
  returnsHREF()

})(this);
