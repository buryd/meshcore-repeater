# Construction procedure

Build the weatherproof solar MeshCore repeater in this order. The wiring drawing is [rak-repeater-wiring.jpg](rak-repeater-wiring.jpg). Parts and the operating point are in [README.md](README.md).

Finish the bench test, including a flash and a heard advert, before any hole is drilled in the box. A coated, sealed radio that is still on the EU channel has to be opened again.

## Tools

- Multimeter
- Temperature-controlled soldering iron, flux, and solder
- 16 AWG and 18 AWG stranded wire, heat-shrink, and a 2 A polyfuse
- Side cutters, wire strippers, and a crimper if the battery plug is not pre-made
- Phillips driver for the WisBlock M1.2 × 3 mm screws
- Step drill, N-female hole saw or step bit, and a deburring tool
- Neutral-cure silicone, self-amalgamating tape, and UV-resistant tape
- Acrylic conformal coating and masking tape
- 50 Ω dummy load rated at least 1 W, for the first power-up
- USB-C cable and a serial terminal at 115200 8N1

## 1. Incoming check

Stop and correct the part before wiring if any of these fail.

1. RAK13302 label reads **001**, and the underside has **no** external 5 V connector. Code 002 is a different board.
2. The kit is the **915 MHz** variant. An 868 MHz module will not sit on 910.525 MHz inside its grant.
3. The CN3791 module is the **one-cell, 4.2 V** version. A two-cell module floats at 8.4 V and will overcharge every cell in this pack.
4. The panel is **6 V nominal, 10 W** (20 W only for a northern or busy site). Measure open-circuit voltage in sun. It must stay under 8 V. A 12 V panel, open-circuit near 21 V, does not connect to this charger or to the RAK19007.
5. Cells are Samsung **25R** (2500 mAh, 20 A) or an equivalent unprotected high-drain 18650. High-capacity low-drain cells will sag through 3.7 V on a transmit pulse.
6. The protection board is **1S, 4.2 V chemistry, at least 3 A**.
7. One thermostat **closes** above about 5°C. The other **opens** above about 45°C. Both are rated at least 3 A.
8. The antenna is a **915 MHz, 5 dBi, N-female** vertical of a type covered by FCC grant 2AF6B-13302.

Read the current-sense resistor on the CN3791. Charge current is `0.120 / R` amps. A mark of R060 is 2.0 A, R050 is 2.4 A, R100 is 1.2 A. Anything from about 1.5 A to 2.4 A is right for this panel. Replace a module that is set near 0.5 A, or change only that sense resistor to 0.060 Ω, 0.5 W or larger.

## 2. Cell pack

Work on a bare, non-conductive bench. These cells are unprotected until the board is connected. A short across one 25R can weld a tool.

1. Rest each cell, then measure its voltage. Write the six readings down.
2. Parallel only cells that already agree within **0.05 V**. Charge a low cell on a separate one-cell charger until it matches, then remeasure. A larger gap makes the higher cells dump current straight into the lower ones.
3. Confirm the holder is wired **all in parallel**: every positive tied together, every negative tied together. Six cells in series would be about 25 V. Two series strings would be 7.4 V. Either one destroys this charger and the radio.
4. Samsung 25R cells are flat-top. Use a holder whose positive contact reaches a flat top, or fit a flat-top spacer. A button-top-only spring can miss the cell.
5. Insert the cells. Measure the holder output. It must read the same as one cell, about 3.6–4.1 V, and the polarity must match the holder markings.
6. Connect the holder to the **battery** pads of the protection board, following that board’s silkscreen. Measure the **protected** output. It must match the pack voltage and the marked polarity. A reversed reading means the leads are swapped. Fix it before anything else is attached.

## 3. Charge path

The CN3791 is the only charger. The RAK19007 solar jack stays empty for the life of the repeater.

