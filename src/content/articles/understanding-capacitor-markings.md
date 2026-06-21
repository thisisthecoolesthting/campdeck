---
title: "understanding-capacitor-markings"
site: tinkerbench
topic: "household-staples"
tier: mvp
cardTitle: "understanding-capacitor-markings"
cardPick: "Editorial household-staples pick from TinkerBench."
updatedAt: '2026-06-06T03:05:47.216Z'
relatedProducts: []
status: published
subtopic: household-staples
publishedAt: '2026-06-06T03:05:47.216Z'
metaDescription: "understanding-capacitor-markings"
excerpt: "understanding-capacitor-markings"
heroImage: /images/heroes/understanding-capacitor-markings.webp
tags:
  - tinkerbench
  - home gym
author: marcus-webb
---


*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission.*

Capacitors are fundamental components in nearly every electronic circuit. Understanding their markings is crucial for choosing the right capacitor for a project, troubleshooting issues, and avoiding potentially damaging mistakes. While seemingly straightforward, capacitor markings can be confusing due to variations in coding schemes, unit prefixes, and tolerance indicators. This guide breaks down the common markings found on capacitors, allowing you to confidently identify their key characteristics.
---
## Understanding Capacitance Values

The capacitance value, measured in Farads (F), indicates a capacitor's ability to store electrical charge. Since a Farad is a very large unit, capacitors typically use prefixes like micro (µ), nano (n), and pico (p) to denote smaller values. Common capacitor values range from picofarads (pF) to microfarads (µF).

### Direct Value Markings

Many larger capacitors, especially electrolytic and film capacitors, display the capacitance value directly, along with the unit. For example, a capacitor might be marked "100µF" or "4.7µF." This is the easiest type of marking to interpret.

### Numeric Codes

Smaller capacitors, particularly ceramic capacitors, often use a three-digit numeric code to indicate the capacitance in picofarads (pF). The first two digits represent the significant figures, and the third digit represents the multiplier, which is the power of 10 to multiply by.

*   **Example 1:** A capacitor marked "104" indicates a capacitance of 10 x 10<sup>4</sup> pF = 100,000 pF = 100 nF = 0.1 µF.
*   **Example 2:** A capacitor marked "222" indicates a capacitance of 22 x 10<sup>2</sup> pF = 2200 pF = 2.2 nF.
*   **Example 3:** A capacitor marked "473" indicates a capacitance of 47 x 10<sup>3</sup> pF = 47,000 pF = 47 nF = 0.047 µF.

When decoding these values, it's useful to remember the relationships between pF, nF, and µF:

*   1 nF = 1000 pF
*   1 µF = 1000 nF = 1,000,000 pF

### Decimal Values and R-Notation

Some capacitors use the letter "R" to indicate the decimal point in values less than 10 pF.

*   **Example 1:** "2R2" means 2.2 pF.
*   **Example 2:** "0R5" means 0.5 pF.

## Interpreting Voltage Ratings

The voltage rating indicates the maximum DC voltage that can be safely applied across the capacitor. Exceeding this voltage can damage the capacitor, leading to failure and potentially dangerous consequences. Always choose a capacitor with a voltage rating that is significantly higher than the maximum voltage expected in the circuit. A safety factor of at least 20% is generally recommended.

### Direct Voltage Markings

Similar to capacitance, many capacitors directly display the voltage rating, followed by the unit "V" or "VDC" (Volts DC). For instance, a capacitor may be marked "25V" or "100VDC."

### Voltage Codes

Some capacitors, especially smaller ceramic capacitors, use a voltage code instead of directly marking the voltage. These codes can vary depending on the manufacturer, but some common codes include:

*   16V: 1C
*   25V: 1E
*   35V: 1V
*   50V: 1H
*   63V: 1J
*   100V: 2A

Always refer to the manufacturer's datasheet or a reliable reference table to decode these voltage codes accurately.

It's crucial to understand that the voltage rating is a *maximum* value. Using a capacitor with a higher voltage rating than necessary is generally acceptable and can even improve reliability. However, using a capacitor with a voltage rating *lower* than required is dangerous and should be avoided at all costs.

## Deciphering Tolerance Codes

Capacitor tolerance specifies the allowable deviation of the actual capacitance value from the nominal value. Tolerance is usually expressed as a percentage (e.g., ±10%) or using a letter code. Lower tolerance values indicate more precise capacitors.

### Percentage Tolerance

Some capacitors directly display the tolerance as a percentage. For example, "100µF ±10%" means the actual capacitance can range from 90µF to 110µF.

### Letter Codes

Letter codes are frequently used to indicate tolerance, especially on smaller capacitors. The most common tolerance codes are:

*   B: ±0.1 pF (very precise, often used for NP0/C0G ceramic capacitors)
*   C: ±0.25 pF (very precise, often used for NP0/C0G ceramic capacitors)
*   D: ±0.5 pF (very precise, often used for NP0/C0G ceramic capacitors)
*   F: ±1% (high precision)
*   G: ±2% (high precision)
*   J: ±5% (common for many types of capacitors)
*   K: ±10% (common for electrolytic and some ceramic capacitors)
*   M: ±20% (common for electrolytic capacitors)

For critical applications requiring precise capacitance values, such as filter circuits or timing circuits, choose capacitors with tighter tolerances (e.g., ±1% or ±5%). For less critical applications, a wider tolerance (e.g., ±10% or ±20%) may be acceptable.

## Other Important Markings

In addition to capacitance, voltage, and tolerance, other markings may be present on capacitors, providing additional information about their characteristics and suitability for specific applications.

### Temperature Coefficient

The temperature coefficient indicates how much the capacitance changes with temperature. This is especially important for applications where the temperature fluctuates significantly. Capacitors with negative-positive-zero (NP0 or C0G) temperature coefficients are highly stable and exhibit minimal capacitance change over a wide temperature range. These are often preferred for critical timing and filter circuits. Other common temperature coefficients include X7R and Y5V, which have larger capacitance variations with temperature.

### Polarity

Electrolytic capacitors are polarized, meaning they have a positive (+) and a negative (-) terminal. It is crucial to connect electrolytic capacitors with the correct polarity to avoid damage or even explosion. The negative terminal is usually marked with a stripe and a series of "-" symbols. Solid tantalum capacitors are also polarized. Film and ceramic capacitors are generally non-polarized and can be connected in either direction.  Incorrect polarity can lead to capacitor failure, so always double-check before soldering.

### Manufacturer and Series

Capacitors may also be marked with the manufacturer's name or logo and a series designation. This information can be helpful for identifying the capacitor's specifications and finding datasheets online.

### Date Code

Some capacitors include a date code, indicating the date of manufacture. This can be useful for assessing the age of the capacitor and determining whether it may be nearing the end of its lifespan, especially for electrolytic capacitors, which can dry out over time.

### Safety Certifications

Capacitors used in mains-powered equipment may have safety certifications, such as UL, VDE, or CSA markings. These certifications indicate that the capacitor has been tested and approved for use in specific applications and voltage ranges.

Understanding capacitor markings is an essential skill for any electronics hobbyist or professional. By carefully interpreting the capacitance value, voltage rating, tolerance, and other markings, you can select the right capacitor for your project, troubleshoot problems effectively, and ensure the safe and reliable operation of your circuits. Before starting any project, take a look at the [Arduino Uno Rev3](/products/b008grtsv6-arduino-uno-rev3-a000066-atmega328p-microcontroller-16mhz-14/) to see if it contains the right capacitors for your next build.
