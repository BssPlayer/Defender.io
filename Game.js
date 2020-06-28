let player =
{
    meat: 10,
    meatPerSec: 0,
    factorPerTen: 2,
    swarm1cost: 10,
    swarm2cost: 100,
    swarm3cost: 10000,
    swarm4cost: 1000000,
    swarm1costUp: 1000,
    swarm2costUp: 10000,
    swarm3costUp: 100000,
    swarm4costUp: 1000000,
    swarm1growth: 0,
    swarm2growth: 0,
    swarm3growth: 0,
    swarm4growth: 0,
    swarm1count: 0,
    swarm2count: 0,
    swarm3count: 0,
    swarm4count: 0,
    swarm1boughtCount: 0,
    swarm2boughtCount: 0,
    swarm3boughtCount: 0,
    swarm4boughtCount: 0,
    swarm1factor: 1,
    swarm2factor: 1,
    swarm3factor: 1,
    swarm4factor: 1,
}
setInterval(gameUpdate, 50);
function gameUpdate()
{
    document.getElementById("meatAmount").textContent = player.meat;

    document.getElementById('swarm1').textContent = '1st swarm: Drone x' + player.swarm1factor;
    document.getElementById('swarm2').textContent = '2nd swarm: Queen x' + player.swarm2factor;
    document.getElementById('swarm3').textContent = '3rd swarm: Nest x' + player.swarm3factor;
    document.getElementById('swarm4').textContent = '4th swarm: Greater Queen x' + player.swarm4factor;
    
    document.getElementById("swarm1count").textContent = player.swarm1count + ' (' + player.swarm1boughtCount % 10 + ')';
    document.getElementById("swarm2count").textContent = player.swarm2count + ' (' + player.swarm2boughtCount % 10 + ')';
    document.getElementById("swarm3count").textContent = player.swarm3count + ' (' + player.swarm3boughtCount % 10 + ')';
    document.getElementById("swarm4count").textContent = player.swarm4count + ' (' + player.swarm4boughtCount % 10 + ')';

    document.getElementById('swarm1Max').textContent = 'Cost: ' + player.swarm1cost + " meat";
    document.getElementById('swarm2Max').textContent = 'Cost: ' + player.swarm2cost + " meat";
    document.getElementById('swarm3Max').textContent = 'Cost: ' + player.swarm3cost + " meat";
    document.getElementById('swarm4Max').textContent = 'Cost: ' + player.swarm4cost + " meat";
   
    meatPerSec = player.swarm1count * player.swarm1factor;
    swarm1growth = player.swarm2count * player.swarm2factor;
    swarm2growth = player.swarm3count * player.swarm3factor;
    swarm3growth = player.swarm4count * player.swarm4factor;

    document.getElementById('meatPerSec').textContent = meatPerSec;  
}