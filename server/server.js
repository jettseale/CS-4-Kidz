const express = require( 'express' );
const bodyparser = require( 'body-parser' );
const exphbrs = require( 'express-handlebars' );
const mysql = require( 'mysql');

const portOptions = {
	hostname: 'localhost',
	port: process.env.port || 3330
};

var app = express();
