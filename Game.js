let player =
{
    meat: 10,
    factorPerTen: 2,
    swarm1cost: 10,
    swarm2cost: 100,
    swarm1costUp: 1000,
    swarm2costUp: 10000,
    swarm1count: 0,
    swarm2count: 0,
    swarm1boughtCount: 0,
    swarm2boughtCount: 0,
    swarm1factor: 1,
    swarm2factor: 1,
}
setInterval(gameUpdate, 50);
function gameUpdate()
{
    document.getElementById("meatAmount").textContent = player.meat;

    document.getElementById('swarm1').textContent = '1st swarm: Drone x' + player.swarm1factor;
    document.getElementById('swarm2').textContent = '2nd swarm: Queen x' + player.swarm2factor;
    
    document.getElementById("swarm1count").textContent = player.swarm1count + ' (' + player.swarm1boughtCount % 10 + ')';
    document.getElementById("swarm2count").textContent = player.swarm2count + ' (' + player.swarm2boughtCount % 10 + ')';

    document.getElementById('swarm1Max').textContent = 'Cost: ' + player.swarm1cost + " meat";
    document.getElementById('swarm2Max').textContent = 'Cost: ' + player.swarm2cost + " meat";
   
    document.getElementById('meatPerSec').textContent = player.swarm1count * player.swarm1factor;  
}