1. At room temperature, both thermostats should read a fraction of an ohm. A cold thermostat that is open indoors is the wrong part, or the room is below 5°C.
2. Wire the panel positive through the **3 A fuse**, then through the cold thermostat, then through the hot thermostat. Both thermostat bodies get taped to the cells later, in step 8. For the bench, leave them in the wire and keep them at room temperature.
3. Thermostat output goes to CN3791 **IN+**. Panel negative goes straight to **IN−**. Use 18 AWG. The negative lead has no fuse.
4. From the protected positive, run 16 AWG to CN3791 **BAT+**. From the protected negative, run 16 AWG to **BAT−**.
5. On that same protected positive, **ahead of** the radio fuse, the charger tap is already made. Continue the positive from that junction through the **2 A polyfuse**, and only then toward the radio. The polyfuse is in the radio lead alone. If it opens, the charger must still be connected to the pack.
6. Keep every pack lead shorter than **15 cm**.

Bench-check the charger before the radio is attached:

1. Disconnect the radio lead at the polyfuse so only the pack and the charger are in circuit.
2. Cover most of the panel, connect it, then uncover it.
3. In sun the charge indicator should light and the cell voltage should creep up. It must approach **4.2 V** and stop. A climb past 4.3 V means the module is the wrong chemistry or the wrong cell count. Disconnect it.
4. Shade the panel. Charging should stop. The pack must still read its own voltage on the protected terminals.

## 4. Radio stack

1. Seat the **RAK3401** in the WisBlock **core** slot of the RAK19007. Seat the **RAK13302** in the **IO** slot. The silkscreen names both slots. Press each connector straight down until it is fully seated, then fit the M1.2 × 3 mm screws.
2. Leave the RAK19007 **solar jack** empty. Do not park a spare plug in it.
3. Snap the IPEX plug on the RAK13302 straight down. Side pressure lifts the receptacle off the board. Use the 10 cm IPEX to N-female pigtail and nothing else in that path.
4. Screw the 50 Ω dummy load onto the N-female. The amplifier can be damaged by transmitting into an open connector, and the first boot after a flash can transmit.
5. Confirm the battery-plug polarity against the **silkscreen on the RAK19007**, with the meter, before it is plugged in. Red is not a guarantee. The plug connects to the protected pack through the 2 A polyfuse on the positive lead.

## 5. Flash and bench radio test

Do this on the bench with the dummy load fitted and the lid still off.

1. Plug the pack into the RAK19007. Listening current in the pack lead should be a few tens of milliamps. Hundreds of milliamps at idle means a short or a mis-seated module. Unplug and find it.
2. Connect USB. USB powers the core for flashing. It does not run the amplifier, so leave the pack connected for any test that transmits.
3. Double-tap the reset button on the RAK19007. A firmware drive appears. In the MeshCore flasher, choose role **Repeater** and the target **RAK WisMesh 1W Booster (3401 + 13302)**. Copy that UF2 onto the drive. Skip the external-storage (W25Q16) image. This build has no add-on flash board.
4. When the board reboots, open the serial console at **115200**. Factory firmware wakes on the EU channel, 869.618 MHz. Set the US narrow preset before any on-air test:

```
set name SITE-RPT
set radio 910.525,62.5,7,5
set tx 16
powersaving on
advert
reboot
```

Use a name that tells other operators which site this is. If `powersaving` is rejected by the build, continue with the rest.

5. After reboot, `get radio` must show `910.525, 62.5, 7, 5` and `get tx` must show `16`. `set tx` is the SX1262 level. The amplifier adds about 8 dB, so the port is about 24 dBm, under the 0.29 W grant. Leave it there.
6. A second MeshCore node on the same preset should hear the advert.
7. Swap the dummy load for the real antenna only after that check passes. Put the antenna a couple of meters away, still connected, and confirm the advert again. Disconnect power before unplugging the IPEX.

## 6. Enclosure

The box is about 220 × 170 × 110 mm, light gray or white, so six cells and the stack fit with air around the amplifier shield.

