function search(){

    let pattern = $('#searchText').val();
    $('ul#towns').find(`li:contains(${pattern})`).css('font-weight','bold');
    $('#towns').find(`li:not(:contains(${pattern}))`).css('font-weight','');
    $('#result').text(matched.length + " matches found");
}