var SwarmNames = ["Drone", "Queen", "Nest", "Greater Queen", "Hive", "Hive Queen", "Hive Empress", "Neuroprophet"]
player =
{
    meat: new Decimal("1e1"),
    meatPerSec: new Decimal("0"),

    gathering: 
    {
        cost: new Decimal("1e3"),
        costUp: new Decimal("1e1"),
        factor: new Decimal("1"),
        factorPerImprove: new Decimal("2"),
        amount: 0,
    },

    factorPerTen: new Decimal("2"),
    swarm1: 
    {
        cost: new Decimal("1e1"),
        costUp: new Decimal("1e3"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm2: 
    {
        cost: new Decimal("1e2"),
        costUp: new Decimal("1e4"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm3: 
    {
        cost: new Decimal("1e4"),
        costUp: new Decimal("1e5"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },
    swarm4: 
    {
        cost: new Decimal("1e6"),
        costUp: new Decimal("1e6"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm5: 
    {
        cost: new Decimal("1e9"),
        costUp: new Decimal("1e8"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm6: 
    {
        cost: new Decimal("1e13"),
        costUp: new Decimal("1e10"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm7: 
    {
        cost: new Decimal("1e18"),
        costUp: new Decimal("1e12"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },    
    swarm8: 
    {
        cost: new Decimal("1e24"),
        costUp: new Decimal("1e15"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    },

    boost: 0,
    boostReqSwarm: 4,
    boostCost: 20,
    boostCostUp: 20,
    boostFactor: new Decimal("1"),
    boostFactorPerBoost: new Decimal("1.5"),

    boostGathering: 0,
    boostGatheringCost: 50,
    boostGatheringCostUp: 50,
    boostGatheringFactor: new Decimal("1"),
    factorPerBoostGathering: new Decimal("1.25"),
}
initGame();
function gameUpdate()
{
    document.getElementById("meatAmount").textContent = shorten(player.meat);
    
    player.boostGatheringFactor = player.factorPerBoostGathering.pow(Math.max(0, player.boostGathering));
    player.gathering.factorPerImprove = player.boostGatheringFactor.mul(2);
    player.gathering.factor = player.gathering.factorPerImprove.pow(Math.max(0, player.gathering.amount));

    player.boostFactor = player.boostFactorPerBoost.pow(Math.max(0, player.boost - 4));
    for(var a = 1; a < 9; a++)
    { 
        player["swarm" + a].factor = player.boostFactor.mul(Math.max(1, player.factorPerTen.pow(Math.floor(player["swarm" + a].baseAmount / 10))));
    }

    document.getElementById('gathering').textContent = '1st swarm: Drone x' + shorten(player.gathering.factor);

    document.getElementById('swarm1').textContent = '1st swarm: Drone x' + shorten(player.swarm1.factor);
    document.getElementById('swarm2').textContent = '2nd swarm: Queen x' + shorten(player.swarm2.factor);
    document.getElementById('swarm3').textContent = '3rd swarm: Nest x' + shorten(player.swarm3.factor);
    document.getElementById('swarm4').textContent = '4th swarm: Greater Queen x' + shorten(player.swarm4.factor);
    document.getElementById('swarm5').textContent = '5th swarm: Hive x' + shorten(player.swarm5.factor);
    document.getElementById('swarm6').textContent = '6th swarm: Hive Queen x' + shorten(player.swarm6.factor);
    document.getElementById('swarm7').textContent = '7th swarm: Hive Empress x' + shorten(player.swarm7.factor);
    document.getElementById('swarm8').textContent = '8th swarm: Neuroprophet x' + shorten(player.swarm8.factor);

    player.meatPerSec = player.swarm1.amount.mul(player.swarm1.factor).mul(player.gathering.factor);
    player.swarm1.growth = player.swarm2.amount.mul(player.swarm2.factor);
    player.swarm2.growth = player.swarm3.amount.mul(player.swarm3.factor);
    player.swarm3.growth = player.swarm4.amount.mul(player.swarm4.factor);
    player.swarm4.growth = player.swarm5.amount.mul(player.swarm5.factor);
    player.swarm5.growth = player.swarm6.amount.mul(player.swarm6.factor);
    player.swarm6.growth = player.swarm7.amount.mul(player.swarm7.factor);
    player.swarm7.growth = player.swarm8.amount.mul(player.swarm8.factor);

    document.getElementById('meatPerSec').textContent = shorten(player.meatPerSec);  

    document.getElementById("gatheringAmount").textContent = shortenCount(player.gathering.amount);
    document.getElementById("gatheringBuy").textContent = 'Cost: ' + shortenCosts(player.gathering.cost) + " meat";

    if (player.meat.gte(player.gathering.cost)) 
    {
        document.getElementById("gatheringBuy").className = 'storebtn';
    } 
    else 
    {
        document.getElementById("gatheringBuy").className = 'unavailablebtn';
    }

    for(var a = 1; a < 9; a++)
    { 
        document.getElementById("swarm" + a + "amount").textContent = shortenCount(player["swarm" + a].amount) + ' (' + player["swarm" + a].baseAmount % 10 + ')';
    
        document.getElementById("swarm" + a + "Buy").textContent = 'Cost: ' + shortenCosts(player["swarm" + a].cost) + " meat";

        if (player.meat.gte(player["swarm" + a].cost)) 
        {
            document.getElementById("swarm" + a + "Buy").className = 'storebtn';
        } 
        else 
        {
            document.getElementById("swarm" + a + "Buy").className = 'unavailablebtn';
        }
        
    }

    if (player.boost >= 1) document.getElementById("swarmRow5").style = "font-size: 16px; visibility: visible";
    else document.getElementById("swarmRow5").style = "font-size: 16px; visibility: hidden";
    if (player.boost >= 2) document.getElementById("swarmRow6").style = "font-size: 16px; visibility: visible";
    else document.getElementById("swarmRow6").style = "font-size: 16px; visibility: hidden";
    if (player.boost >= 3) document.getElementById("swarmRow7").style = "font-size: 16px; visibility: visible";
    else document.getElementById("swarmRow7").style = "font-size: 16px; visibility: hidden";
    if (player.boost >= 4) document.getElementById("swarmRow8").style = "font-size: 16px; visibility: visible";
    else document.getElementById("swarmRow8").style = "font-size: 16px; visibility: hidden";

    if (player["swarm" + player.boostReqSwarm].baseAmount >= player.boostCost) 
    {
        document.getElementById("boostSwarm").className = 'storebtn';
    } 
    else 
    {
        document.getElementById("boostSwarm").className = 'unavailablebtn';
    }
    if (player.boost < 4) document.getElementById("softReset1label").textContent = "Unlock next Swarm";
    if (player.boost >= 4) document.getElementById("softReset1label").textContent = "Swarm Boost";
    document.getElementById("softReset1label").innerHTML += '<br />' + 'Requires: ' + player.boostCost + ' ' + SwarmNames[player.boostReqSwarm - 1];

    if (player.swarm8.baseAmount >= player.boostGatheringCost) 
    {
        document.getElementById("boostGathering").className = 'storebtn';
    } 
    else 
    {
        document.getElementById("boostGathering").className = 'unavailablebtn';
    }
    document.getElementById("softReset2label").innerHTML = 'Boost Gathering<br /> Requires: ' + player.boostGatheringCost + ' Neuroprophet';
}