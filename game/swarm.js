function buyGathering()
{
    if (player.meat.gte(player.gathering.cost))
    {
        player.meat = player.meat.minus(player.gathering.cost);
        player.gathering.amount++;
        player.gathering.cost = player.gathering.cost.mul(player.gathering.costUp);
    }
}

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
        }
    }
}

function buyMaxSwarm(tier)
{
    if (player.meat.gte(player["swarm" + tier].cost * (10 - player["swarm" + tier].baseAmount % 10)))
    {
        player.meat = player.meat.minus(player["swarm" + tier].cost * (10 - player["swarm" + tier].baseAmount % 10));
        player["swarm" + tier].amount = player["swarm" + tier].amount.plus(10 - player["swarm" + tier].baseAmount % 10);
        player["swarm" + tier].baseAmount += (10 - player["swarm" + tier].baseAmount % 10);
        player["swarm" + tier].cost = player["swarm" + tier].cost.mul(player["swarm" + tier].costUp);
    }
}

function swarmUpdate()
{
    player.meat = player.meat.plus(player.meatPerSec.div(100));
    for(var a = 1; a < 8; a++)
    { 
        player["swarm" + a].amount = player["swarm" + a].amount.plus(player["swarm" + a].growth.div(300+(30*a)));
    }
}

