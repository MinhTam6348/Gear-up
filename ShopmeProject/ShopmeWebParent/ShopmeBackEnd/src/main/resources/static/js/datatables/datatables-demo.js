// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "pagingType": "full_numbers",
    "language": {
      "paginate": {
        "first": "<i class='fa-solid fa-angles-left'></i>",
        "last":       "<i class='fa-solid fa-angles-right'></i>",
        "next":       "<i class='fa fa-angle-right'></i>",
        "previous":   "<i class='fa fa-angle-left'></i>"
      }
    }
  });
});
