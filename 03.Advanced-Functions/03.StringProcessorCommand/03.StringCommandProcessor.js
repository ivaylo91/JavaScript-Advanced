let text = ' ';

function processor(command) {

    let commandTokens = command.split(' ');

    switch (commandTokens[0]) {
        case 'append':
            text += commandTokens[1];
            break;
        case 'removeStart':
            text = text.slice(Number(commandTokens[1]));
            break;
        case 'removeEnd':
            text = text.slice(0, text.length - Number(commandTokens[1]));
            break;
        case 'print':
            console.log(text);
            break;
    }
}

processor('append hello');
processor('print');
processor('append again');
processor('print');
processor('removeStart 3');
processor('print');
processor('removeEnd 2');
processor('print');