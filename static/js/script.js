document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavOptions = {edge: "right"};
    let sidenavInstances = M.Sidenav.init(sidenav, sidenavOptions);
    let collapse = document.querySelectorAll('.collapsible');
    let collapseInstances = M.Collapsible.init(collapse);
  });
