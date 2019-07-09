$(document).ready(function(){

  let editor = new FroalaEditor('div#froala-editor', {
    height: 600,
    events: {
      'contentChanged': function () {
        // Do something here.
        // this is the editor instance.
        console.log(this);
        $.post("http://localhost/html/save2file.php", editor.html.get());
      }
    }
  });
});
