function buySwarm(tier)
{
    if (player.meat.gte(player["swarm" + tier].cost))
    {
        player.meat = player.meat.minus(player["swarm" + tier].cost);
        player["swarm" + tier].baseAmount++;
        player["swarm" + tier].amount = player["swarm" + tier].amount.plus(1);
        if (player["swarm" + tier].baseAmount % 10 == 0)
        {
            player["swarm" + tier].cost = player["swarm" + tier].cost.mul(player["swarm" + tier].costUp);
            player["swarm" + tier].factor = player["swarm" + tier].factor.mul(player.factorPerTen);
        }
    }
}

setInterval(swarmUpdate, 1000);
function swarmUpdate()
{
    player.meat = player.meat.plus(player.meatPerSec);
    player.swarm1.amount = player.swarm1.amount.plus(player.swarm1growth);
    player.swarm2.amount = player.swarm2.amount.plus(player.swarm2growth);
    player.swarm3.amount = player.swarm3.amount.plus(player.swarm3growth);
}

