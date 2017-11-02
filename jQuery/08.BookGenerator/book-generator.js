function createBook() {

    let bookId = 1;

    return function (selector, title, author, isbn) {

        let container = $(selector);
        let bookContainer = $('<div>');
        bookContainer.attr('id', `book${bookId}`);
        bookContainer.css('border', 'none');

        $(`<p class="title">${title}</p>`).appendTo(bookContainer);
        $(`<p class="author">${author}</p>`).appendTo(bookContainer);
        $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);

        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        selectBtn.on('click', () => bookContainer.css('border', '2px solid blue')).appendTo(bookContainer);
        deselectBtn.on('click', () => bookContainer.css('border', 'none')).appendTo(bookContainer);

        bookContainer.appendTo(container);
        bookId++;
    }
};