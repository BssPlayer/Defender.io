function set_save(value) 
{
	localStorage.setItem(btoa("swarm_game_save"), btoa(JSON.stringify(value, function(k, v) { return (v === Infinity) ? "Infinity" : v; })));
    console.log("saved");
}

function get_save() 
{
    try 
    {
        var dimensionSave = localStorage.getItem(btoa("swarm_game_save"))
        if (dimensionSave !== null) 
        {
            dimensionSave = JSON.parse(atob(dimensionSave, function(k, v) { return (v === Infinity) ? "Infinity" : v; }))
            player = dimensionSave;

            player.meat = new Decimal(player.meat);
            player.meatPerSec = new Decimal(player.meatPerSec);

            player.gathering.cost = new Decimal(player.gathering.cost),
            player.gathering.costUp = new Decimal(player.gathering.costUp),
            player.gathering.factor = new Decimal(player.gathering.factor),
            player.gathering.factorPerImprove = new Decimal(player.gathering.factorPerImprove),
            player.gathering.amount = player.gathering.amount; 

            player.factorPerTen = new Decimal(player.factorPerTen);

            player.swarm1.cost = new Decimal(player.swarm1.cost);
            player.swarm1.costUp = new Decimal(player.swarm1.costUp);
            player.swarm1.amount = new Decimal(player.swarm1.amount);
            player.swarm1.factor = new Decimal(player.swarm1.factor);
            player.swarm1.growth = new Decimal(player.swarm1.growth);
            player.swarm1.baseAmount = player.swarm1.baseAmount;   

            player.swarm2.cost = new Decimal(player.swarm2.cost);
            player.swarm2.costUp = new Decimal(player.swarm2.costUp);
            player.swarm2.amount = new Decimal(player.swarm2.amount);
            player.swarm2.factor = new Decimal(player.swarm2.factor);
            player.swarm2.growth = new Decimal(player.swarm2.growth);
            player.swarm2.baseAmount = player.swarm2.baseAmount; 

            player.swarm3.cost = new Decimal(player.swarm3.cost);
            player.swarm3.costUp = new Decimal(player.swarm3.costUp);
            player.swarm3.amount = new Decimal(player.swarm3.amount);
            player.swarm3.factor = new Decimal(player.swarm3.factor);
            player.swarm3.growth = new Decimal(player.swarm3.growth);
            player.swarm3.baseAmount = player.swarm3.baseAmount; 

            player.swarm4.cost = new Decimal(player.swarm4.cost);
            player.swarm4.costUp = new Decimal(player.swarm4.costUp);
            player.swarm4.amount = new Decimal(player.swarm4.amount);
            player.swarm4.factor = new Decimal(player.swarm4.factor);
            player.swarm4.growth = new Decimal(player.swarm4.growth);
            player.swarm4.baseAmount = player.swarm4.baseAmount; 

            player.swarm5.cost = new Decimal(player.swarm5.cost);
            player.swarm5.costUp = new Decimal(player.swarm5.costUp);
            player.swarm5.amount = new Decimal(player.swarm5.amount);
            player.swarm5.factor = new Decimal(player.swarm5.factor);
            player.swarm5.growth = new Decimal(player.swarm5.growth);
            player.swarm5.baseAmount = player.swarm5.baseAmount; 

            player.swarm6.cost = new Decimal(player.swarm6.cost);
            player.swarm6.costUp = new Decimal(player.swarm6.costUp);
            player.swarm6.amount = new Decimal(player.swarm6.amount);
            player.swarm6.factor = new Decimal(player.swarm6.factor);
            player.swarm6.growth = new Decimal(player.swarm6.growth);
            player.swarm6.baseAmount = player.swarm6.baseAmount; 
            
            player.swarm7.cost = new Decimal(player.swarm7.cost);
            player.swarm7.costUp = new Decimal(player.swarm7.costUp);
            player.swarm7.amount = new Decimal(player.swarm7.amount);
            player.swarm7.factor = new Decimal(player.swarm7.factor);
            player.swarm7.growth = new Decimal(player.swarm7.growth);
            player.swarm7.baseAmount = player.swarm7.baseAmount; 

            player.swarm8.cost = new Decimal(player.swarm8.cost);
            player.swarm8.costUp = new Decimal(player.swarm8.costUp);
            player.swarm8.amount = new Decimal(player.swarm8.amount);
            player.swarm8.factor = new Decimal(player.swarm8.factor);
            player.swarm8.growth = new Decimal(player.swarm8.growth);
            player.swarm8.baseAmount = player.swarm8.baseAmount; 

            player.boost = player.boost;
            player.boostReqSwarm = player.boostReqSwarm;
            player.boostCost = player.boostCost;
            player.boostCostUp = player.boostCostUp;
            player.boostFactor = new Decimal("2");
            player.boostFactorPerBoost = new Decimal("2");

            player.boostGathering = player.boostGathering;
            player.boostGatheringCost = player.boostGatheringCost;
            player.boostGatheringCostUp = player.boostGatheringCostUp;
            player.boostGatheringFactor = new Decimal(player.boostGatheringFactor);
            player.factorPerBoostGathering = new Decimal(player.factorPerBoostGathering);

            console.log("Loaded")
            initGame()
        }
    } 
    catch(e) { }
}

