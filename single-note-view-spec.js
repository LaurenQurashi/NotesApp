//  you can create a single note view object which includes a note.
// it has a function that returns the HTML for the note.

(function(exports) {

  function containsAssignedNote() {
    function NoteDouble() {}
    note = new NoteDouble()
    snvo = new SingleNoteView(note);


    assert.isTrue(snvo.note === note)
  }

  containsAssignedNote()


  function returnsHTMLString() {
    function NoteDouble(text) {this.text = text}
    note = new NoteDouble("hey")
    snvo = new SingleNoteView(note);
    assert.isTrue(snvo.toHTML() === "<div>hey</div>")
  }

  returnsHTMLString()

})(this);
