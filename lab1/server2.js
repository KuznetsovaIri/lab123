const http = require('http');
const fs = require('fs');
const url = require('url');
const pathutil = require("path");
const hostname = '127.0.0.1';
const port = 8080;

let users = null;

const server = http.createServer((rq, rs) => {

    let query = url.parse(rq.url, true);
    let data = query.query;
    let filename = query.pathname;
    let path = filename;
    //Проверка пути:
    path = pathutil.normalize(path);
    path = pathutil.basename(path);
    //Проверка расширения:
    if (pathutil.extname(path) !== '.html') {
        rs.writeHead(400);
        rs.end('we host only html files');
        return; //Ошибка
    }
    //Проверка пароля:
    if (filename === "/signin.html") {
        if (data.login === '' || data.pass === '') {
            rs.writeHead(400);
            rs.end('user or password is empty');
            return;
        }
        let login = data.login;
        //Поиск пользователя:
        try {
            users = fs.readFileSync('./users.txt', 'utf8');
            console.log(users);
        }
        catch (exp) {
            rs.writeHead(500);
            rs.end('internal server error');
            return;
        }

        let account_lines = users.split('\n');
        let is_user_exists = false;
        let password_to_check = undefined;

        //Поиск пользователя прошел успешно:
        for (let account_line of account_lines) {
            let account = account_line.split(';');
            let account_name = account[0];
            let account_pass = account[1];
            if (login === account_name) {
                is_user_exists = true;
                //Сохраняем пароль
                password_to_check = account_pass;
                break;
            }
        }

        //Поиск пользователя прошел неуспешно:
        if (is_user_exists === false) {
            rs.writeHead(403);
            rs.end('user does not exists');
            return;
        }

        //Проверка пароля найденного пользователя:
        if (data.pass === password_to_check)
        {
            //Пароль верный:
            rs.writeHead(200);
            rs.end('SUCCESS');
            return;
        } else { 
            //Пароль неверный
            rs.writeHead(403);
            rs.end('wrong password');
            return;
        }
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            rs.writeHead(404);
            rs.end();
            return;
        }

        rs.statusCode = 200;
        rs.setHeader('Content-Type', 'text/html');
        rs.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})
