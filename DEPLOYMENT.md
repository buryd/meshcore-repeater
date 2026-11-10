# Warner Robins repeater deployment

Public MeshCore map, 10 November 2026. Only uploaded nodes are counted. City point 32.621° N, 83.600° W, ground about 305 ft. Every listed repeater was on 910.525 MHz, 62.5 kHz, SF7, coding rate 5. The build is in [CONSTRUCTION.md](CONSTRUCTION.md).

## Existing repeaters

Seven repeaters within 10 miles of the city point. None at that point. PolePeter and K3JSW elevations were not measured.

| Node | From the city | Ground | What it covers |
| --- | --- | ---: | --- |
| KR4CDK_CORE | 5.3 mi west | 407 ft | West side, higher ground |
| KO4DIE | 6.2 and 6.3 mi west | 414 ft | Same western cluster |
| PolePeter 1W | 6.7 mi west | | Same western cluster |
| N4ARY TreeHtrRptr | 6.3 mi south | 299 ft | South end, in a tree |
| Shadetree | 7.8 mi southeast | 308 ft | South end |
| K3JSW TreeHtr | 9.4 mi southwest | | Far southwest |

The house at 100 Hickory Bend Drive is 2.3 miles north of N4ARY TreeHtrRptr. Shadetree is about 4 miles southeast of the house.

## Plan

| Item | Value |
| --- | --- |
| New repeaters | 1 |
| Site | North of Watson Boulevard, west of the Robins AFB fence, Russell Parkway corridor |
| Antenna height | Above the tree crown |
| Mount | Tree hoist on a tree. Mast on a permanent site |
| Radio | RAK label code 001 |
| Transmit command | `set tx 16` |
| Power at the antenna port | about 24 dBm |
| Antenna | 5 dBi vertical |
| Preset | `910.525, 62.5, 7, 5` |
| House site | Do not build here |

## Coverage

| Area | Existing | With the new repeater |
| --- | --- | --- |
| City center | No repeater | Covered from the north-central site |
| North end | Farthest from every node | The new site is the near one |
| West side | KR4CDK_CORE, KO4DIE, PolePeter on higher ground | Left as it is |
| South end | N4ARY TreeHtrRptr and Shadetree | Left as it is |
| House | 2.3 miles from N4ARY | Still uses N4ARY |

## A second repeater

Walk a companion on the same preset past Russell Parkway.

| What the walk shows | What to do |
| --- | --- |
| A stretch that hears nobody | Add the second repeater on that stretch |
| The new city repeater | Stop |
| The city repeater and the western cluster both loud | Stop. That site adds airtime and no new ground |
