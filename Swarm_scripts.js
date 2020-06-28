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
            player.swarm2factor *= player.factorPerTen;
        }
    }
    if (tier==3 && player.meat >= player.swarm3cost)
    {
        player.meat -= player.swarm3cost;
        player.swarm3boughtCount++;
        player.swarm3count++;
        if (player.swarm3boughtCount % 10 == 0)
        {
            player.swarm3cost *= player.swarm3costUp; 
            player.swarm3factor *= player.factorPerTen;
        }
    }
    if (tier==4 && player.meat >= player.swarm4cost)
    {
        player.meat -= player.swarm4cost;
        player.swarm4boughtCount++;
        player.swarm4count++;
        if (player.swarm4boughtCount % 10 == 0)
        {
            player.swarm4cost *= player.swarm4costUp; 
            player.swarm4factor *= player.factorPerTen;
        }
    }
}

setInterval(swarmUpdate, 1000);
function swarmUpdate()
{
    player.meat += player.meatPerSec;
    player.swarm1count += swarm1growth;
    player.swarm2count += swarm2growth;
    player.swarm3count += swarm3growth;
}

