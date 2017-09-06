var fs = require('fs');

const NUMBER = 10;

var contents = fs.readFileSync('access.log', 'utf8');
var logs = contents.toString().split('\n');

function createSortedList(obj) {
    var list = [];
    for (var key in obj) list.push([key, obj[key]]);
    list.sort(function(a, b) {
        return b[1] - a[1];
    });
    return list;
}

ipsMap = {};
agentsMap = {};

for (var i = 0; i < logs.length - 1; i++) {
    var log = JSON.parse(logs[i]);
    var message = log['message'];

    var parts = message.split(' - ');
    var [ip, time, agent, method] = parts;

    if (ip in ipsMap) {
        ipsMap[ip] += 1;
    } else {
        ipsMap[ip] = 1;
    }

    if (agent in agentsMap) {
        agentsMap[agent] += 1;
    } else {
        agentsMap[agent] = 1;
    }
}

var ips = createSortedList(ipsMap);
var agents = createSortedList(agentsMap);

console.log('Top ' + NUMBER + ' IP Addresses');
console.log('--------------------------------');
console.log();
console.log('Number\tIP Address\t# Requests');

for (var i = 0; i < NUMBER; i++) {
    console.log((i + 1 ) + '\t' + ips[i][0] + '\t' + ips[i][1]);
}

console.log();
console.log('Top ' + NUMBER + ' User Agents');
console.log('--------------------------------');
console.log('Number\tUser Agent\t\# Requests');

for (var i = 0; i < NUMBER; i++) {
    if (agents[i][0].length > 50) {
        agents[i][0] = agents[i][0].slice(0, 50) + '...';
    }
    console.log((i + 1 ) + '\t' + agents[i][0] + '\t' + agents[i][1]);
}
