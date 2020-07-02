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
            player.BoostReqSwarm = player.BoostReqSwarm;
            player.boostCost = player.boostCost;
            player.boostCostUp = player.boostCostUp;
            player.boostFactor = new Decimal("2");
            player.boostFactorPerBoost = new Decimal("2");

            console.log("Loaded")
            initGame()
        }
    } 
    catch(e) { }
}

function reset_save()
{
    //localStorage.removeItem(btoa("swarm_game_save"));

    player =
    {
        meat: new Decimal("1e1"),
        meatPerSec: new Decimal("0"),
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
        BoostReqSwarm: 4,
        boostCost: 20,
        boostCostUp: 20,
        boostFactor: new Decimal("1"),
        boostFactorPerBoost: new Decimal("1.5"),
    }
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
    timer2 = setInterval(swarmUpdate, 100);   
}

/* if (player.meat == undefined) player.meat = new Decimal("1e1");
    if (player.meatPerSec == undefined) player.meatPerSec = new Decimal("0");
    if (player.factorPerTen == undefined) player.factorPerTen = new Decimal("2");
    if (player.swarm1 == undefined) player.swarm1 =
    {
        cost: new Decimal("1e1"),
        costUp: new Decimal("1e3"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };   
    if (player.swarm2 == undefined) player.swarm2 =
    {
        cost: new Decimal("1e2"),
        costUp: new Decimal("1e4"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };   
    if (player.swarm3 == undefined) player.swarm3 =
    {
        cost: new Decimal("1e4"),
        costUp: new Decimal("1e5"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };
    if (player.swarm4 == undefined) player.swarm4 =
    {
        cost: new Decimal("1e6"),
        costUp: new Decimal("1e6"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };    
    if (player.swarm5 == undefined) player.swarm5 =
    {
        cost: new Decimal("1e9"),
        costUp: new Decimal("1e8"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };    
    if (player.swarm6 == undefined) player.swarm6 =
    {
        cost: new Decimal("1e13"),
        costUp: new Decimal("1e10"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };    
    if (player.swarm7 == undefined) player.swarm7 =
    {
        cost: new Decimal("1e18"),
        costUp: new Decimal("1e12"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    };  
    if (player.swarm8 == undefined) player.swarm8 =
    {
        cost: new Decimal("1e24"),
        costUp: new Decimal("1e15"),
        amount: new Decimal("0"),
        factor: new Decimal("1"),
        growth: new Decimal("0"),
        baseAmount: 0
    }; */