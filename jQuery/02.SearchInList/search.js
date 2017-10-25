function search(){

    let pattern = $('#searchText').val();
    let matched = $('ul#towns').find(`li:contains(${pattern})`);
    matched.css('font-weight','bold');
    $('#result').text(matched.length + " matches found");

}