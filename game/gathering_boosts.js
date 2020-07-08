function softReset2()
{ 
    if (player.swarm8.baseAmount >= player.boostGatheringCost)
    {
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

        player.boostGathering = player.boostGathering + 1;
        player.boostGatheringCost = init.boostGatheringCost;
        player.boostGatheringCostUp = init.boostGatheringCostUp;
        player.boostGatheringFactor = init.boostGatheringFactor;
        player.factorPerBoostGathering = init.factorPerBoostGathering;
 
        player.boostGatheringCost = init.boostGatheringCost + player.boostGatheringCostUp * player.boostGathering;
    }
}