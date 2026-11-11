import { Callout, H1, H2, Stack, Stat, Table, Text } from "cursor/canvas";

export default function MiddleGeorgiaMeshAnalysis() {
  return (
    <Stack gap={20}>
      <Stack gap={6}>
        <H1>Middle Georgia MeshCore repeater analysis</H1>
        <Text tone="secondary">
          Pulled from map.meshcore.io on 10 November 2026. 71,011 uploaded
          nodes. Analysis center 32.72° N, 83.65° W, 40 mile radius (Warner
          Robins through Macon and Perry). Repeaters only. Fresh means map
          update within 14 days.
        </Text>
      </Stack>

      <Stack gap={8}>
        <Stat value="21" label="Repeaters in 40 miles" />
        <Stat value="17" label="Fresh within 14 days" tone="success" />
        <Stat value="4" label="Stale pins to ignore in planning" tone="warning" />
      </Stack>

      <Callout tone="info" title="Network already shares one channel">
        Nineteen of twenty-one repeaters are on 910.525 MHz, 62.5 kHz, SF7,
        coding rate 5. K3JSW TreeHtr and M4GRY_STA5 use coding rate 8. That
        still decodes coding-rate 5 traffic. Do not retune the region.
      </Callout>

      <H2>What the map shows</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={["Cluster", "Nodes", "Miles from Warner Robins", "Verdict"]}
        rows={[
          [
            "West Houston County",
            "KR4CDK_CORE, KO4DIE, PolePeter 1W",
            "5.3–6.7",
            "Dense. Do not add another",
          ],
          [
            "South Warner Robins",
            "N4ARY TreeHtrRptr, Shadetree",
            "6.3–7.8",
            "Covers the south end and the house path",
          ],
          [
            "Southwest / Perry edge",
            "K3JSW TreeHtr",
            "9.4",
            "Leave. Coding rate 8 is fine",
          ],
          [
            "Downtown Macon",
            "M4GRY_MAC (two pins)",
            "15.8",
            "Covered. Do not pile on Macon",
          ],
          [
            "North and east of Macon",
            "CannonBall274, Mexico Heater, M4GRY_* ring",
            "18–34",
            "Macon north side is already growing",
          ],
        ]}
      />

      <H2>Town coverage</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={["Place", "Nearest repeater", "Miles", "Gap?"]}
        columnAlign={["left", "left", "right", "left"]}
        rows={[
          ["Macon", "M4GRY_MAC", "0.5", "No"],
          ["Centerville", "PolePeter 1W", "3.4", "No"],
          ["Perry", "K3JSW TreeHtr", "4.3", "Weak edge"],
          ["Warner Robins center", "KR4CDK_CORE", "5.3", "Yes. City hole"],
          ["Byron", "PolePeter 1W", "5.6", "Weak edge"],
          ["Robins AFB", "KR4CDK_CORE", "6.6", "Yes. East of city hole"],
          ["Fort Valley", "PolePeter 1W", "10.7", "Yes. Western hole"],
        ]}
        rowTone={[
          "success",
          "success",
          "warning",
          "danger",
          "warning",
          "danger",
          "danger",
        ]}
      />

      <H2>Recommendations</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={["Priority", "Action", "Where", "Why"]}
        columnAlign={["right", "left", "left", "left"]}
        rows={[
          [
            "1",
            "Build one new repeater",
            "Between Watson Blvd and Russell Pkwy, west of Robins AFB",
            "Both roads run east-west; Watson is north of Russell. Fills the city hole. RAK 001, set tx 16, ~24 dBm, 5 dBi above the crown",
          ],
          [
            "2",
            "Build one new repeater only after a walk",
            "Fort Valley / Peach County corridor",
            "Nearest live node is 10.7 miles away. Add only if companions there hear nobody",
          ],
          [
            "3",
            "Optional bridge later",
            "Elevated site between Warner Robins and Macon, north of Watson Blvd toward I-75 / Byron",
            "Links the Houston County south mesh to the Macon M4GRY ring. Wait until Priority 1 is up and a northbound walk still shows a dead stretch",
          ],
          [
            "—",
            "Do not add",
            "West of Warner Robins near KR4CDK / KO4DIE / PolePeter",
            "Three live nodes already sit 5–7 miles west. Another only adds airtime",
          ],
          [
            "—",
            "Do not add",
            "100 Hickory Bend Drive or downtown Macon",
            "House already has N4ARY. Macon already has M4GRY_MAC",
          ],
          [
            "—",
            "Leave as-is",
            "N4ARY TreeHtrRptr, Shadetree, K3JSW",
            "South and southwest coverage is doing the job",
          ],
          [
            "—",
            "Ignore in planning",
            "Stale KO4DIE pin (Jul 2026), stale M4GRY_MAC twin, Dusty_02, Hadarits_01",
            "Old map pins are not extra coverage",
          ],
        ]}
        rowTone={[
          "success",
          "info",
          "info",
          "warning",
          "warning",
          "neutral",
          "warning",
        ]}
      />

      <H2>Repeaters nearest Warner Robins</H2>
      <Table
        framed
        striped
        stickyHeader
        headers={["Node", "Miles from WR", "Dir", "Miles from Macon", "Fresh?", "Note"]}
        columnAlign={["left", "right", "left", "right", "left", "left"]}
        rows={[
          ["KR4CDK_CORE", "5.3", "SW", "18.8", "Yes", "West cluster"],
          ["KO4DIE Core Repeater", "6.2", "SW", "19.1", "Yes", "West cluster"],
          ["N4ARY TreeHtrRptr", "6.2", "S", "21.5", "Yes", "House path"],
          ["KO4DIE Core Repeater", "6.3", "SW", "18.9", "No", "Stale second pin"],
          ["KO4AXV PolePeter 1W", "6.7", "W", "18.1", "Yes", "West cluster"],
          ["Shadetree Repeater", "7.8", "SE", "22.9", "Yes", "South end"],
          ["K3JSW TreeHtr", "9.4", "SW", "22.9", "Yes", "CR8"],
          ["M4GRY_MAC", "15.8", "N", "0.5", "Yes", "Macon"],
          ["CannonBall274/Repeater", "17.9", "NE", "10.8", "Yes", "East of Macon"],
        ]}
      />

      <Text tone="tertiary" size="small">
        Map centered on Middle Georgia:
        https://map.meshcore.io/?lat=32.72&lon=-83.65&zoom=10 . Warner Robins
        detail: https://map.meshcore.io/?lat=32.621&lon=-83.600&zoom=11
      </Text>
    </Stack>
  );
}
