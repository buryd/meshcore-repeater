# Warner Robins repeater deployment

Public MeshCore map, 10 November 2026. Only uploaded nodes are counted. City point 32.621° N, 83.600° W, ground about 305 ft. Every listed repeater was on 910.525 MHz, 62.5 kHz, SF7, coding rate 5. PolePeter and K3JSW elevations were not measured. The build is in [CONSTRUCTION.md](CONSTRUCTION.md).

## Existing repeaters

<table>
  <thead>
    <tr>
      <th>Node</th>
      <th>From the city</th>
      <th>Ground</th>
      <th>What it covers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>KR4CDK_CORE</td>
      <td>5.3 mi west</td>
      <td>407 ft</td>
      <td>West side, higher ground</td>
    </tr>
    <tr>
      <td>KO4DIE</td>
      <td>6.2 and 6.3 mi west</td>
      <td>414 ft</td>
      <td>Same western cluster</td>
    </tr>
    <tr>
      <td>PolePeter 1W</td>
      <td>6.7 mi west</td>
      <td></td>
      <td>Same western cluster</td>
    </tr>
    <tr>
      <td>N4ARY TreeHtrRptr</td>
      <td>6.3 mi south</td>
      <td>299 ft</td>
      <td>South end, in a tree</td>
    </tr>
    <tr>
      <td>Shadetree</td>
      <td>7.8 mi southeast</td>
      <td>308 ft</td>
      <td>South end</td>
    </tr>
    <tr>
      <td>K3JSW TreeHtr</td>
      <td>9.4 mi southwest</td>
      <td></td>
      <td>Far southwest</td>
    </tr>
  </tbody>
</table>

## Plan

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Area</th>
      <th>Site</th>
      <th>Action</th>
      <th>Radio</th>
      <th>Antenna</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>West side</td>
      <td>KR4CDK_CORE, KO4DIE, PolePeter 1W</td>
      <td>Leave in place</td>
      <td>Already on 910.525, 62.5, SF7, CR5</td>
      <td>Already installed, higher ground</td>
    </tr>
    <tr>
      <td>2</td>
      <td>South end</td>
      <td>N4ARY TreeHtrRptr, Shadetree</td>
      <td>Leave in place</td>
      <td>Already on 910.525, 62.5, SF7, CR5</td>
      <td>Tree nodes, lower ground</td>
    </tr>
    <tr>
      <td>3</td>
      <td>City center and north end</td>
      <td>North of Watson Boulevard, west of the Robins AFB fence, Russell Parkway corridor</td>
      <td>Build one repeater</td>
      <td>RAK label 001, set tx 16, about 24 dBm, preset 910.525, 62.5, 7, 5</td>
      <td>5 dBi vertical, above the tree crown. Tree hoist, or a mast on a permanent site</td>
    </tr>
    <tr>
      <td>4</td>
      <td>House</td>
      <td>100 Hickory Bend Drive, 2.3 mi north of N4ARY. Shadetree is 4 mi southeast</td>
      <td>Do not build a repeater</td>
      <td>Companion on the same preset</td>
      <td>Stock or the 915 MHz RP-SMA blade</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Past Russell Parkway</td>
      <td>Any stretch of the walk that hears nobody</td>
      <td>Build a second repeater only on that stretch</td>
      <td>Same radio, set tx 16, same preset</td>
      <td>Same 5 dBi vertical, above the crown</td>
    </tr>
  </tbody>
</table>

## Coverage

<table>
  <thead>
    <tr>
      <th>Area</th>
      <th>Existing</th>
      <th>After step 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>City center</td>
      <td>No repeater</td>
      <td>Covered from the Russell Parkway site</td>
    </tr>
    <tr>
      <td>North end</td>
      <td>Farthest from every node</td>
      <td>The new site is the near one</td>
    </tr>
    <tr>
      <td>West side</td>
      <td>KR4CDK_CORE, KO4DIE, PolePeter 1W</td>
      <td>Unchanged</td>
    </tr>
    <tr>
      <td>South end</td>
      <td>N4ARY TreeHtrRptr and Shadetree</td>
      <td>Unchanged</td>
    </tr>
    <tr>
      <td>House</td>
      <td>2.3 miles from N4ARY</td>
      <td>Still uses N4ARY</td>
    </tr>
  </tbody>
</table>
