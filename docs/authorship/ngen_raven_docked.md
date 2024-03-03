---
sidebar_position: 2
description: NextGen and Raven frameworks ready to go.
---

# NGen + Raven Docked

**Official repository**

In Github's [adlzanchetta/ngen-raven_docked](https://github.com/adlzanchetta/ngen-raven_docked).

**About**

NOAA's NexGen is a proeminent framework for integrating multiple atmospheric/hydrologic models and datasets using the Basic Model Interface (BMI) standard. Is is,as of March 2024, on prototype stage and under intense development.

University of Waterloo's Raven is a established framework for modelling hydrologic processes widely adoped in Canada both by the operation and academic communities. Its BMI interface was recently implemented and is in the phase of tests and maturing, specially having the integration with NexGen.

**Problem to solve**

Both NexGen and Raven are in continuous development and are implemented in C++. Because of that, the use and development of a 'Raven under NexGen' faces challenges of:

- *incompatibility*:
  - the latest version of one of the frameworks may have changes that affects negativelly the compatibility between them;
  - example files can become invalid;
- *portability*:
  - changes in the dependencies/procedures for compiling one of them (particularly NexGen) can be pretty <s>anoying</s> time consuming;
  - Windows users would be excluded as NexGen is designed exclusively for Linux/Unix environments.

**Solution**

Use versioned containers (Docker) with continuous integration (Github Actions) end-to-end tests!

**Tech stack**

- *Docker*: creating Dockerfiles and implementing/debugging with Dev Containers;
- *Python* and *Bash* scripting: for implementing series of end-to-end tests;
- *Github Actions*: for continuous integration through automated tests.