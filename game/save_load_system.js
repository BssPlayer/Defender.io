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
            //player = dimensionSave;
            console.log(dimensionSave);
            if(player.meat === undefined) player.meat = init.meat; else player.meat = new Decimal(dimensionSave.meat);
            if(player.meatPerSec === undefined) player.meat = init.meatPerSec; else player.meatPerSec = new Decimal(dimensionSave.meatPerSec);

            if(player.gathering.cost === undefined) player.gathering.cost = init.gathering.cost; else player.gathering.cost = new Decimal(dimensionSave.gathering.cost);
            if(player.gathering.costUp === undefined) player.gathering.costUp = init.gathering.costUp; else player.gathering.costUp = new Decimal(dimensionSave.gathering.costUp);
            if(player.gathering.factor === undefined) player.gathering.factor = init.gathering.factor; else player.gathering.factor = new Decimal(dimensionSave.gathering.factor);
            if(player.gathering.factorPerImprove === undefined) player.gathering.factorPerImprove = init.gathering.factorPerImprove; else player.gathering.factorPerImprove = new Decimal(dimensionSave.gathering.factorPerImprove);
            if(player.gathering.amount === undefined) player.gathering.amount = init.gathering.amount; else player.gathering.amount = dimensionSave.gathering.amount;

            if(player.factorPerTen === undefined) player.factorPerTen = init.factorPerTen; else player.factorPerTen = new Decimal(dimensionSave.factorPerTen);

            if(player.swarm1.cost === undefined) player.swarm1.cost = init.swarm1.cost; else player.swarm1.cost = new Decimal(dimensionSave.swarm1.cost);
            if(player.swarm1.costUp === undefined) player.swarm1.costUp = init.swarm1.costUp; else player.swarm1.costUp = new Decimal(dimensionSave.swarm1.costUp);
            if(player.swarm1.amount === undefined) player.swarm1.amount = init.swarm1.amount; else player.swarm1.amount = new Decimal(dimensionSave.swarm1.amount);
            if(player.swarm1.factor === undefined) player.swarm1.factor = init.swarm1.factor; else player.swarm1.factor = new Decimal(dimensionSave.swarm1.factor);
            if(player.swarm1.growth === undefined) player.swarm1.growth = init.swarm1.growth; else player.swarm1.growtheat = new Decimal(dimensionSave.swarm1.growth);
            if(player.swarm1.baseAmount === undefined) player.swarm1.baseAmount = init.swarm1.baseAmount; else player.swarm1.baseAmount = dimensionSave.swarm1.baseAmount;
            
            if(player.swarm2.cost === undefined) player.swarm2.cost = init.swarm2.cost; else player.swarm2.cost = new Decimal(dimensionSave.swarm2.cost);
            if(player.swarm2.costUp === undefined) player.swarm2.costUp = init.swarm2.costUp; else player.swarm2.costUp = new Decimal(dimensionSave.swarm2.costUp);
            if(player.swarm2.amount === undefined) player.swarm2.amount = init.swarm2.amount; else player.swarm2.amount = new Decimal(dimensionSave.swarm2.amount);
            if(player.swarm2.factor === undefined) player.swarm2.factor = init.swarm2.factor; else player.swarm2.factor = new Decimal(dimensionSave.swarm2.factor);
            if(player.swarm2.growth === undefined) player.swarm2.growth = init.swarm2.growth; else player.swarm2.growtheat = new Decimal(dimensionSave.swarm2.growth);
            if(player.swarm2.baseAmount === undefined) player.swarm2.baseAmount = init.swarm2.baseAmount; else player.swarm2.baseAmount = dimensionSave.swarm2.baseAmount;
            
            if(player.swarm3.cost === undefined) player.swarm3.cost = init.swarm3.cost; else player.swarm3.cost = new Decimal(dimensionSave.swarm3.cost);
            if(player.swarm3.costUp === undefined) player.swarm3.costUp = init.swarm3.costUp; else player.swarm3.costUp = new Decimal(dimensionSave.swarm3.costUp);
            if(player.swarm3.amount === undefined) player.swarm3.amount = init.swarm3.amount; else player.swarm3.amount = new Decimal(dimensionSave.swarm3.amount);
            if(player.swarm3.factor === undefined) player.swarm3.factor = init.swarm3.factor; else player.swarm3.factor = new Decimal(dimensionSave.swarm3.factor);
            if(player.swarm3.growth === undefined) player.swarm3.growth = init.swarm3.growth; else player.swarm3.growtheat = new Decimal(dimensionSave.swarm3.growth);
            if(player.swarm3.baseAmount === undefined) player.swarm3.baseAmount = init.swarm3.baseAmount; else player.swarm3.baseAmount = dimensionSave.swarm3.baseAmount;
            
            if(player.swarm4.cost === undefined) player.swarm4.cost = init.swarm4.cost; else player.swarm4.cost = new Decimal(dimensionSave.swarm4.cost);
            if(player.swarm4.costUp === undefined) player.swarm4.costUp = init.swarm4.costUp; else player.swarm4.costUp = new Decimal(dimensionSave.swarm4.costUp);
            if(player.swarm4.amount === undefined) player.swarm4.amount = init.swarm4.amount; else player.swarm4.amount = new Decimal(dimensionSave.swarm4.amount);
            if(player.swarm4.factor === undefined) player.swarm4.factor = init.swarm4.factor; else player.swarm4.factor = new Decimal(dimensionSave.swarm4.factor);
            if(player.swarm4.growth === undefined) player.swarm4.growth = init.swarm4.growth; else player.swarm4.growtheat = new Decimal(dimensionSave.swarm4.growth);
            if(player.swarm4.baseAmount === undefined) player.swarm4.baseAmount = init.swarm4.baseAmount; else player.swarm4.baseAmount = dimensionSave.swarm4.baseAmount;
            
            if(player.swarm5.cost === undefined) player.swarm5.cost = init.swarm5.cost; else player.swarm5.cost = new Decimal(dimensionSave.swarm5.cost);
            if(player.swarm5.costUp === undefined) player.swarm5.costUp = init.swarm5.costUp; else player.swarm5.costUp = new Decimal(dimensionSave.swarm5.costUp);
            if(player.swarm5.amount === undefined) player.swarm5.amount = init.swarm5.amount; else player.swarm5.amount = new Decimal(dimensionSave.swarm5.amount);
            if(player.swarm5.factor === undefined) player.swarm5.factor = init.swarm5.factor; else player.swarm5.factor = new Decimal(dimensionSave.swarm5.factor);
            if(player.swarm5.growth === undefined) player.swarm5.growth = init.swarm5.growth; else player.swarm5.growtheat = new Decimal(dimensionSave.swarm5.growth);
            if(player.swarm5.baseAmount === undefined) player.swarm5.baseAmount = init.swarm5.baseAmount; else player.swarm5.baseAmount = dimensionSave.swarm5.baseAmount;
            
            if(player.swarm6.cost === undefined) player.swarm6.cost = init.swarm6.cost; else player.swarm6.cost = new Decimal(dimensionSave.swarm6.cost);
            if(player.swarm6.costUp === undefined) player.swarm6.costUp = init.swarm6.costUp; else player.swarm6.costUp = new Decimal(dimensionSave.swarm6.costUp);
            if(player.swarm6.amount === undefined) player.swarm6.amount = init.swarm6.amount; else player.swarm6.amount = new Decimal(dimensionSave.swarm6.amount);
            if(player.swarm6.factor === undefined) player.swarm6.factor = init.swarm6.factor; else player.swarm6.factor = new Decimal(dimensionSave.swarm6.factor);
            if(player.swarm6.growth === undefined) player.swarm6.growth = init.swarm6.growth; else player.swarm6.growtheat = new Decimal(dimensionSave.swarm6.growth);
            if(player.swarm6.baseAmount === undefined) player.swarm6.baseAmount = init.swarm6.baseAmount; else player.swarm6.baseAmount = dimensionSave.swarm6.baseAmount;
            
            if(player.swarm7.cost === undefined) player.swarm7.cost = init.swarm7.cost; else player.swarm7.cost = new Decimal(dimensionSave.swarm7.cost);
            if(player.swarm7.costUp === undefined) player.swarm7.costUp = init.swarm7.costUp; else player.swarm7.costUp = new Decimal(dimensionSave.swarm7.costUp);
            if(player.swarm7.amount === undefined) player.swarm7.amount = init.swarm7.amount; else player.swarm7.amount = new Decimal(dimensionSave.swarm7.amount);
            if(player.swarm7.factor === undefined) player.swarm7.factor = init.swarm7.factor; else player.swarm7.factor = new Decimal(dimensionSave.swarm7.factor);
            if(player.swarm7.growth === undefined) player.swarm7.growth = init.swarm7.growth; else player.swarm7.growtheat = new Decimal(dimensionSave.swarm7.growth);
            if(player.swarm7.baseAmount === undefined) player.swarm7.baseAmount = init.swarm7.baseAmount; else player.swarm7.baseAmount = dimensionSave.swarm7.baseAmount;
            
            if(player.swarm8.cost === undefined) player.swarm8.cost = init.swarm8.cost; else player.swarm8.cost = new Decimal(dimensionSave.swarm8.cost);
            if(player.swarm8.costUp === undefined) player.swarm8.costUp = init.swarm8.costUp; else player.swarm8.costUp = new Decimal(dimensionSave.swarm8.costUp);
            if(player.swarm8.amount === undefined) player.swarm8.amount = init.swarm8.amount; else player.swarm8.amount = new Decimal(dimensionSave.swarm8.amount);
            if(player.swarm8.factor === undefined) player.swarm8.factor = init.swarm8.factor; else player.swarm8.factor = new Decimal(dimensionSave.swarm8.factor);
            if(player.swarm8.growth === undefined) player.swarm8.growth = init.swarm8.growth; else player.swarm8.growtheat = new Decimal(dimensionSave.swarm8.growth);
            if(player.swarm8.baseAmount === undefined) player.swarm8.baseAmount = init.swarm8.baseAmount; else player.swarm8.baseAmount = dimensionSave.swarm8.baseAmount;
            
            if(player.boost === undefined) player.boost = init.boost; else player.boost = dimensionSave.boost;
            if(player.boostReqSwarm === undefined) player.boostReqSwarm = init.boostReqSwarm; else player.boostReqSwarm = dimensionSave.boostReqSwarm;
            if(player.boostCost === undefined) player.boostCost = init.boostCost; else player.boostCost = dimensionSave.boostCost;
            if(player.boostCostUp === undefined) player.boostCostUp = init.boostCostUp; else player.boostCostUp = dimensionSave.boostCostUp;
            if(player.boostFactor === undefined) player.boostFactor = init.boostFactor; else player.boostFactor = new Decimal(dimensionSave.boostFactor);
            if(player.boostFactorPerBoost === undefined) player.boostFactorPerBoost = init.boostFactorPerBoost; else player.boostFactorPerBoost = new Decimal(dimensionSave.boostFactorPerBoost);

            if(player.boostGathering === undefined) player.boostGathering = init.boostGathering; else player.boostGathering = dimensionSave.boostGathering;
            if(player.boostGatheringCost === undefined) player.boostGatheringCost = init.boostGatheringCost; else player.boostGatheringCost = dimensionSave.boostGatheringCost;
            if(player.boostGatheringCostUp === undefined) player.boostGatheringCostUp = init.boostGatheringCostUp; else player.boostGatheringCostUp = dimensionSave.boostGatheringCostUp;
            if(player.boostGatheringFactor === undefined) player.boostGatheringFactor = init.boostGatheringFactor; else player.boostGatheringFactor = new Decimal(dimensionSave.boostGatheringFactor);
            if(player.factorPerBoostGathering === undefined) player.factorPerBoostGathering = init.factorPerBoostGathering; else player.factorPerBoostGathering = new Decimal(dimensionSave.factorPerBoostGathering);
             
            //player.meat = new Decimal(player.meat);
            //player.meatPerSec = new Decimal(player.meatPerSec);

            //player.gathering.cost = new Decimal(player.gathering.cost),
            //player.gathering.costUp = new Decimal(player.gathering.costUp),
            //player.gathering.factor = new Decimal(player.gathering.factor),
            //player.gathering.factorPerImprove = new Decimal(player.gathering.factorPerImprove),
            //player.gathering.amount = player.gathering.amount; 

            //player.factorPerTen = new Decimal(player.factorPerTen);

            //player.swarm1.cost = new Decimal(player.swarm1.cost);
            //player.swarm1.costUp = new Decimal(player.swarm1.costUp);
            //player.swarm1.amount = new Decimal(player.swarm1.amount);
            //player.swarm1.factor = new Decimal(player.swarm1.factor);
            //player.swarm1.growth = new Decimal(player.swarm1.growth);
            //player.swarm1.baseAmount = player.swarm1.baseAmount;   

            //player.swarm2.cost = new Decimal(player.swarm2.cost);
            //player.swarm2.costUp = new Decimal(player.swarm2.costUp);
            //player.swarm2.amount = new Decimal(player.swarm2.amount);
            //player.swarm2.factor = new Decimal(player.swarm2.factor);
            //player.swarm2.growth = new Decimal(player.swarm2.growth);
            //player.swarm2.baseAmount = player.swarm2.baseAmount; 

            //player.swarm3.cost = new Decimal(player.swarm3.cost);
            //player.swarm3.costUp = new Decimal(player.swarm3.costUp);
            //player.swarm3.amount = new Decimal(player.swarm3.amount);
            //player.swarm3.factor = new Decimal(player.swarm3.factor);
            //player.swarm3.growth = new Decimal(player.swarm3.growth);
            //player.swarm3.baseAmount = player.swarm3.baseAmount; 

            //player.swarm4.cost = new Decimal(player.swarm4.cost);
            //player.swarm4.costUp = new Decimal(player.swarm4.costUp);
            //player.swarm4.amount = new Decimal(player.swarm4.amount);
            //player.swarm4.factor = new Decimal(player.swarm4.factor);
            //player.swarm4.growth = new Decimal(player.swarm4.growth);
            //player.swarm4.baseAmount = player.swarm4.baseAmount; 

            //player.swarm5.cost = new Decimal(player.swarm5.cost);
            //player.swarm5.costUp = new Decimal(player.swarm5.costUp);
            //player.swarm5.amount = new Decimal(player.swarm5.amount);
            //player.swarm5.factor = new Decimal(player.swarm5.factor);
            //player.swarm5.growth = new Decimal(player.swarm5.growth);
            //player.swarm5.baseAmount = player.swarm5.baseAmount; 

            //player.swarm6.cost = new Decimal(player.swarm6.cost);
            //player.swarm6.costUp = new Decimal(player.swarm6.costUp);
            //player.swarm6.amount = new Decimal(player.swarm6.amount);
            //player.swarm6.factor = new Decimal(player.swarm6.factor);
            //player.swarm6.growth = new Decimal(player.swarm6.growth);
            //player.swarm6.baseAmount = player.swarm6.baseAmount; 
            
            //player.swarm7.cost = new Decimal(player.swarm7.cost);
            //player.swarm7.costUp = new Decimal(player.swarm7.costUp);
            //player.swarm7.amount = new Decimal(player.swarm7.amount);
            //player.swarm7.factor = new Decimal(player.swarm7.factor);
            //player.swarm7.growth = new Decimal(player.swarm7.growth);
            //player.swarm7.baseAmount = player.swarm7.baseAmount; 

            //player.swarm8.cost = new Decimal(player.swarm8.cost);
            //player.swarm8.costUp = new Decimal(player.swarm8.costUp);
            //player.swarm8.amount = new Decimal(player.swarm8.amount);
            //player.swarm8.factor = new Decimal(player.swarm8.factor);
            //player.swarm8.growth = new Decimal(player.swarm8.growth);
            //player.swarm8.baseAmount = player.swarm8.baseAmount; 

            //player.boost = player.boost;
            //player.boostReqSwarm = player.boostReqSwarm;
            //player.boostCost = player.boostCost;
            //player.boostCostUp = player.boostCostUp;
            //player.boostFactor = new Decimal("2");
            //player.boostFactorPerBoost = new Decimal("2");

            //player.boostGathering = player.boostGathering;
            //player.boostGatheringCost = player.boostGatheringCost;
            //player.boostGatheringCostUp = player.boostGatheringCostUp;
            //player.boostGatheringFactor = new Decimal(player.boostGatheringFactor);
            //player.factorPerBoostGathering = new Decimal(player.factorPerBoostGathering);

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
    
    player.boost = init.boost;
    player.boostReqSwarm = init.boostReqSwarm;
    player.boostCost = init.boostCost;
    player.boostCostUp = init.boostCostUp;
    player.boostFactor = init.boostFactor;
    player.boostFactorPerBoost = init.boostFactor;

    player.boostGathering = init.boostGathering;
    player.boostGatheringCost = init.boostGatheringCost;
    player.boostGatheringCostUp = init.boostGatheringCostUp;
    player.boostGatheringFactor = init.boostGatheringFactor;
    player.factorPerBoostGathering = init.factorPerBoostGathering;

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

    timer1 = setInterval(gameUpdate, 10);
    timer2 = setInterval(swarmUpdate, 10);   
}