---
sidebar_position: 3
description: Asynchronous solver of tree-structured processes.
---

# Asynch

**About**

Asynch is a numerical library for solving differential equations with a tree structure.

It was developed by the [Iowa Flood Center (IFC)](https://iowafloodcenter.uiowa.edu/) for the timelly simulation of extensive river networks in Iowa, U.S.A., a state with plain topography and bordered both by Missouri and Mississipi Rivers. It is a core component of IFC's [near-realtime flood forecasting system](https://ifis.iowafloodcenter.org/ifis/).

Asynch is focused on parallelization for solving complex equations asynchronously in high performance computing (HPC) systems.

Official repo: [Iowa-Flood-Center/asynch](https://github.com/Iowa-Flood-Center/asynch).

**My contibutions**

- Improved the step of data input by adding support to optimized binary files;
- Implemented multiple different differential equations to represent surface and sub-surface water flow processes;
- Preformed the deployment and maintenance of the near-realtime operational system during a little more than 1 year;
- Improving and maintaining the documentation up-to-date.

**Tech stack**

- C programming language;
- MPI (Message Passing Interface) standard for parallel computing;
- Automake for automated compiling.