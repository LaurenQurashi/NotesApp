
(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.store = function(note = new Note(text)){
    this.list.push(note);
  };

  NoteList.prototype.show = function(){
    return this.list;
  };

  exports.NoteList= NoteList;
})(this);
