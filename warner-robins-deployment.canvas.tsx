import { Callout, H1, H2, Stack, Table, Text } from "cursor/canvas";

export default function WarnerRobinsDeployment() {
  return (
    <Stack gap={20}>
      <Stack gap={6}>
        <H1>Recommended MeshCore repeater plan, Warner Robins, GA</H1>
        <Text tone="secondary">
          Pulled from map.meshcore.io on 10 November 2026, 71,011 uploaded
          nodes. Centered on 32.621° N, 83.600° W. Repeaters only. Every live
          node below is on 910.525 MHz, 62.5 kHz, SF7. Coding rate is 5,
          except K3JSW at 8, which still hears coding rate 5.
        </Text>
      </Stack>

      <Callout tone="success" title="One change: build the city repeater">
        The pull does not add a repeater in Warner Robins. West and south stay
        as they are. Build one repeater between Watson Boulevard and Russell
        Parkway, west of the Robins AFB fence. Both roads run east-west;
        Watson is north of Russell. Antenna above the tree crown. RAK label
        001, set tx 16, about 24 dBm, 5 dBi vertical.
      </Callout>

      <H2>Plan</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={[
          "Decision",
          "West side",
          "South end",
          "City and north",
          "House",
          "Second repeater",
        ]}
        rows={[
          [
            "On the map now",
            "KR4CDK_CORE, KO4DIE, PolePeter 1W",
            "N4ARY TreeHtrRptr, Shadetree",
            "No repeater",
            "2.3 mi north of N4ARY",
            "None",
          ],
          [
            "Recommended change",
            "None. Do not add another here",
            "None",
            "Build one repeater",
            "Do not add a repeater",
            "Only if a walk hears nobody",
          ],
          [
            "Place",
            "5.3–6.7 mi from the city, about 400 ft",
            "N4ARY 2.3 mi south of the house",
            "Between Watson Blvd and Russell Pkwy, west of the base",
            "100 Hickory Bend Drive",
            "North of Watson toward Macon",
          ],
          [
            "Radio",
            "Already on the preset",
            "Already on the preset",
            "RAK 001, set tx 16, about 24 dBm",
            "Companion, same preset",
            "Same as the new repeater",
          ],
          [
            "Antenna",
            "Already installed",
            "Tree antennas",
            "5 dBi, above the crown",
            "915 MHz RP-SMA blade",
            "5 dBi, above the crown",
          ],
          [
            "Mount",
            "Existing",
            "Trees",
            "Tree hoist, or a mast",
            "Handheld",
            "Tree hoist, or a mast",
          ],
        ]}
        rowTone={["neutral", "success", "neutral", "neutral", "neutral", "neutral"]}
      />

      <H2>Repeaters within 10 miles of the city</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={["Node", "Miles", "Direction", "From the house", "Last map update", "Role"]}
        columnAlign={["left", "right", "left", "left", "left", "left"]}
        rows={[
          ["KR4CDK_CORE", "5.3", "Southwest", "4.8 mi west", "8 Nov 2026", "Live west cluster"],
          ["KO4DIE Core Repeater", "6.2", "Southwest", "5.8 mi west", "8 Nov 2026", "Live west cluster"],
          ["KO4DIE Core Repeater", "6.3", "Southwest", "6.1 mi west", "20 Jul 2026", "Stale second pin"],
          ["N4ARY TreeHtrRptr", "6.3", "South", "2.3 mi south", "2 Nov 2026", "Live south end"],
          ["KO4AXV PolePeter 1W", "6.7", "West", "7.2 mi west", "2 Nov 2026", "Live west cluster"],
          ["Shadetree Repeater", "7.8", "Southeast", "4.0 mi southeast", "3 Nov 2026", "Live south end"],
          ["K3JSW TreeHtr", "9.4", "Southwest", "7.6 mi southwest", "9 Nov 2026", "Live, coding rate 8"],
        ]}
        rowTone={["neutral", "neutral", "warning", "info", "neutral", "info", "neutral"]}
      />
      <Text tone="tertiary" size="small">
        No repeater is at the city point. The next nodes north are two
        M4GRY_MAC pins about 16 miles away, and CannonBall274 is about 18
        miles northeast. Those do not cover Warner Robins. Map:
        https://map.meshcore.io/?lat=32.621&lon=-83.600&zoom=11
      </Text>
    </Stack>
  );
}
