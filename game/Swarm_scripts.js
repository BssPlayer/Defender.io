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

function swarmUpdate()
{
    player.meat = player.meat.plus(player.meatPerSec.div(10));
    for(var a = 1; a < 8; a++)
    { 
        player["swarm" + a].amount = player["swarm" + a].amount.plus(player["swarm" + a].growth.div(30+(3*a)));
    }
}

