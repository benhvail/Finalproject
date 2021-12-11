const classes = require('./classes.js');
import SQLInterface from './classes.js';

var interface = new SQLInterface("localhost", "user", "password", "database", "mysql");



console.log(interface.GetTable("Worker Info"));
console.log(interface.GetTable("Worker ID Info"));
console.log(interface.GetTable("Office Info"));

console.log(interface.GetFromTable("Worker Info", "Office", "2A"));
console.log(interface.GetFromTable("Worker ID Info", "Office", "2A"));
console.log(interface.GetFromTable("Office Info", "Office", "2A"));

console.log(interface.httpGet());
console.log(interface.httpGet());
console.log(interface.httpGet());

interface.httpPost("Worker ID Info", "WorkID", 006);