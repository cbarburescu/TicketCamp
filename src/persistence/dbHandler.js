'use strict';


let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ticketcamp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

let ticketSchema = mongoose.Schema({
    name: String,
    owner: String,
    issueNumber: Number
});

let database = mongoose.model("Database", ticketSchema);

// Database.create();

const project = new Database({
    name: "myProject",
    owner: "me",
    issueNumber: 20
});

project.save(function(err, project) {
    if(err) {
        console.log("Failed to save project " + project + "... error: " + err);
    }
    else {
        console.log("Successfully saved project " + project);
    }
});

export class Item {

    constructor(table, schema, fields) {
        this.table = table;
        this.schema = schema;
        this.fields = fields;
    }

    add(fieldType, fieldValue) {
        this.fields.push({fieldType, fieldValue});
        return this;
    }

    getTable() {
        return this.table;
    }

    getSchema() {
        return this.schema;
    }

    getFields() {
        return this.fields;
    }

    getValueOf(field) {
        return this.fields[field];
    }
}

// function collectionExists($collectionName)
// {
//     var $mongo = new Mongo();
//     var $collectionArr = $mongo => selectDB('yourrec') => listCollections();
//     if (in_array($collectionName, $collectionArr)) {
//         return true;
//     }
//     return false;
// }


/**
 * Database API containing CRUD operations and more
 * This should be used for interacting with the database
 */

const databaseName = ""; //todo set database name

/** CREATE equivalent
 * @param item The object to be added
 * @param table The table where to add to
 */
function add(item) {

    // todo
    // for (let key in item.getFields()) {
    //     alert("User " + item[key] + " is #" + key); // "User john is #234"
    // }
}

/** READ equivalent
 * @param item The object to be retrieved
 * @param table The table where to retrieve from
 */
function get(item, table) {
    // todo
}

/** UPDATE equivalent
 * @param item The object to be updated
 * @param field The field from item to be updated
 * @param newValue Value to be updated with
 * @param table The table where to update
 */
function update(item, field, newValue, table) {
    // todo
}

/** DELETE equivalent
 * @param item The object to be removed
 * @param table The table where to remove from
 */
function remove(item, table) {
    // todo
}

export { add, get, update, remove, Item};