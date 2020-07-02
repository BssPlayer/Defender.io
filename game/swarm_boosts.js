function softReset1()
{ 
    if (player["swarm" + player.BoostReqSwarm].baseAmount >= player.boostCost)
    {
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
            boost: player.boost + 1,
            BoostReqSwarm: player.BoostReqSwarm,
            boostCost: 20,
            boostCostUp: 20,
            boostFactor: new Decimal("1"),
            boostFactorPerBoost: new Decimal("1.5"),
        }

        if (player.boost < 4)
        {
            player.BoostReqSwarm = 4 + player.boost;
            player.boostCost = 20;
        }
        if (player.boost >= 4)
        {
            player.BoostReqSwarm = 8;
            player.boostCost = 20 + 20 * (player.boost - 4);
        }
    }
}