

function justPitch (base, step) {

    while( step >= 12){
        base = base * 2;
        step -= 12;
    }
    return base * justLookup[step];

}


justLookup = {
    0:1,
    1:16/15,
    2:9/8,
    3:6/5,
    4:5/4,
    5:4/3,
    6:7/5,
    7:3/2,
    8:8/5,
    9:5/3,
    10:7/4,
    11:15/8,
}
