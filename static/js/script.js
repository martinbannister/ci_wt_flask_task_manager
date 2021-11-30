document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    let options = {edge: "right"};
    var instances = M.Sidenav.init(elems, options);
  });