1. One hole in the **top**: the N-female bulkhead, sized to the connector, with the O-ring on the outside face.
2. Two holes in the **bottom**: a PG7 gland for the panel cable, and an M12 waterproof breather.
3. The lid gets no holes. There is no weep hole. The breather and a 10 g desiccant pack handle pressure and condensation.
4. Deburr every hole. Metal chips inside the box will find the protection board.
5. Dry-fit the bulkhead, the gland, the holder, and the stack. The IPEX pigtail must reach the bulkhead without strain and without coiling into the amplifier shield. Pack leads must still be under 15 cm after the parts are screwed down.

## 7. Coat

Coat only after the bench test has passed. A coating run hides a solder mistake.

1. Unplug the pack and the USB cable. Leave the modules screwed down.
2. Mask the USB connector, the IPEX receptacle, the battery plug, the solar jack, and the reset button.
3. Coat the RAK19007 and the RAK3401. Leave the RAK13302 amplifier shield **bare** so transmit heat can leave the can.
4. Let the coating dry for the time on the can, then remove the masks. Confirm no film is left in the USB port, on the IPEX, or inside the battery plug.
5. Put the desiccant in only after the coating is dry, so the solvent does not load the pack.

## 8. Close the box

1. Mount the holder, the protection board, the CN3791, and the WisBlock stack. Keep the amplifier shield clear of wires and of the lid.
2. Tape both thermostat bodies to the cells, flat, with the sensing face against a cell. They stay in series on the panel positive.
3. Refit the 16 AWG pack leads. Check again that the charger tap is on the battery side of the 2 A polyfuse.
4. Pass the panel cable through the PG7 from below, leave a **drip loop** outside the gland, then land IN+ and IN−. Tighten the gland on the jacket, not on bare conductors.
5. Seat the bulkhead on its O-ring. Bed the inside nut with neutral-cure silicone. Acid-cure silicone attacks the copper and the coating. Leave it to cure for a day before the mast goes up.
6. Snap the IPEX on, screw the antenna on, then connect the pack. Antenna first, then power.
7. Repeat `get radio` and `get tx`. Run one advert. Listening current should still be tens of milliamps.
8. Drop in the 10 g desiccant and close the lid. The lid seal gets no extra holes and no sealant that would glue it shut.

## 9. Mast

1. Antenna at the top of 1.5 inch EMT. The antenna base sits at least **33 cm** above the panel and above the box.
2. Panel faces **south**. Tilt is latitude + 15°, and no flatter than 45°, so winter sun is favored and snow sheds.
3. Hang the box on the **north** face, in the panel’s shadow.
4. Stainless clamps. Leave the drip loop free to drip, clear of the breather.
5. Wrap the antenna joint with self-amalgamating tape, then a layer of UV-resistant tape.
6. On a permanent site, bond the mast to an 8 ft ground rod with 10 AWG copper. A direct strike still destroys the radio.
7. If an analyzer is available, check VSWR at 910.5 MHz. Above 1.5, retune or replace the antenna before calling the site done.

## 10. First month

Once a week, read battery voltage from a companion node.

- In sun, the charger indication should be present and the resting voltage should recover after a cloudy stretch.
- A resting voltage that falls toward 3.8 V and does not recover after a sunny day points at the panel, a thermostat, or a cell. The amplifier is already in trouble if it is transmitting at 3.7 V.
- Clean the panel in spring. Replace the joint tape and the desiccant once a year.

## Stop conditions

Unplug the pack and fix the cause before going on when any of these show up.

| What you see | What it means |
| --- | --- |
| RAK13302 label is 002, or it has a 5 V jack on the bottom | Wrong power variant |
| Pack voltage is near 7.4 V or higher | Cells are in series |
| Charger output climbs past 4.3 V | Wrong CN3791, or it is a multi-cell module |
| Idle current is hundreds of milliamps | Short, reversed plug, or a module not seated |
| `get tx` returns 22 | Port would be about 30 dBm, outside the grant. Set it back to 16 |
| `get radio` shows 869.618 | Still on the EU channel. Set `910.525,62.5,7,5` and reboot |
| Open IPEX, or no antenna and no dummy load, with the pack connected | Amplifier can be damaged on the next transmission |
