
(function(exports) {

  function NoteList(noteFunction = Note){
    this.list = [];
    this.noteFunction = noteFunction
  };

  NoteList.prototype.store = function(text){
    var id = this.list.length
    this.list.push(new this.noteFunction(text, id));
  };

  NoteList.prototype.show = function(){
    return this.list;
  };

  exports.NoteList= NoteList;
})(this);
