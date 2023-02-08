# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Facilities, Agents, and Shifts tables
getShiftsByFacility
generateReport

Assumptions
1. custom_id of agent by the facility is alphanumeric character of length 32.
2.
Tasks

NOTE : ALL ESTIMATIONS IN STORY POINT
1. Create new table AgentCustomIds(id[auto increment field], Facility(Foreign Key- Facilities Table), Agent(Foreign Key - Agents Table), custom_id(VARCHAR(32))). ESTIMATION - 1
2. Create data entry page for facilities to add custom id for any given Agent. This should create an entry in AgentCustomIds Table.ESTIMATION - 2
3. generateReport - Modify function to query AgentCustomIds table and add custom_id attribute in the report. ESTIMATION - 1
4. getShiftsByFacility - Modify function to query AgentCustomIds table and add custom_id attribute in the agent metadata.ESTIMATION - 1