function search(){

    let pattern = $('#searchText').val();
    let matched = $('ul#towns').find(`li:contains(${pattern})`);
    matched.css('font-weight','bold');
    $('#towns').find(`li:not(:contains(${pattern}))`).css('font-weight','');
    $('#result').text(matched.length + " matches found");
}