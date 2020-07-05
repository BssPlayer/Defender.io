function softReset1()
{ 
    if (player["swarm" + player.boostReqSwarm].baseAmount >= player.boostCost)
    {
        player.meat = new Decimal("1e1");
        player.meatPerSec = new Decimal("0");

        player.gathering =
        {
            cost: new Decimal("1e3"),
            costUp: new Decimal("1e1"),
            factor: new Decimal("1"),
            factorPerImprove: new Decimal("2"),
            amount: 0,
        };
    
        player.factorPerTen = new Decimal("2");
        player.swarm1 = 
        {
            cost: new Decimal("1e1"),
            costUp: new Decimal("1e3"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };
        player.swarm2 =
        {
            cost: new Decimal("1e2"),
            costUp: new Decimal("1e4"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };
        player.swarm3 =
        {
            cost: new Decimal("1e4"),
            costUp: new Decimal("1e5"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };
        player.swarm4 =
        {
            cost: new Decimal("1e6"),
            costUp: new Decimal("1e6"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        },    
        player.swarm5 =  
        {
            cost: new Decimal("1e9"),
            costUp: new Decimal("1e8"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };    
        player.swarm6 = 
        {
            cost: new Decimal("1e13"),
            costUp: new Decimal("1e10"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };    
        player.swarm7 = 
        {
            cost: new Decimal("1e18"),
            costUp: new Decimal("1e12"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };   
        player.swarm8 = 
        {
            cost: new Decimal("1e24"),
            costUp: new Decimal("1e15"),
            amount: new Decimal("0"),
            factor: new Decimal("1"),
            growth: new Decimal("0"),
            baseAmount: 0
        };

        player.boost = player.boost + 1;
        player.boostReqSwarm = player.boostReqSwarm;
        player.boostCost = 20;
        player.boostCostUp = 20;
        player.boostFactor = new Decimal("1");
        player.boostFactorPerBoost = new Decimal("1.5");

        if (player.boost < 4)
        {
            player.boostReqSwarm = 4 + player.boost;
            player.boostCost = 20;
        }
        if (player.boost >= 4)
        {
            player.boostReqSwarm = 8;
            player.boostCost = 20 + 20 * (player.boost - 4);
        }
    }
}