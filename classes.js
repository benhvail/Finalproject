export default class SQLInterface {
    constructor(host, user, pass, db, sqlName) {
        var mysql = require(sqlName);

        var connection = mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: db
        });

        connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        });
    }


    GetTable (tableName) {
        var queryStr = "SELECT * FROM " + tableName;

        connection.connect(function(err) {
            if (err) throw err;

            connection.query(queryStr, function (err, result, fields) {
                if (err) throw err;

                return(result);
            });
        });
    }

    GetFromTable (tableName, column, value) {
        var queryStr = "SELECT * FROM " + tableName + " WHERE " + column + " = " + value;

        connection.connect(function(err) {
            if (err) throw err;

            connection.query(queryStr, function (err, result, fields) {
                if (err) throw err;

                return(result);
            });
        });
    }

    httpGet()
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET",  window.location.href, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    httpPost(table, column, value)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.send( "POST", table + column + value );
    }
}



module.exports = { httpGet, SQLInterface };