# 33 cm solar MeshCore repeater

A weatherproof 915 MHz MeshCore repeater for the US and Canada. The radio is the RAK WisMesh high-power kit: RAK19007 base, RAK3401 core (nRF52840), and RAK13302 amplifier, battery-powered variant, label code 001. Six Samsung 25R cells in parallel feed the amplifier. A 6 V, 10 W panel charges them through a CN3791. The antenna is a 5 dBi 915 MHz vertical.

The “33 cm” figure is the wavelength, about 910 MHz. The antenna itself is about 35–45 cm tall.

Wiring is in [rak-repeater-wiring.jpg](rak-repeater-wiring.jpg). The build order is in [CONSTRUCTION.md](CONSTRUCTION.md). The Warner Robins plan is in [DEPLOYMENT.md](DEPLOYMENT.md), with the same tables as [DEPLOYMENT-repeaters.csv](DEPLOYMENT-repeaters.csv) and [DEPLOYMENT-plan.csv](DEPLOYMENT-plan.csv), and in [warner-robins-deployment.canvas.tsx](warner-robins-deployment.canvas.tsx). The handheld companion is in [COMPANION-CONSTRUCTION.md](COMPANION-CONSTRUCTION.md), with its parts in [COMPANION-BOM.md](COMPANION-BOM.md) and its wiring in [diy-companion-wiring.jpg](diy-companion-wiring.jpg).

## Operating point

| | |
| --- | --- |
| Frequency | 910.525 MHz, 62.5 kHz, SF7, CR5 |
| CLI | `set tx 16` |
| Antenna port | about 24 dBm (about 250 mW) |
| TX pulse | 560 mA at 5 V |
| Pack | six Samsung 25R, parallel only, stay above 3.7 V while transmitting |

FCC ID 2AF6B-13302 authorizes 0.2897 W peak conducted (about 24.6 dBm) on 902.3–914.9 MHz. `set tx` sets the SX1262, and the amplifier adds about 8 dB. `set tx 16` is the datasheet row for 24 dBm at the port. `set tx 22` is the datasheet 30 dBm row and is outside that grant. Keep the antenna at least 20 cm from people, and use an antenna covered by the grant. MeshCore encrypts payloads, so this is Part 15 unlicensed ISM.

USB on the base board is for flashing. It does not run the amplifier. Order label code 001 (battery powered, onboard boost makes 5 V for the PA). Label code 002 is the external-5 V board and is a different design.

## Power

Listening dominates the watt-hours. The amplifier dominates the wiring. At 24 dBm the board pulls 560 mA at 5 V for each transmission, about 0.9 A from the pack after the onboard boost. Below about 3.6–3.7 V the amplifier output collapses. Six high-drain cells and short 16 AWG leads keep a transmit pulse off that knee. High-capacity low-drain cells are the wrong pack for this board.

The CN3791 is the only charger. Use the 1-cell, 4.2 V module, set near 2 A. Leave the RAK19007 solar jack open: it is a ~5 V input with a ceiling near 5.5 V, and a 6 V panel’s open-circuit voltage exceeds that. Panel open-circuit voltage stays under 8 V. A “12 V” panel (Voc around 21 V) does not belong on this charger.

Cells are parallel only. Series wiring would make 7.4 V. Match cell voltages before paralleling. One 1S protection board, 4.2 V chemistry, at least 3 A, sits between the cells and everything else. Its cutoff is far below 3.7 V, so it protects against a short and does not save a sagging pack.

Planning model, south-facing, tilt = latitude + 15°, system factor 0.70. Listen is planned at 30 mA and 3.7 V. Each forward is 0.2 s at 560 mA and 5 V through an 85% boost. Typical traffic (2,000 forwards/day) is about 3.0 Wh/day. Usable pack energy above the 3.7 V floor, cold-derated, is about 19 Wh, roughly six days of dark reserve. A 10 W panel is the baseline at mid-latitudes. Use 20 W around 47°N or on a busy repeater. Confirm December with PVWatts.

Charge current is held off outside about 5–45°C by two thermostats taped to the cells.

