# Warner Robins repeater deployment

One new repeater, elevated, in north-central Warner Robins. The repeaters already on the map cover the west side and the south end. They leave the city center and the north end open.

This is a placement for the solar repeater in [CONSTRUCTION.md](CONSTRUCTION.md). The radio stays label code 001, `set tx 16`, about 24 dBm at the antenna port, with the 5 dBi vertical. The preset stays `910.525, 62.5, 7, 5`.

## Existing layout

Public MeshCore map, 10 November 2026. Only uploaded nodes are counted. Within 10 miles of the city point, 32.621° N, 83.600° W, ground about 305 ft, there were seven repeaters and none at that point. Every one of them was on 910.525 MHz, 62.5 kHz, SF7, coding rate 5.

| Node | From the city | Ground | What it covers |
| --- | --- | ---: | --- |
| KR4CDK_CORE | 5.3 mi west | 407 ft | West side, higher ground |
| KO4DIE | 6.2 and 6.3 mi west | 414 ft | Same western cluster |
| PolePeter 1W | 6.7 mi west | | Same western cluster |
| N4ARY TreeHtrRptr | 6.3 mi south | 299 ft | South end, in a tree |
| Shadetree | 7.8 mi southeast | 308 ft | South end |
| K3JSW TreeHtr | 9.4 mi southwest | | Far southwest |

PolePeter and K3JSW elevations were not measured. The western nodes sit near 400 ft. The southern nodes sit near 300 ft.

The house at 100 Hickory Bend Drive is on the south side of town, 2.3 miles north of N4ARY TreeHtrRptr. That southern pocket is already the nearest coverage to the house. Shadetree is about 4 miles southeast of the house.

## Where to build

North of Watson Boulevard and west of the Robins AFB fence, along the Russell Parkway corridor. Get the antenna above the tree crown. Use the tree-hoist assembly if the site is a tree, or the mast assembly if the site is permanent.

That site is the near repeater for downtown and for the north end. It is far enough from KR4CDK_CORE and KO4DIE that it does not pile onto the western cluster. It does not replace N4ARY for the south end.

Do not build this repeater at the house. A repeater there would hear N4ARY and cover ground the south nodes already cover.

## When to add another

Walk a companion, on the same preset, past Russell Parkway. Add a second repeater only on a stretch of that walk that hears nobody. A repeater that hears the new city node and the western cluster both loudly spends airtime without covering new ground.
