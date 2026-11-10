# Companion construction

Build the handheld MeshCore client in this order. The wiring drawing is [diy-companion-wiring.jpg](diy-companion-wiring.jpg). The enclosure drawing is [diy-companion-construction.jpg](diy-companion-construction.jpg). This radio is the pocket kit: a XIAO nRF52840 with a Wio-SX1262 seated on it. It is the client for 100 Hickory Bend Drive. It is not the solar repeater. The repeater build is in [CONSTRUCTION.md](CONSTRUCTION.md).

The parts list, with prices and sources, is in [COMPANION-BOM.md](COMPANION-BOM.md).

Fit the antenna before the battery or USB is connected. Finish the flash and hear N4ARY TreeHtrRptr, or confirm the radio is on the US preset, before you button the board into the box.

## Tools

- Fine-tip soldering iron, flux, and solder
- Multimeter
- USB-C data cable
- Side cutters and a small pair of tweezers for the IPEX plug
- Heat-shrink
- A 6.5 mm drill bit and a small file
- Screwdriver for the lid
- MeshCore phone app, and Chrome or Edge for the flasher

## 1. Incoming check

Stop and correct the part before wiring if any of these fail.

1. The stacked kit is Seeed **102010710**, XIAO **nRF52840** plus **Wio-SX1262**. An ESP32 XIAO, or an 868-only module, is a different radio.
2. The LoRa module has an **IPEX** connector. The hardware range printed for this module is **862–930 MHz**.
3. The cell is one **3.7 V LiPo**, 1000–2000 mAh. The six Samsung 25R cells from the repeater do not connect here. Two cells in series would be 7.4 V.
4. The antenna is the **915 MHz** RAK blade, **RP-SMA** plug. An 868 MHz antenna, and an SMA plug on this RP-SMA bulkhead, will not do.
5. The pigtail is **IPEX to panel-mount RP-SMA**, about 15 cm, with a nut and washer. The blade screws onto that bulkhead outside the box.
6. The enclosure is the Hammond **1593PBK**, ABS, 92 × 67 × 28 mm, with a screw lid. The stack and the 60 mm cell sit side by side, and the USB-C plug has to reach the XIAO.

## 2. Stack the radio

1. Work on a clean bench. The XIAO headers bend if the module is rocked in sideways.
2. Match the Wio-SX1262 to the XIAO pins. It seats in one orientation. Press it on until every pin is home and the module sits flat.
3. Leave the battery unsoldered and the USB cable unplugged.

## 3. Antenna first

1. Snap the IPEX straight down onto the Wio-SX1262. A side pull lifts the receptacle off the board.
2. Screw the 915 MHz blade onto the RP-SMA end. The joint should be finger tight.
3. This blade stays on for every later step, including the first boot after flashing.

## 4. Battery

The charge pads are on the **back** of the XIAO, marked **BAT+** and **BAT−**.

1. Measure the cell. It should read between about 3.5 V and 4.2 V, and the red lead should be the positive you just measured.
2. Tin BAT+ and BAT−. Solder the cell positive to **BAT+** and the cell negative to **BAT−**.
3. Strain-relief the leads so a tug hits the heat-shrink, not the pad.
4. Measure again at the pads. BAT+ must be about the cell voltage above BAT−. A reversed cell is unsoldered before USB is plugged in.
5. The XIAO charges this cell from USB-C. Leave a separate charger off these pads. The onboard charge current is small, so a 2000 mAh cell takes many hours.

## 5. Flash

1. Whip still on, plug in USB-C. Use a cable that carries data.
2. Double-tap reset. A firmware drive appears.
3. In the MeshCore flasher, choose the **XIAO nRF52** companion **Bluetooth** image. Copy that UF2 onto the drive. The board reboots when the copy finishes.
4. Pair it in the MeshCore phone app. Set the region to **USA**. The factory image comes up on the EU channel and will not hear a Warner Robins repeater.
5. Set the US narrow preset and the transmit level:

```
set radio 910.525,62.5,7,5
set tx 22
advert
```

The phone app has the same settings when the serial console is not open. `set tx 22` is the SX1262 itself, about 22 dBm. This board has no amplifier. The repeater’s `set tx 16` does not belong on this client.

## 6. Hear the repeater

1. Take the blade to the **south** side of the house, at a window or just outside. N4ARY TreeHtrRptr is 2.3 miles that way, at 32.5331° N, 83.5743° W.
2. Keep the blade vertical. After the advert, that repeater should show up in the app on 910.525 MHz, SF7, 62.5 kHz, coding rate 5.
3. If it does not, try the same spot for Shadetree Repeater, about 4 miles southeast. N4ARY’s map record was updated on 2 November 2026. A miss can still be a powered-off tree node, a blade aimed into the room, or the radio still on the EU channel.
4. Confirm `get radio` shows `910.525, 62.5, 7, 5` and the transmit level is 22 before you call the path dead.

## 7. Enclosure

Close the radio in the box only after it has heard a repeater, or you have confirmed the preset and decided to keep testing from the south window. The box is part of the finished client. The blade lives outside it.

1. Drill one hole, about **6.5 mm**, in a short end of the box. Deburr it. That hole is for the RP-SMA bulkhead. The nut and washer go inside.
2. Cut a slot about **12 × 6 mm** in the opposite end so a USB-C plug reaches the XIAO with the lid closed.
3. Dry-fit the stack, the cell, and the pigtail before any screw is tightened. The IPEX lead leaves the Wio-SX1262 in a gentle curve. A kink at the plug cracks the receptacle.
4. Lay the cell flat beside the stack. Tape the leads down, clear of the USB slot and clear of the bulkhead nut.
5. Seat the bulkhead, tighten the nut, and screw the 915 MHz blade on the outside. The blade is vertical when the box sits on the south windowsill.
6. Close the lid. Plug USB through the slot and confirm the app still shows `910.525, 62.5, 7, 5` and transmit level 22. Run one more advert toward the south.

This box keeps the cell and the IPEX from being pulled off the bench. It is not the repeater’s weatherproof mast enclosure, and it does not go up the tree.

## Bare L1 board

The Wio Tracker L1 board is the same class of radio already fitted with the OLED, the joystick, and the L76K GPS. Seeed sells that board for about $34, and the finished Pro, with battery and case, for $47.90. Build the bare board only when you want your own case.

1. Plug the 2000 mAh cell into the **JST 1.0 mm** battery socket only after the meter agrees with the silkscreen. The socket is small and the polarity is not always red-to-red.
2. Fit the 915 MHz blade before USB.
3. Flash the **Wio Tracker L1** companion Bluetooth image. The XIAO image will not run this board.
4. Use the same `set radio` and `set tx 22` lines. The solar jack on this board is a **5 V** input. A 6 V panel does not connect to it.

## Stop conditions

Unplug USB and the cell before going on when any of these show up.

| What you see | What it means |
| --- | --- |
| Cell voltage near 7.4 V, or more than one cell in series | Wrong pack. This board wants one 3.7 V LiPo |
| BAT+ reads below BAT− | Leads are reversed |
| IPEX is off and the battery or USB is connected | The SX1262 can be damaged on the next transmission |
| The app is still on 869 MHz | EU preset. Set 910.525, 62.5, 7, 5 |
| Transmit level was copied from the repeater as 16 | Harmless, but low. This client uses 22 |
| The six-cell repeater leads are on the XIAO pads | Those cells belong to the RAK repeater, behind its own protection board |