## Wiring

Red is positive, black is the return, blue is the antenna lead.

1. Panel positive → 3 A fuse → thermostat that closes above 5°C → thermostat that opens above 45°C → CN3791 IN+. 18 AWG, with a drip loop.
2. Panel negative → CN3791 IN−. No fuse on the negative.
3. Six paralleled 25R cells → 1S protection board.
4. Protected positive → CN3791 BAT+, and, through a 2 A polyfuse on the radio lead only, the RAK19007 battery plug. 16 AWG, shorter than 15 cm. The charger tap is ahead of the polyfuse, so a radio short does not disconnect the charger.
5. Protected negative → CN3791 BAT− and the RAK19007 battery negative.
6. RAK13302 IPEX → 10 cm pigtail → N-female bulkhead on the top of the box → 5 dBi omni.

Connect the antenna, or a dummy load, before applying power, including the first boot after flashing. An open IPEX can damage the amplifier.

## Mast and seal

Antenna at the top of a 1.5 inch mast, at least one wavelength (33 cm) above the panel and the box. Panel faces south, tilt = latitude + 15°, and no flatter than 45° so snow sheds. Enclosure about 220×170×110 mm, light color, on the north face in the panel’s shadow.

The N-female bulkhead, on its O-ring, is the only top opening. PG7 solar gland and M12 breather go on the bottom. No lid holes and no weep hole. 10 g desiccant. Coat the base board and the core. Leave the amplifier shield bare. Mask USB, IPEX, and the battery plug. Neutral-cure silicone on the bulkhead nut. Self-amalgamating tape, then UV tape, on the antenna joint. On a permanent site, bond the mast to an 8 ft ground rod with 10 AWG. A direct strike still destroys the radio.

Check VSWR at 910.5 MHz. Retune or replace the antenna if it is above 1.5.

## Firmware

Double-tap reset on the RAK19007 and flash the MeshCore repeater build named “RAK WisMesh 1W Booster (3401 + 13302)”. Serial console is 115200. Factory firmware comes up on the EU channel, 869.618 MHz.

```
set name SITE-RPT
set radio 910.525,62.5,7,5
set tx 16
powersaving on
advert
reboot
```

`get radio` should show 910.525, 62.5, 7, 5 and `get tx` should show 16. A second MeshCore node should hear the advert. Listening current on the pack lead should be tens of milliamps. In sun, the charger should indicate charge and the cell voltage should rise while the repeater stays up.

For the first month, read battery voltage from a companion once a week. A resting voltage that falls toward 3.8 V and does not recover after a sunny day points at the panel, a thermostat, or a cell. The amplifier is already in trouble if it transmits at 3.7 V.

## Bill of materials

Approximate 2026 US prices, about $290 before the mast and ground rod.

| Item | Specification | USD |
| --- | --- | --- |
| WisMesh high-power kit | RAK19007, RAK3401, RAK13302 code 001, 915 MHz | 110 |
| Solar panel | 6 V nominal, 10 W, Voc under 8 V | 22 |
| CN3791 charger | 1-cell, 4.2 V float, about 2 A | 8 |
| 18650 cells | Samsung 25R, 2500 mAh, 20 A, unprotected, ×6 | 36 |
| 1S protection board | 4.2 V chemistry, at least 3 A | 4 |
| Cell holder | Six cells in parallel | 8 |
| Thermostats | Closes above 5°C, opens above 45°C, ≥3 A | 6 |
| Fuses | 3 A inline on the panel, 2 A polyfuse on the radio | 4 |
| Enclosure | IP67, light color, about 220×170×110 mm | 28 |
| Entries | PG7 gland and M12 breather, both on the bottom | 6 |
| Pigtail | 10 cm IPEX to N-female bulkhead, with O-ring | 10 |
| Antenna | 915 MHz, 5 dBi, N-female, a type listed on the grant | 20 |
| Install kit | 16 AWG pack leads, 18 AWG panel wire, clamps, tape, desiccant | 28 |
| **Total** | Before the mast and ground rod | **290** |
