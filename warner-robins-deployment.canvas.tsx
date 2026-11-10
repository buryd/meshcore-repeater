import { Callout, H1, H2, Stack, Table, Text } from "cursor/canvas";

export default function WarnerRobinsDeployment() {
  return (
    <Stack gap={20}>
      <Stack gap={6}>
        <H1>Recommended MeshCore repeater plan, Warner Robins, GA</H1>
        <Text tone="secondary">
          Map snapshot 10 November 2026 from map.meshcore.io. Only uploaded
          nodes are counted. Every column stays on 910.525 MHz, 62.5 kHz, SF7,
          coding rate 5. The recommended change is one new repeater. The nodes
          already on the map stay.
        </Text>
      </Stack>

      <Callout tone="success" title="Build one repeater">
        North of Watson Boulevard, west of the Robins AFB fence, on the
        Russell Parkway corridor. Antenna above the tree crown. RAK label 001,
        set tx 16, about 24 dBm, 5 dBi vertical.
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
            "None",
            "None",
            "Build one repeater",
            "Do not add a repeater",
            "Only if a walk hears nobody",
          ],
          [
            "Place",
            "5.3–6.7 mi west, about 400 ft",
            "South of the city, about 300 ft",
            "Russell Parkway, north of Watson, west of the base",
            "100 Hickory Bend Drive",
            "Past Russell Parkway",
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
        headers={["Node", "Miles from city", "Direction", "Ground", "Coverage"]}
        columnAlign={["left", "right", "left", "right", "left"]}
        rows={[
          ["KR4CDK_CORE", "5.3", "West", "407 ft", "West side"],
          ["KO4DIE", "6.2", "West", "414 ft", "West side"],
          ["PolePeter 1W", "6.7", "West", "—", "West side"],
          ["N4ARY TreeHtrRptr", "6.3", "South", "299 ft", "South end"],
          ["Shadetree", "7.8", "Southeast", "308 ft", "South end"],
          ["K3JSW TreeHtr", "9.4", "Southwest", "—", "Far southwest"],
        ]}
      />
      <Text tone="tertiary" size="small">
        City point 32.621° N, 83.600° W, ground about 305 ft. PolePeter and
        K3JSW elevations were not measured. None of these nodes is at the city
        point.
      </Text>
    </Stack>
  );
}
