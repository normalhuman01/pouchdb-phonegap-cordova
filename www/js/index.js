
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        var display = document.getElementById('pouchdb-display');
        
        var db = new PouchDB('pouch');
        var idb = new PouchDB('idbpouch', {adapter: 'idb'});
        var websql = new PouchDB('websqlpouch', {adapter: 'websql'});
        
        display.innerHTML += (db.adapter ? '&#10003; PouchDB is working.<br/>' : '&#10007; PouchDB is not working.<br/>');
        display.innerHTML += (idb.adapter ? '&#10003; IndexedDB is supported.<br/>' : '&#10007; IndexedDB is not supported.<br/>');
        display.innerHTML += (websql.adapter ? '&#10003; WebSQL is supported.<br/>' : '&#10007; WebSQL is not supported.<br/>');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();