process.stdin.setEncoding('utf-8');

/*process.stdin.on('readable', function() {
    
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === 'exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});*/

//console.log('node --version');


process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        
        switch (instruction) {        
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/lang':
                process.stdout.write(process.env.LANG);
                break;
            case '/version':
                process.stdout.write(process.versions.node);
                break;
            default: 
                process.stderr.write('Wrong instruction!');     
        }
    }
});