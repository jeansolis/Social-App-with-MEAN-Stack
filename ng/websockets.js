angular.module('app')
.run(function($rootScope, $timeout, $window){
  //Angular run component. Executes late in the initialization.
  (function connect(){
    //var url = 'ws://localhost:3000'
    var host
    if ($window.location.protocol === "https:") {
      host = "wss://" + $window.location.host
    } else {
      host = "ws://" + $window.location.host
    }
    var connection = new WebSocket(host)
    //var connection = new WebSocket(url)

    connection.onopen = function(){
      console.log('WebSocket connected')
    }

    connection.onmessage = function(e){
      console.log(e)
      var payload = JSON.parse(e.data)
      $rootScope.$broadcast('ws:' + payload.topic, payload.data)
    }

    connection.onclose = function(){
      console.log('WebSocket closed. Reconnecting...')
      $timeout(connect, 10*1000)
    }
  })()
})

/*angular.module('app')
.service('WebSocketSvc', function($rootScope, $timeout, $window){
var connection

function webSocketHost(){
if($window.location.protocol === 'https:'){
return "wss://" + window.location.host
} else {
return "ws://" + window.location.host
}
}

this.connect = function (){
//var url = 'ws://localhost:3000'
connection = new WebSocket(webSocketHost())

connection.onopen = function(){
console.log('WebSocket connected')
}

connection.onmessage = function(e){
console.log(e)
var payload = JSON.parse(e.data)
$rootScope.$broadcast('ws:' + payload.topic, payload.data)
}

connection.onclose = function(){
console.log('WebSocket closed. Reconnecting...')
$timeout(connect, 10*1000)
}
}
this.send = function(topic, data) {
var json = JSON.stringify({topic: topic, data: data})
connection.send(json)
}
}).run(function(WebSocketSvc){
WebSocketSvc.connect()
})
*/
