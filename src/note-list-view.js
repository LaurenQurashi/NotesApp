
(function(exports){

  function NotesListView() {}


  NotesListView.prototype.htmlMaker = function(notesList) {
    var nLen = notesList.list.length;
    if (nLen === 0) {return "Umm no notes hun"
    } else {
      noteyMcNoteFace = "<ul>"
      for (var i = 0; i < nLen; i++) {
        noteyMcNoteFace += "<li><div>" + notesList.list[i].text.substr(0,20) + "</div></li>";
      }
      noteyMcNoteFace += "</ul>";
    };
    return noteyMcNoteFace;
  };

  NotesListView.prototype.hrefCreator = function(notesList) {
    var nLen = notesList.list.length;
    var hrefs = []
    for (var i = 0; i < nLen; i++) {
      var noteyMcHREF = "<a href='#" + notesList.list[i].id + "'>" + notesList.list[i].text + "</a>";
      hrefs.push(noteyMcHREF + "<br>")
    }
    return hrefs.join('')
  };


  exports.NotesListView = NotesListView;
})(this);
