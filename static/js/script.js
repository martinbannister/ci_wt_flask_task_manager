document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavOptions = {edge: "right"};
    let sidenavInstances = M.Sidenav.init(sidenav, sidenavOptions);
    let collapse = document.querySelectorAll('.collapsible');
    let collapseInstances = M.Collapsible.init(collapse);
    let tooltips = document.querySelectorAll('.tooltipped');
    let tooltipInstances = M.Tooltip.init(tooltips);
    let datepickers = document.querySelectorAll('.datepicker');
    let datePickOptions = {
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    }
    let datePickInstances = M.Datepicker.init(datepickers, datePickOptions);
  });
