
(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.store = function(note){
    this.list.push(note);
  };

  NoteList.prototype.show = function(){
    return this.list;
    // var iterator = this.list.values();
    // for (let note of this.list){
    //   return note.text

  };

  exports.NoteList= NoteList;
})(this);
