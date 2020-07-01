player =
{
    meat: new Decimal("10"),
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
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm2: 
    {
        cost: new Decimal("1e2"),
        costUp: new Decimal("1e4"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm3: 
    {
        cost: new Decimal("1e4"),
        costUp: new Decimal("1e5"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },
    swarm4: 
    {
        cost: new Decimal("1e6"),
        costUp: new Decimal("1e6"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm5: 
    {
        cost: new Decimal("1e9"),
        costUp: new Decimal("1e8"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm6: 
    {
        cost: new Decimal("1e13"),
        costUp: new Decimal("1e10"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm7: 
    {
        cost: new Decimal("1e18"),
        costUp: new Decimal("1e12"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        baseAmount: 0
    },    
    swarm8: 
    {
        cost: new Decimal("1e24"),
        costUp: new Decimal("1e15"),
        amount: new Decimal("0"),
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
    document.getElementById('swarm5').textContent = '5th swarm: Hive x' + shorten(player.swarm5.factor);
    document.getElementById('swarm6').textContent = '6th swarm: Hive Queen x' + shorten(player.swarm6.factor);
    document.getElementById('swarm7').textContent = '7th swarm: Hive Empress x' + shorten(player.swarm7.factor);
    document.getElementById('swarm8').textContent = '8th swarm: Neuroprophet x' + shorten(player.swarm8.factor);
  
    player.meatPerSec = player.swarm1.amount.mul(player.swarm1.factor);
    player.swarm1growth = player.swarm2.amount.mul(player.swarm2.factor);
    player.swarm2growth = player.swarm3.amount.mul(player.swarm3.factor);
    player.swarm3growth = player.swarm4.amount.mul(player.swarm4.factor);

    document.getElementById('meatPerSec').textContent = shorten(player.meatPerSec);  

    for(var a = 1; a < 9; a++)
    { 
        document.getElementById("swarm" + a + "count").textContent = shortenCount(player["swarm" + a].amount) + ' (' + player["swarm" + a].baseAmount % 10 + ')';
    
        document.getElementById("swarm" + a + "Max").textContent = 'Cost: ' + shortenCosts(player["swarm" + a].cost) + " meat";

        if (player.meat.gte(player["swarm" + a].cost)) 
        {
            document.getElementById("swarm" + a + "Max").className = 'storebtn';
        } 
        else 
        {
            document.getElementById("swarm" + a + "Max").className = 'unavailablebtn';
        }
    }
}