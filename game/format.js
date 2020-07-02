var FormatList = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QaVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QaTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qd', 'UQd', 'DQd', 'TQd', 'QaQd', 'QtQd', 'SxQd', 'SpQd', 'OQd', 'NQd', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QaOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QaNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce',];
function getAbbreviation(e)
{
    const prefixes = [
    ['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
    ['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
    ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']]
    const prefixes2 = ['', 'MI', 'MC', 'NA']
	var result = ''
    e = Math.floor(e/3)-1;
	e2 = 0
    while (e > 0) 
    {		
		var partE = e % 1000
        if (partE > 0) 
        {
			if (partE == 1 && e2 > 0) var prefix = ""
			else var prefix = prefixes[0][partE % 10] + prefixes[1][Math.floor(partE/10) % 10] + prefixes[2][Math.floor(partE/100)]
			if (result == "") result = prefix + prefixes2[e2]
			else result = prefix + prefixes2[e2] + '-' + result
		}
		e = Math.floor(e/1000)
		e2++
	}
	return result
}

function getShortAbbreviation(e) 
{
	const prefixes = [
	['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
	['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
	['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']]
	const prefixes2 = ['', 'MI', 'MC', 'NA', 'PC', 'FM', 'AT', 'ZP', 'YC', 'XN', 
	'VE', 'ME', 'DE', 'TE', 'TeE', 'PE', 'HE', 'HeE', 'OC', 'EC', 
	'IS', 'MS', 'DS', 'TS', 'TeS', 'PS', 'HS', 'HeS', 'OS', 'ES', 
	'TN', 'MTN', 'DTN', 'TTN', 'TeTN', 'PTN', 'HTN', 'HeTN', 'OTN', 'ETN', 
	'TeC', 'MTeC', 'DTeC', 'TTeC', 'TeTeC', 'PTeC', 'HTeC', 'HeTeC', 'OTeC', 'ETeC', 
	'PC', 'MPC', 'DPC', 'TPC', 'TePC', 'PPC', 'HPC', 'HePC', 'OPC', 'EPC', 
	'HC', 'MHC', 'DHC', 'THC', 'TeHC', 'PHC', 'HHC', 'HeHC', 'OHC', 'EHC', 
	'HeC', 'MHeC', 'DHeC', 'THeC', 'TeHeC', 'PHeC', 'HHeC', 'HeHeC', 'OHeC', 'EHeC', 
	'OC', 'MOC', 'DOC', 'TOC', 'TeOC', 'POC', 'HOC', 'HeOC', 'OOC', 'EOC', 
	'EC', 'MEC', 'DEC', 'TEC', 'TeEC', 'PEC', 'HEC', 'HeEC', 'OEC', 'EEC', 
	'HT', 'MHT', 'DHT']
	var result = ''
	var id = Math.floor(e/3-1)
	var log = Math.floor(Math.log10(id))
	var step = Math.max(Math.floor(log/3-3),0)
	id = Math.round(id/Math.pow(10,Math.max(log-9,0)))*Math.pow(10,Math.max(log-9,0)%3)
    while (id > 0) 
    {		
		var partE = id % 1000
        if (partE > 0)
        {
			if (partE == 1 && step > 0) var prefix = ""
			else var prefix = prefixes[0][partE % 10] + prefixes[1][Math.floor(partE/10) % 10] + prefixes[2][Math.floor(partE/100)]
			if (result == "") result = prefix + prefixes2[step]
			else result = prefix + prefixes2[step] + '-' + result
		}
		id = Math.floor(id/1000)
		step++
	}
	return result
}

/* function formatValue1(value, places, placesUnder1000) 
{
    if (value instanceof Decimal) 
    {
        var power = value.e
        var matissa = value.mantissa
    } 
    else 
    {
        var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
        var power = Math.floor(Math.log10(value));
    }
    if (power >= 33) 
    {
        // if (player.options.scientific !== undefined && player.options.scientific.significantDigits !== undefined) places=player.options.scientific.significantDigits-1
        places = Math.min(places,14-Math.floor(Math.log10(power)))
        if (places >=0) 
        {
            matissa = matissa.toFixed(places)
            if (matissa >= 10) 
            {
                matissa = (1).toFixed(places);
                power++;
            }
        } 
        else matissa = ""
        if (power > 100000)
        {
            //return matissa + "e" + formatValue(power, 3, 3)
            //if (power >= 1e12 && player.options.commas == "Commas") return matissa + "e" + formatValue("Standard", power, 3, 3)
            //return matissa + "e" + getFullExpansion(power);
        }
        return matissa + "e" + power;
    }
    alert(value.e);
    pow = power;
    if (matissa >= 1000)
    {
        matissa /= 1000;
        power++;
    }
    places=Math.min(places,14-Math.floor(Math.log10(power)));
    if (places >= 0) 
    {
        matissa = (matissa * Decimal.pow(10, power % 3)).toFixed(places);
        if (matissa >= 1e3)
        {
            power += 3;
            places = Math.min(places,14-Math.floor(Math.log10(power)));
            matissa = (1).toFixed(places);
        }
    }
    if (places <0) matissa = ""
    //if (power <= 33) return matissa + " " + FormatList[(power - (power % 3)) / 3];
    //else return (matissa + "e" + pow);
    if (power <= 303) return matissa + " " + FormatList[(power - (power % 3)) / 3];
    else if (power > 3e11+2) return getShortAbbreviation(power) + "s";
    else return matissa + " " + getAbbreviation(power);
    if (value < 1000)
    {
        return (value).toFixed(placesUnder1000);
    }
    else
    {
        return "Infinite";
    }
} */

function formatValue(notation, value, places, placesUnder1000) 
{
    if (value > 1000)
    {
        if (value instanceof Decimal) 
        {
            var power = value.e
            var matissa = value.mantissa
        } else {
            var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
            var power = Math.floor(Math.log10(value));
        }
        if (notation === "Mixed scientific" && power >= 33) 
        {
            //if (player.options.scientific !== undefined && player.options.scientific.significantDigits !== undefined) places=player.options.scientific.significantDigits-1
            places=Math.min(places,14-Math.floor(Math.log10(power)))
            if (places>=0) 
            {
                matissa = matissa.toFixed(places)
                if (matissa >= 10) 
                {
                    matissa = (1).toFixed(places);
                    power++;
                }
            } 
            else matissa = ""      
            if (power >= 1e6) return matissa + "e" + formatValue("Standard", power, 3, 3)
            return matissa + "e" + power;
        }
        if (matissa >= 1000) 
        {
            matissa /= 1000;
            power++;
        }
        places=Math.min(places,14-Math.floor(Math.log10(power)))
        if (places >= 0) 
        {
            matissa = (matissa * Decimal.pow(10, power % 3)).toFixed(places)
            if (matissa >= 1e3) 
            {
                power += 3
                places = Math.min(places,14-Math.floor(Math.log10(power)))
                matissa = (1).toFixed(places)
            }
        }
        if (places<0) matissa = ""

        if (notation === "Standard" || notation === "Mixed scientific") 
        {
            if (power <= 303) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else if (power > 3e11+2) return getShortAbbreviation(power) + "s";
            else return matissa + " " + getAbbreviation(power);
        } 
        else 
        {
            if (power > 100000) power = power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return "1337 H4CK3R"
        }
    }
    else (value < 1000) 
    {
        return (value).toFixed(placesUnder1000);
    }
}

function getFullExpansion(num) 
{
	if (num === null) return "NaN"
	if (isNaN(num)) return "NaN"
	if (typeof(num) != "number") if (isNaN(num.logarithm)) return "NaN"
	if (num > 1e12) return shorten(num)
}

shorten = function (meat)
{
    return formatValue("Mixed scientific", meat, 2, 1);
}

shortenCosts = function (meat)
{
    return formatValue("Mixed scientific", meat, 2, 0);
};

shortenCount = function (factor)
{
    return formatValue("Mixed scientific", factor, 2, 0);
}


shortenFactor = function (factor)
{
    return formatValue("Mixed scientific", factor, 2, 1);
}

