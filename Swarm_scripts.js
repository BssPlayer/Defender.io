function buySwarm(tier)
{
    if (tier==1 && player.meat >= player.swarm1cost)
    {
        player.meat -= player.swarm1cost;
        player.swarm1boughtCount++;
        player.swarm1count++;
        if (player.swarm1boughtCount % 10 == 0)
        {
            player.swarm1cost *= player.swarm1costUp;
            player.swarm1factor *= player.factorPerTen;
        }
    }
    if (tier==2 && player.meat >= player.swarm2cost)
    {
        player.meat -= player.swarm2cost;
        player.swarm2boughtCount++;
        player.swarm2count++;
        if (player.swarm2boughtCount % 10 == 0)
        {
            player.swarm2cost *= player.swarm2costUp; 
            player.swarm1factor *= player.factorPerTen;
        }
    }
}

setInterval(swarmUpdate, 1000);
function swarmUpdate()
{
    player.meat += player.swarm1count * player.swarm1factor;
    player.swarm1count += player.swarm2count * player.swarm2factor;
}

