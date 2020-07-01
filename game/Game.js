player =
{
    meat: new Decimal("1e1"),
    meatPerSec: new Decimal("0"),
    factorPerTen: new Decimal("2"),
    swarm1growth: new Decimal("0"),
    swarm2growth: new Decimal("0"),
    swarm3growth: new Decimal("0"),
    swarm4growth: new Decimal("0"),
    swarm1: 
    {
        cost: new Decimal("1e1"),
        costUp: new Decimal("1e3"),
        amount: new Decimal("0"),
        bought: 0,
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm2: 
    {
        cost: new Decimal("1e2"),
        costUp: new Decimal("1e4"),
        amount: new Decimal("0"),
        bought: 0,
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm3: 
    {
        cost: new Decimal("1e4"),
        costUp: new Decimal("1e5"),
        amount: new Decimal("0"),
        bought: 0,
        factor: new Decimal("1"),
        baseAmount: 0
    },
    swarm4: 
    {
        cost: new Decimal("1e6"),
        costUp: new Decimal("1e6"),
        amount: new Decimal("0"),
        bought: 0,
        factor: new Decimal("1"),
        baseAmount: 0
    },
}

setInterval(gameUpdate, 50);
function gameUpdate()
{
    document.getElementById("meatAmount").textContent = shorten(player.meat);

    document.getElementById('swarm1').textContent = '1st swarm: Drone x' + shorten(player.swarm1.factor);
    document.getElementById('swarm2').textContent = '2nd swarm: Queen x' + shorten(player.swarm2.factor);
    document.getElementById('swarm3').textContent = '3rd swarm: Nest x' + shorten(player.swarm3.factor);
    document.getElementById('swarm4').textContent = '4th swarm: Greater Queen x' + shorten(player.swarm4.factor);
    
    document.getElementById("swarm1count").textContent = shortenCount(player.swarm1.amount) + ' (' + player.swarm1.baseAmount % 10 + ')';
    document.getElementById("swarm2count").textContent = shortenCount(player.swarm2.amount) + ' (' + player.swarm2.baseAmount % 10 + ')';
    document.getElementById("swarm3count").textContent = shortenCount(player.swarm3.amount) + ' (' + player.swarm3.baseAmount % 10 + ')';
    document.getElementById("swarm4count").textContent = shortenCount(player.swarm4.amount) + ' (' + player.swarm4.baseAmount % 10 + ')';

    document.getElementById('swarm1Max').textContent = 'Cost: ' + shortenCosts(player.swarm1.cost) + " meat";
    document.getElementById('swarm2Max').textContent = 'Cost: ' + shortenCosts(player.swarm2.cost) + " meat";
    document.getElementById('swarm3Max').textContent = 'Cost: ' + shortenCosts(player.swarm3.cost) + " meat";
    document.getElementById('swarm4Max').textContent = 'Cost: ' + shortenCosts(player.swarm4.cost) + " meat";
   
    player.meatPerSec = player.swarm1.amount.mul(player.swarm1.factor);
    player.swarm1growth = player.swarm2.amount.mul(player.swarm2.factor);
    player.swarm2growth = player.swarm3.amount.mul(player.swarm3.factor);
    player.swarm3growth = player.swarm4.amount.mul(player.swarm4.factor);

    document.getElementById('meatPerSec').textContent = shorten(player.meatPerSec);  
}