function reset_save()
{
    //localStorage.removeItem(btoa("swarm_game_save"));

    player.meat = init.meat;
    player.meatPerSec = init.meatPerSec;

    player.gathering.cost = init.gathering.cost;
    player.gathering.costUp = init.gathering.costUp;
    player.gathering.factor = init.gathering.factor;
    player.gathering.factorPerImprove = init.gathering.factorPerImprove;
    player.gathering.amount = init.gathering.amount;

    player.factorPerTen = init.factorPerTen;
    
    player.swarm1.cost = init.swarm1.cost;
    player.swarm1.costUp = init.swarm1.costUp;
    player.swarm1.amount = init.swarm1.amount;
    player.swarm1.factor = init.swarm1.factor;
    player.swarm1.growth = init.swarm1.growth;
    player.swarm1.baseAmount = init.swarm1.baseAmount;

    player.swarm2.cost = init.swarm2.cost;
    player.swarm2.costUp = init.swarm2.costUp;
    player.swarm2.amount = init.swarm2.amount;
    player.swarm2.factor = init.swarm2.factor;
    player.swarm2.growth = init.swarm2.growth;
    player.swarm2.baseAmount = init.swarm2.baseAmount;
    
    player.swarm3.cost = init.swarm3.cost;
    player.swarm3.costUp = init.swarm3.costUp;
    player.swarm3.amount = init.swarm3.amount;
    player.swarm3.factor = init.swarm3.factor;
    player.swarm3.growth = init.swarm3.growth;
    player.swarm3.baseAmount = init.swarm3.baseAmount;
    
    player.swarm4.cost = init.swarm4.cost;
    player.swarm4.costUp = init.swarm4.costUp;
    player.swarm4.amount = init.swarm4.amount;
    player.swarm4.factor = init.swarm4.factor;
    player.swarm4.growth = init.swarm4.growth;
    player.swarm4.baseAmount = init.swarm4.baseAmount;
    
    player.swarm5.cost = init.swarm5.cost;
    player.swarm5.costUp = init.swarm5.costUp;
    player.swarm5.amount = init.swarm5.amount;
    player.swarm5.factor = init.swarm5.factor;
    player.swarm5.growth = init.swarm5.growth;
    player.swarm5.baseAmount = init.swarm5.baseAmount;
    
    player.swarm6.cost = init.swarm6.cost;
    player.swarm6.costUp = init.swarm6.costUp;
    player.swarm6.amount = init.swarm6.amount;
    player.swarm6.factor = init.swarm6.factor;
    player.swarm6.growth = init.swarm6.growth;
    player.swarm6.baseAmount = init.swarm6.baseAmount;
    
    player.swarm7.cost = init.swarm7.cost;
    player.swarm7.costUp = init.swarm7.costUp;
    player.swarm7.amount = init.swarm7.amount;
    player.swarm7.factor = init.swarm7.factor;
    player.swarm7.growth = init.swarm7.growth;
    player.swarm7.baseAmount = init.swarm7.baseAmount;
    
    player.swarm8.cost = init.swarm8.cost;
    player.swarm8.costUp = init.swarm8.costUp;
    player.swarm8.amount = init.swarm8.amount;
    player.swarm8.factor = init.swarm8.factor;
    player.swarm8.growth = init.swarm8.growth;
    player.swarm8.baseAmount = init.swarm8.baseAmount;
    
    player.boost = init.player.boost;
    player.boostReqSwarm = init.boostReqSwarm;
    player.boostCost = init.boostCost;
    player.boostCostUp = init.boostCostUp;
    player.boostFactor = init.boostFactor;
    player.boostFactorPerBoost = init.boostFactor;

    player.boostGathering = init.player.boostGathering;
    player.boostGatheringCost = init.boostGatheringCost;
    player.boostGatheringCostUp = init.boostGatheringCostUp;
    player.boostGatheringFactor = init.boostGatheringFactor;
    player.factorPerBoostGathering = init.factorPerBoostGathering;

    document.getElementById("swarmRow5").style = "font-size: 16px; visibility: hidden";
    document.getElementById("swarmRow6").style = "font-size: 16px; visibility: hidden";
    document.getElementById("swarmRow7").style = "font-size: 16px; visibility: hidden";
    document.getElementById("swarmRow8").style = "font-size: 16px; visibility: hidden";
    initGame();

    console.log("Reseted");
}
var timer1; var timer2;
function initGame()
{
    if (timer1 != null)
    clearInterval(timer1);
    if (timer2 != null)
    clearInterval(timer2);

    timer1 = setInterval(gameUpdate, 50);
    timer2 = setInterval(swarmUpdate, 10);   
}