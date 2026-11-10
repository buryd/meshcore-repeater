# Warner Robins repeater deployment

Public MeshCore map, 10 November 2026. Only uploaded nodes are counted. City point 32.621° N, 83.600° W, ground about 305 ft. Every listed repeater was on 910.525 MHz, 62.5 kHz, SF7, coding rate 5. PolePeter and K3JSW elevations were not measured. The build is in [CONSTRUCTION.md](CONSTRUCTION.md).

## Existing repeaters

| Node | From the city | Ground | What it covers |
| --- | --- | ---: | --- |
| KR4CDK_CORE | 5.3 mi west | 407 ft | West side, higher ground |
| KO4DIE | 6.2 and 6.3 mi west | 414 ft | Same western cluster |
| PolePeter 1W | 6.7 mi west | | Same western cluster |
| N4ARY TreeHtrRptr | 6.3 mi south | 299 ft | South end, in a tree |
| Shadetree | 7.8 mi southeast | 308 ft | South end |
| K3JSW TreeHtr | 9.4 mi southwest | | Far southwest |

## Plan

| Step | Area | Site | Action | Radio | Antenna |
| ---: | --- | --- | --- | --- | --- |
| 1 | West side | KR4CDK_CORE, KO4DIE, PolePeter 1W | Leave in place | Already on 910.525, 62.5, SF7, CR5 | Already installed, higher ground |
| 2 | South end | N4ARY TreeHtrRptr, Shadetree | Leave in place | Already on 910.525, 62.5, SF7, CR5 | Tree nodes, lower ground |
| 3 | City center and north end | North of Watson Boulevard, west of the Robins AFB fence, Russell Parkway corridor | Build one repeater | RAK label 001, `set tx 16`, about 24 dBm, preset `910.525, 62.5, 7, 5` | 5 dBi vertical, above the tree crown. Tree hoist, or a mast on a permanent site |
| 4 | House | 100 Hickory Bend Drive, 2.3 mi north of N4ARY. Shadetree is 4 mi southeast | Do not build a repeater | Companion on the same preset | Stock or the 915 MHz RP-SMA blade |
| 5 | Past Russell Parkway | Any stretch of the walk that hears nobody | Build a second repeater only on that stretch | Same radio, `set tx 16`, same preset | Same 5 dBi vertical, above the crown |

## Coverage

| Area | Existing | After step 3 |
| --- | --- | --- |
| City center | No repeater | Covered from the Russell Parkway site |
| North end | Farthest from every node | The new site is the near one |
| West side | KR4CDK_CORE, KO4DIE, PolePeter 1W | Unchanged |
| South end | N4ARY TreeHtrRptr and Shadetree | Unchanged |
| House | 2.3 miles from N4ARY | Still uses N4ARY |
