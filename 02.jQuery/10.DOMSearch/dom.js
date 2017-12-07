function domSearch(selector) {

    // Create DOM Elements:

    //Add Elements
    let addDiv = $('<div class="add-controls">');
    let labelAdd = $('<label>').text("Enter text:");
    let addInput = $('<input type="text">');
    let anchor = $('<a class="button" style="display: inline-block">Add</a>');

    labelAdd.append(addInput);
    addDiv.append(labelAdd);
    addDiv.append(anchor);
    $(selector).append(addDiv);

    //Search Items HTML:

    let searchDiv = $('<div class="search-controls">');
    let labelSearch = $('<label>').text("Search:");
    let inputSearch = $('<input type="text">');
    labelSearch.append(inputSearch);
    searchDiv.append(labelSearch);
    $(selector).append(searchDiv);

    //Result items HTML:

    let divResult = $('<div class="result-controls">');
    let ul = $('<ul class="items-list">');
    divResult.append(ul);
    $(selector).append(divResult);


    //Implemented add items to list:

    $(".add-controls > a.button").on('click', function () {

        let newItems = $('div>.add-controls>label>input').val();
        let li = $("<li class='list-item'>");
        let anchor = $('<a class="button">').text("X");
        let item = $('<strong>').text(newItems);
        li.append(anchor);
        li.append(item);
        $('.items-list').append(li);
    });

    // Implemented remove list-item:

    $(document).on('click', '.items-list>li>a.button', function () {
        $(this).parent().remove();
    });

    //Search on element by given string:

    $('.search-controls>label>input').keyup(function () {
        let value = $(this).val().toLowerCase();
        $('.result-controls ul li').hide().filter(function () {
            return $(this).html().substring(0, value.length).toLowerCase() === value;
        }).show();
    });
}